import { GET_USER_API_PATH, getUserMe } from '@/shared/api/user/get-me';
import { GlobalNavigationBar } from '@/shared/component/global-navigation-bar';
import { css } from '@/styled-system/css';
import { DehydratedState, HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_USER_API_PATH],
    queryFn: () => getUserMe(req),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Home() {
  return (
    <>
      <GlobalNavigationBar />
      <div className={css({ fontWeight: 'bold' })}>home</div>
    </>
  );
}

const HomeRoute = ({ dehydratedState }: { dehydratedState: DehydratedState }) => {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Home />
    </HydrationBoundary>
  );
};

export default HomeRoute;
