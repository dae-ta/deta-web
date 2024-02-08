import { GlobalNavigationBarDesktop } from '@/shared/component/global-navigation-bar/desktop';
import { GlobalNavigationBarMobile } from '@/shared/component/global-navigation-bar/mobile';

export const GlobalNavigationBar = () => {
  return (
    <>
      <GlobalNavigationBarDesktop />
      <GlobalNavigationBarMobile />
    </>
  );
};
