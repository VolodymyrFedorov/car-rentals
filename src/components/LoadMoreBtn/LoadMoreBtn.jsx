import { bool, func, string } from 'prop-types';
import { BeatLoader } from 'react-spinners';
import { ButtonSecondary, theme } from 'styles';

export const LoadMoreBtn = ({ isLoading, onClick, caption = 'Load more' }) => {
  return (
    <ButtonSecondary onClick={onClick} style={{ height: 48 }}>
      {isLoading ? (
        <BeatLoader size={10} color={theme.colors.blue} />
      ) : (
        <>{caption}</>
      )}
    </ButtonSecondary>
  );
};

LoadMoreBtn.propTypes = {
  isLoading: bool,
  onClick: func,
  caption: string,
};
