import axios from 'axios';

export const PER_PAGE = 12;
axios.defaults.baseURL = 'https://65056678ef808d3c66effe3a.mockapi.io/api/v1';

export const fetchAllCars = async (page, filter) => {
  page = parseInt(page) || 1;

  const str = Object.entries(filter || '')
    .map(([k, v]) => `${k}=${v}`)
    .join('&');

  const url = encodeURI(
    `cars?page=${page}&limit=${PER_PAGE}${str ? `&${str}` : ``}`
  );

  const { data } = await axios.get(url);

  return data;
};

// id в БД должен быть строкой, а не числом (например, "id": "7373")
// Иначе, не сработает ендпоинт cars/:id (будет cars?id=..)
export const updateFavoriteById = async (id, status) => {
  const { data } = await axios.put(`cars/${id}`, {
    favorite: !!status,
  });
  return data;
};
