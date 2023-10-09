import { func, object } from 'prop-types';
import logo from 'images/logo.png';
import { LogoWrapper } from './Logo.styled';

export const Logo = ({ onClick, style }) => {
  return (
    <LogoWrapper data-logo href="/car-rentals" onClick={onClick} style={style}>
      <img src={logo} alt="Rent car logo" />
    </LogoWrapper>
  );
};

Logo.propTypes = {
  onClick: func,
  style: object,
};
