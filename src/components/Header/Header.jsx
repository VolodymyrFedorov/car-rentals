import { useEffect, useState, useRef } from 'react';
import { IoIosMenu as IconMenu } from 'react-icons/io';
import { AiOutlineClose as IconClose } from 'react-icons/ai';
import { theme } from 'styles';
import { useHideOnScrollDown } from 'hooks';
import { NavMenu } from './NavMenu/NavMenu';
import { Modal } from 'components/misc/Modal/Modal';
import { Logo } from 'components/Logo/Logo';

import {
  PageHeader,
  HeaderContainer,
  MenuBtn,
  Menu,
  MenuCloseBtn,
} from './Header.styled';

const { tablet } = theme.breakpoints;

export const Header = () => {
  const [visible, onTop] = useHideOnScrollDown(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${parseInt(tablet) - 0.1}px)`
    );

    const handleChangeMediaQuery = e => {
      setShowNav(!e.matches);
      setShowMenu(false);
    };
    mediaQuery.addEventListener('change', handleChangeMediaQuery);
    handleChangeMediaQuery(mediaQuery);
  }, []);

  return (
    <>
      <PageHeader ref={headerRef} shaded={!onTop} visible={onTop || visible}>
        <HeaderContainer>
          <Logo />
          {!showNav && (
            <MenuBtn type="button" onClick={() => setShowMenu(true)}>
              <IconMenu size={30} />
            </MenuBtn>
          )}
          {showNav && <NavMenu shaded={!onTop} />}
        </HeaderContainer>
      </PageHeader>

      <Modal
        visible={showMenu}
        onClose={() => setShowMenu(false)}
        bgColor="white"
        modalContainer={false}
        portal="#root-menu"
      >
        <Logo
          onClick={() => setShowMenu(false)}
          style={{ margin: 15, marginLeft: 20 }}
        />
        <MenuCloseBtn type="button" onClick={() => setShowMenu(false)}>
          <IconClose size={25} />
        </MenuCloseBtn>
        <Menu>
          <NavMenu onItemClick={() => setShowMenu(false)} />
        </Menu>
      </Modal>
    </>
  );
};
