import { useState } from 'react';
import { toast } from 'react-toastify';
import { CarList } from 'components/CarList/CarList';
import { useFetchCars } from 'hooks/useFetchCars';
import { Filters } from 'components/Filters/Filters';
import { PageTitle, NoItemsFound } from 'styles';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { isEmptyFilter } from 'helpers';
import { applyFilter } from './applyFilter';

const Catalog = () => {
  const [localFilter, setLocalFilter] = useState(null);
  const { cars, setPage, isLoading, noMoreItems, error, setError } =
    useFetchCars();

  if (error) {
    toast.error(error.message);
    return setError(null);
  }

  const handleFilterSubmit = data => {
    setLocalFilter(isEmptyFilter(data) ? null : data);
  };

  const filtered = applyFilter(cars, localFilter);
  if (localFilter && filtered.length) {
    toast.info(`${filtered.length} car(s) found`);
  }

  return (
    <>
      <PageTitle>Car park</PageTitle>

      <Filters onSubmit={handleFilterSubmit} />

      {!isLoading && !filtered.length && (
        <NoItemsFound>No cars found</NoItemsFound>
      )}

      <CarList items={filtered} />
      {!localFilter && !noMoreItems && (
        <LoadMoreBtn
          onClick={() => setPage(cur => cur + 1)}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Catalog;
