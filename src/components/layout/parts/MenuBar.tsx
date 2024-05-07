import MainNav from './MainNav';
import OtherNav from './OtherNav';

const MenuBar = () => {
  const isMainPage = window.location.pathname === '/';

  return isMainPage ? <MainNav /> : <OtherNav />;
};

export default MenuBar;
