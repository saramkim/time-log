// import data from 'components/Data';
import DidList from 'components/DidList';

import { ResponsiveBar } from '@nivo/bar';

const theme = {
  labels: {
    text: {
      fontSize: '1em',
    },
  },
  legends: {
    text: {
      fontSize: '1em',
      fill: '#555555',
    },
  },
  axis: {
    ticks: {
      text: {
        fontSize: '1em',
        fill: '#555555',
      },
    },
  },
  grid: {
    line: {
      stroke: '#555555',
    },
  },
};

function MyResponsiveBar({ data, standard }: { data: any; standard: number }) {
  const keyList: string[] = DidList(standard);

  return (
    <ResponsiveBar
      data={data}
      theme={theme}
      keys={keyList}
      indexBy='date'
      margin={{ top: 100, right: 240, bottom: 40, left: 130 }}
      padding={0.25}
      layout='horizontal'
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'paired' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={{
        tickSize: 20,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
      }}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 0,
        tickPadding: 20,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableGridX
      enableGridY={false}
      labelSkipWidth={20}
      labelSkipHeight={0}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 160,
          translateY: 0,
          itemsSpacing: 20,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                symbolSize: 25,
              },
            },
          ],
        },
      ]}
      role='application'
      ariaLabel='Nivo bar chart demo'
      barAriaLabel={(e) => {
        return `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`;
      }}
    />
  );
}

export default MyResponsiveBar;
