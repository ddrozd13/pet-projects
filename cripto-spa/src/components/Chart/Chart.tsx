import React, { FC } from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { IIntervalCoin } from '../../api/Types';
import moment from 'moment';

interface IChartProps {
  data: IIntervalCoin[] | undefined;
};

const Chart: FC<IChartProps> = ({data}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  return (
    <Line
      data={{
        labels: data?.map(coin => moment(coin.date).format('DD MMM')),
        datasets: [
          {
            data: data?.map(coin => coin.priceUsd),
            borderColor: "rgb(184, 20, 199)",
            pointBackgroundColor: 'black',
            label: `Price ( Past 1 Month ) in USD`,
          }
        ]
      }}
    />
  )
}

export default Chart;
