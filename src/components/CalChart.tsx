import { ResponsiveCalendar } from '@nivo/calendar';
import { BasicTooltip } from '@nivo/tooltip';

const theme = {
  textColor: '#666666',
  fontSize: 20,
  axis: {
    domain: {
      line: {
        stroke: 'red',
        strokeWidth: 1,
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: 'red',
      },
    },
    ticks: {
      line: {
        stroke: 'red',
        strokeWidth: 1,
      },
      text: {
        fontSize: 23,
        fill: 'red',
      },
    },
  },
  legends: {
    text: {
      fontSize: 20,
      fill: '#666666',
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: '#666666',
      },
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

const CalTooltip: React.FunctionComponent<any> = function ({
  day,
  value,
  color,
}: {
  day: string;
  value: number;
  color: string;
}) {
  return <BasicTooltip id={day} value={value} color={color} enableChip />;
};

function MyResponsiveCalendar({ data }: { data: any }) {
  return (
    <ResponsiveCalendar
      data={data}
      from='2022-01-01'
      to='2022-12-31'
      theme={theme}
      tooltip={CalTooltip}
      emptyColor='#eeeeee'
      colors={['#B8E6D1', '#7ACCBA', '#47B3A2', '#1F998B', '#008074']}
      margin={{ top: 100, right: 60, bottom: 100, left: 60 }}
      minValue='auto'
      yearSpacing={100}
      yearLegendOffset={10}
      monthSpacing={0}
      monthBorderWidth={0}
      monthBorderColor='#ffffff'
      monthLegendOffset={10}
      daySpacing={2}
      dayBorderWidth={0}
      dayBorderColor='#ffffff'
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 40,
          itemDirection: 'right-to-left',
          translateX: -100,
          translateY: -120,
          symbolSize: 20,
        },
      ]}
    />
  );
}

export default MyResponsiveCalendar;
