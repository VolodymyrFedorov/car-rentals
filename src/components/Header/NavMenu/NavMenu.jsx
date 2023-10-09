import { func } from 'prop-types';
import { Nav, NavLinkStyled } from './NavMenu.styled';

const items = {
  home: '/',
  'car park': '/catalog',
  favorites: '/favorites',
};

// Если не указать дефолтное и не передать onItemsClick -
// будет постоянная перерисовка. Как вариант сделать
// const ref = useRef(onItemClick);
// onClick={() => ref.current?.(name, url)}
export const NavMenu = ({ onItemClick = Function.prototype }) => {
  return (
    <Nav>
      {Object.entries(items).map(([name, url]) => (
        <NavLinkStyled
          key={name}
          to={url}
          onClick={() => {
            onItemClick(name, url);
          }}
        >
          {name}
        </NavLinkStyled>
      ))}
    </Nav>
  );
};

NavMenu.propTypes = {
  onItemClick: func,
};
