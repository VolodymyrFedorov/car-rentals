import { useEffect, useState } from 'react';
import * as api from '../api';

export const useFetchCars = filters => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [noMoreItems, setNoMoreItems] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(filters);

  const fetchCarsFullfilled = data => {
    setNoMoreItems(data.length < api.PER_PAGE);
    setCars(cur => [...cur, ...data]);
  };

  useEffect(() => {
    setPage(1);
    setCars([]);
  }, [filter]);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchAllCars(page, filter)
      .then(fetchCarsFullfilled)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [page, filter]);

  return {
    cars,
    setCars,
    filter,
    setFilter,
    page,
    setPage,
    isLoading,
    noMoreItems,
    error,
    setError,
  };
};
