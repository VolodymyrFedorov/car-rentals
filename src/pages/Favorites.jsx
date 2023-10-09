/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import { CarList } from 'components/CarList/CarList';
import { PageTitle, NoItemsFound } from 'styles';
import { useFetchCars } from 'hooks/useFetchCars';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const Favorites = () => {
  const { cars, setCars, setPage, isLoading, noMoreItems, error, setError } =
    useFetchCars({ favorite: true });

  if (error) {
    toast.error(error.message);
    return setError(null);
  }

  return (
    <>
      <PageTitle>Favorites</PageTitle>

      {!isLoading && !cars.length && <NoItemsFound>No cars found</NoItemsFound>}

      <CarList
        items={cars}
        onAddToFavsClick={id =>
          setCars(cur => cur.filter(itm => itm.id !== id))
        }
      />
      {!noMoreItems && (
        <LoadMoreBtn
          onClick={() => setPage(cur => cur + 1)}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Favorites;
