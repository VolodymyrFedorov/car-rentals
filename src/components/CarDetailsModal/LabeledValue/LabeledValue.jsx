import { string } from 'prop-types';
import { Item } from './LabeledValue.styled';

export const LabeledValue = ({ text, splitter = ':' }) => {
  if (!text) return null;
  const [label, value] = text.split(splitter);

  return (
    <Item>
      <span data-label>{label.trim()}</span>
      {value && (
        <>
          {': '}
          <span data-value>{value.trim()}</span>
        </>
      )}
    </Item>
  );
};

LabeledValue.propTypes = {
  text: string,
  splitter: string,
};
