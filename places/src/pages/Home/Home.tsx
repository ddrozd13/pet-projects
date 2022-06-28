import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { getPlaces } from '../../redux/Places/ActionCreators';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import formatDate from '../../utils/formatDate';
import DateFormat from '../../constants/Dateformat';
import { PlaceType } from '../../api/Places';
import { useNavigate } from 'react-router-dom';
import PlaceTypeIcon from '../../components/PlaceTypeIcon/PlaceTypeIcon';
import formatCapacity from '../../utils/formatCapacity';
import PageLayout from '../../components/PageLayout/PageLayout';

const Home: FC = () => {
  const dispatch = useDispatch();
  const  { items } = useSelector((state: RootState) => state.places);
  const navigate = useNavigate();

  const mapType = (type: PlaceType) => {
    return (
    <PlaceTypeIcon type={type} />
   )
 }

  const COLUMNS: GridColDef[] = [
    {field: 'type', headerName: 'Type', flex: 0.05, renderCell: (params) => mapType(params.value)},
    {field: 'address', headerName: 'Address', flex: 0.40},
    {field: 'capacity', headerName: 'Capacity', flex: 0.15},
    {field: 'createdAt', headerName: 'Created At', flex: 0.20},
  ];

  const rows = items?.map((place) => {
    return {
      id: place.id,
      address: place.address,
      type: place.type,
      capacity: formatCapacity(place.capacity),
      createdAt: formatDate(place.createdAt, DateFormat.ShortDate)
    }
  })

  const openDetails = (id: string) => {
    navigate(`/places/${id}`)
  }
  useEffect(() => {
    dispatch(getPlaces());
  }, [])
  return (
    <PageLayout>
      <div style={{height: '94vh', width: '100%'}}>
        <DataGrid
          rows={rows || []}
          columns={COLUMNS}
          loading={!rows}
          pageSize={15}
          isRowSelectable={() => false}
          onRowClick={(params) => openDetails(params.id.toString())}
        />
      </div>
    </PageLayout>
  )
};

export default Home;
