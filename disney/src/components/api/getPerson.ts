import axios from './api';
import { IGetAllPersons } from './getAllPersons';


const getPerson = async (id: number): Promise<IGetAllPersons> => {
  const response = await axios.get(`characters/${id}`);

  return response.data;
};

export default getPerson;
