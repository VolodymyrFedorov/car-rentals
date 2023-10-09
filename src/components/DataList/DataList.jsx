import { array, number } from 'prop-types';
import { ListPrimary, ListSecondary } from './DataList.styled';

export const DataList = ({ items, listType = 1, ...props }) => {
  const List = listType === 1 ? ListPrimary : ListSecondary;

  return (
    <List {...props}>
      {items.map((itm, idx) => itm && <li key={idx}>{itm}</li>)}
    </List>
  );
};

DataList.propTypes = {
  items: array,
  listType: number,
};
