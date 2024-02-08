import { GET_USER_API_PATH, getUserMe } from '@/shared/api/user/get-me';
import { POST_USER_LOGOUT_API_PATH, postUserLogout } from '@/shared/api/user/post-logout';
import { css } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const GlobalNavigationBarDesktop = () => {
  const router = useRouter();
  const { mutateAsync: logoutMutateAsync } = useMutation({
    mutationKey: [POST_USER_LOGOUT_API_PATH],
    mutationFn: () => postUserLogout(),
  });
  const { data } = useQuery({
    queryKey: [GET_USER_API_PATH],
    queryFn: () => getUserMe(),
  });

  const handleLogout = async () => {
    try {
      await logoutMutateAsync();
      router.push('/');
    } catch (error) {}
  };

  return (
    <Container>
      <div
        className={css({
          display: 'flex',
          gap: '16px',
        })}
      >
        <Link href="/" className={css({ fontWeight: 'bold' })}>
          홈
        </Link>
        {data ? (
          <div>
            <div>{data.email}</div>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div>
            <Link href="/user/join" className={css({ fontWeight: 'bold' })}>
              회원가입
            </Link>
            <Link href="/user/login" className={css({ fontWeight: 'bold' })}>
              로그인
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled('div', {
  base: {
    position: 'sticky',
    display: { base: 'none', md: 'flex' },
    top: 0,
    left: 0,
    zIndex: 1,
    borderBottom: '1px solid var(--colors-gray-300)',
  },
});
