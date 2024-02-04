import { styled } from '@/styled-system/jsx';

export const GlobalNavigationBarDesktop = () => {
  return <Container>123</Container>;
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
