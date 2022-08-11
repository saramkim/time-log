import styled from 'styled-components';

import { ResponsiveBar } from '@nivo/bar';

const theme = {
  labels: {
    text: {
      fontSize: '1em',
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
    },
  },
};

const Tooltip = styled.div`
  background: #333;
  color: #fff;
  padding: 15px;
  font-size: 18px;
  border-radius: 3px;
`;

const BarTooltip: any = function ({ indexValue, value }: { indexValue: number; value: number }) {
  return (
    <Tooltip>
      {indexValue}일: {(value / 60).toFixed(1)}
    </Tooltip>
  );
};

function MyResponsiveBar({ data, keys }: { data: any; keys: string }) {
  return (
    <ResponsiveBar
      data={data}
      theme={theme}
      keys={[keys]}
      indexBy='date'
      tooltip={BarTooltip}
      margin={{ top: 80, right: 60, bottom: 60, left: 80 }}
      padding={0.2}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'set3' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 15,
        tickRotation: 0,
        // legend: 'time',
        // legendPosition: 'middle',
        // legendOffset: -40,
      }}
      enableGridY
      // gridYValues={4}
      enableLabel={false}
      legends={[]}
      animate={false}
      role='application'
      ariaLabel='Month bar chart'
      barAriaLabel={(e) => {
        return `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`;
      }}
    />
  );
}

export default MyResponsiveBar;
