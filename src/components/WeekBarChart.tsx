import DidList from 'components/DidList';

import { BarDatum, ResponsiveBar } from '@nivo/bar';
import { Theme } from '@nivo/core';
import { BasicTooltip } from '@nivo/tooltip';

const theme: Theme = {
  labels: {
    text: {
      fontSize: window.innerWidth <= 768 ? '1.3rem' : '1em',
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
      strokeDasharray: '5 5',
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

function BarTooltip({ id, value, color }: { id: string | number; value: number; color: string }) {
  const hour = Math.floor(value / 3600);
  const minute = Math.floor((value % 3600) / 60);
  const theTime = hour === 0 ? `${minute}분` : `${hour}시간${minute}분`;
  return <BasicTooltip id={id} value={theTime} color={color} enableChip />;
}

function MyResponsiveBar({ data, standard }: { data: BarDatum[]; standard: number }) {
  const keyList: string[] = DidList(standard);

  if (window.innerWidth <= 768) {
    return (
      <ResponsiveBar
        data={data}
        theme={theme}
        keys={keyList}
        indexBy='date'
        tooltip={BarTooltip}
        label={(v) => `${Math.floor((v.value as number) / 60)}`}
        margin={{ top: 120, right: 20, bottom: 20, left: 60 }}
        padding={0.2}
        layout='horizontal'
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'set3' }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
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

  return (
    <ResponsiveBar
      data={data}
      theme={theme}
      keys={keyList}
      indexBy='date'
      tooltip={BarTooltip}
      label={(v) => `${Math.floor((v.value as number) / 60)}`}
      margin={{ top: 60, right: 260, bottom: 20, left: 130 }}
      padding={0.2}
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
        format: (v) => Math.floor((v as number) / 60),
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
      labelSkipWidth={25}
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
