export const applyFilter = (cars, localFilter) => {
  if (!localFilter) return cars;

  const { price, mileageFrom, mileageTo, brand } = localFilter;

  return cars.filter(({ mileage, rentalPrice, make }) => {
    const [rent] = rentalPrice.match(/\d+/);
    return (
      (brand ? make === brand : true) &&
      rent <= (parseInt(price?.slice(1)) || Infinity) &&
      mileage >= (parseFloat(mileageFrom) || 0) &&
      mileage <= (parseFloat(mileageTo) || Infinity)
    );
  });
};
