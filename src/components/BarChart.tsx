// import data from 'components/Data';

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
    },
  },
  axis: {
    tickColor: '#eee',
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

function MyResponsiveBar({ data }: { data: any }) {
  return (
    <ResponsiveBar
      data={data}
      theme={theme}
      keys={['코딩', '영어 공부', '수면', '휴식']}
      indexBy='date'
      margin={{ top: 80, right: 200, bottom: 60, left: 120 }}
      padding={0.25}
      layout='horizontal'
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'set2' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={{
        tickSize: 0,
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
          itemOpacity: 0.9,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
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
