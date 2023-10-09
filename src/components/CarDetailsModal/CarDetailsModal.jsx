import { func, bool } from 'prop-types';
import { Modal } from '../misc/Modal/Modal';
import { CarCaption } from '../CarCard/CarCaption/CarCaption';
import { DataList } from '../DataList/DataList';
import { LabeledValue } from './LabeledValue/LabeledValue';
import { splitNumIntoTriads } from 'helpers';

import {
  CloseBtn,
  Card,
  Block,
  ModalThumb,
  ModalPhoto,
  Desc,
  SubTitle,
  RentalCarBtn,
} from './CarDetailsModal.styled';

export const CarDetailsModal = ({ onClose, visible, ...props }) => {
  const {
    img,
    make,
    model,
    address,
    id,
    type,
    year,
    fuelConsumption,
    engineSize,
    description,
    accessories = [],
    functionalities = [],
    rentalConditions = '',
    mileage,
    rentalPrice,
  } = props;

  const alt = `${make} ${model}`;
  const [city, country] = address?.split(/\s*,\s*/).slice(-2) ?? '';
  const accessoriesFunc = [...accessories, ...functionalities];

  const conditions = [
    ...rentalConditions.split(/\n/),
    `mileage:${splitNumIntoTriads(mileage, ',')}`,
    `price:${rentalPrice}`,
  ];

  return (
    <Modal visible={visible} onClose={onClose} bgColor="rgb(0 0 0 / 0.6)">
      <CloseBtn onClick={onClose}>&times;</CloseBtn>
      <Card>
        <Block>
          <ModalThumb>{img && <ModalPhoto src={img} alt={alt} />}</ModalThumb>
          <CarCaption {...{ make, model, year }} />
          <DataList
            items={[
              city,
              country,
              `id: ${id}`,
              `Year: ${year}`,
              `Type: ${type}`,
              `Fuel Consumption: ${fuelConsumption}`,
              `Engine Size: ${engineSize}`,
            ]}
          />
          <Desc>{description}</Desc>
        </Block>

        {accessoriesFunc.length && (
          <Block>
            <SubTitle>Accessories and functionalities:</SubTitle>
            <DataList items={accessoriesFunc} />
          </Block>
        )}

        {conditions.length && (
          <Block>
            <SubTitle>Rental conditions:</SubTitle>
            <DataList
              items={conditions.map((itm, idx) => (
                <LabeledValue key={idx} text={itm} />
              ))}
              listType={2}
            />
          </Block>
        )}

        <a href="tel:+380730000000">
          <RentalCarBtn>Rental car</RentalCarBtn>
        </a>
      </Card>
    </Modal>
  );
};

CarDetailsModal.propTypes = {
  onClose: func,
  visible: bool,
};
