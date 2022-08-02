import DidList from 'components/DidList';

import { ResponsiveBar } from '@nivo/bar';
import { Theme } from '@nivo/core';
import { BasicTooltip } from '@nivo/tooltip';

const theme: Theme = {
  labels: {
    text: {
      fontSize: '1em',
    },
  },
  legends: {
    text: {
      fontSize: '1em',
      fill: '#666666',
    },
  },
  axis: {
    ticks: {
      text: {
        fontSize: '1em',
        fill: '#666666',
      },
    },
  },
  grid: {
    line: {
      stroke: '#666666',
    },
  },
  tooltip: {
    container: {
      background: '#333',
      color: '#fff',
      padding: '15px',
      fontSize: '18px',
      lineHeight: '0px',
    },
  },
};

const BarTooltip: React.FunctionComponent<any> = function ({
  id,
  value,
  color,
}: {
  id: string;
  value: number;
  color: string;
}) {
  return <BasicTooltip id={id} value={value} color={color} enableChip />;
};

function MyResponsiveBar({ data, standard }: { data: any; standard: number }) {
  const keyList: string[] = DidList(standard);

  return (
    <ResponsiveBar
      data={data}
      theme={theme}
      keys={keyList}
      indexBy='date'
      tooltip={BarTooltip}
      margin={{ top: 60, right: 240, bottom: 20, left: 130 }}
      padding={0.25}
      layout='horizontal'
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'set3' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
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
        modifiers: [['darker', 5]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 140,
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
      animate={false}
      motionConfig='slow'
      role='application'
      ariaLabel='time bar chart'
      barAriaLabel={(e) => {
        return `${e.id}: ${e.formattedValue} in date: ${e.indexValue}`;
      }}
    />
  );
}

export default MyResponsiveBar;
