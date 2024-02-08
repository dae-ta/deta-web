import { postUserJoin } from '@/shared/api/user/post-join';
import { postUserLogin } from '@/shared/api/user/post-login';
import { GlobalNavigationBar } from '@/shared/component/global-navigation-bar';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

const Join = () => {
  const router = useRouter();
  const { mutateAsync: postUserJoinMutate } = useMutation({ mutationFn: postUserJoin });
  const { mutateAsync: postUserLoginMutate } = useMutation({ mutationFn: postUserLogin });
  const [errorMessage, setErrorMessage] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await postUserJoinMutate(data);
      await postUserLoginMutate(data);
      router.replace('/');
    } catch (error: any) {
      const message = error.response?.data?.message;
      if (message) {
        setErrorMessage(message);
      } else {
        setErrorMessage('알 수 없는 에러가 발생했습니다.');
      }
    }
  };

  return (
    <>
      <GlobalNavigationBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input
          defaultValue=""
          {...register('email', {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: '이메일형식에 맞지 않습니다.',
            },
          })}
        />
        <label>password</label>
        <input type="password" defaultValue="" {...register('password', { required: true })} />
        <button type="submit">회원가입하기</button>
      </form>
      {errors.email && <p>{errors.email.message}</p>}
      {errors.password && <p>{errors.password.message}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default Join;
