import { GlobalNavigationBarDesktop } from '@/src/shared/component/global-navigation-bar/desktop';
import { css } from '@/styled-system/css';

export default function Home() {
  return (
    <>
      <div className={css({ fontSize: '23px', fontWeight: 'bold' })}>Hello 🐼!</div>
      <GlobalNavigationBarDesktop />
    </>
  );
}
