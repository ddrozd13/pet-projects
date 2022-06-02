export interface IStorageCoin {
  id: string;
  name: string;
  price: number;
  percent: number;
  amount: number;
}
export const getCoinsFromLS = (): IStorageCoin[] | [] => {
  const LS_KEY = 'coinsArray';
  const data = localStorage.getItem(LS_KEY);

  if(data) return JSON.parse(data);

  localStorage.setItem(LS_KEY, JSON.stringify([]));

  return [];
};

export const addCoinToLS = (data: any) => {
  const oldData = getCoinsFromLS();

  localStorage.setItem('coinsArray', JSON.stringify([...oldData, data]));
}
