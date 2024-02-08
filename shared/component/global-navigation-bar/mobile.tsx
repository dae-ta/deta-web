import { styled } from '@/styled-system/jsx';

export const GlobalNavigationBarMobile = () => {
  return <Container>mobile gnb</Container>;
};

const Container = styled('div', {
  base: {
    position: 'sticky',
    display: { base: 'flex', md: 'none' },
    top: 0,
    left: 0,
    zIndex: 1,
    borderBottom: '1px solid var(--colors-gray-300)',
  },
});
