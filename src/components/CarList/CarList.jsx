import { useState } from 'react';
import { func, arrayOf, object } from 'prop-types';
import { CarCard } from '../CarCard/CarCard';
import { List, ListItem } from './CarList.styled';
import { CarDetailsModal } from '../CarDetailsModal/CarDetailsModal';

export const CarList = ({ items, onAddToFavsClick = Function.prototype }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);

  const handleDetailsClick = itm => {
    setShowModal(true);
    setCurrentCar(itm);
  };

  return (
    <>
      <List>
        {items.map(itm => {
          return (
            <ListItem key={itm.id}>
              <CarCard
                onDetailsClick={() => handleDetailsClick(itm)}
                onAddToFavsClick={status => onAddToFavsClick(itm.id, status)}
                {...itm}
              />
            </ListItem>
          );
        })}
      </List>
      <CarDetailsModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        {...currentCar}
      />
    </>
  );
};

CarList.propTypes = {
  items: arrayOf(object),
  onAddToFavsClick: func,
};
