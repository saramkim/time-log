import { BarDatum, ResponsiveBar } from '@nivo/bar';
import { BasicTooltip } from '@nivo/tooltip';

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

function BarTooltip({ indexValue, value }: { indexValue: number | string; value: number }) {
  return <BasicTooltip id={`${indexValue}일`} value={(value / 60).toFixed(1)} />;
}

function MyResponsiveBar({ data, keys }: { data: BarDatum[]; keys: string }) {
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
      // axisLeft={{
      //   tickSize: 0,
      //   tickPadding: 15,
      //   tickRotation: 0,
      // }}
      axisLeft={null}
      enableGridY
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
