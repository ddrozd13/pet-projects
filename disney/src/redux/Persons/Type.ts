import { IGetAllPersons } from '../../components/api/getAllPersons';

export interface IGetAllPersonsState {
  persons?: IGetAllPersons[];
  filterPerson: IFilterPerson;
};

export interface IFilterPerson {
  films: number | null,
  shortFilms: number | null,
  videoGames: number | null,
  tvShows: number | null,
};

export interface IGetPersonState {
  person?: IGetAllPersons;
};