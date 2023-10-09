import { object } from 'prop-types';
import { AiFillInstagram as IconInsta } from 'react-icons/ai';
import { RiYoutubeFill as IconYoutube } from 'react-icons/ri';
import { BiLogoFacebookCircle as IconFacebook } from 'react-icons/bi';
import { List, Link } from './Socials.styled';

const service = [IconInsta, IconYoutube, IconFacebook];
const label = ['instagram', 'youtube', 'facebook'];

export const Socials = ({ style }) => {
  return (
    <List style={style}>
      {service.map((Icon, i) => {
        const url = `https://${label[i]}.com`;
        return (
          <li key={label[i]}>
            <Link
              href={url}
              rel="noreferrer noopener nofollow"
              target="_blank"
              title={url}
              aria-label={`${label[i]} link`}
            >
              <Icon size={35} />
            </Link>
          </li>
        );
      })}
    </List>
  );
};

Socials.propTypes = {
  style: object,
};
