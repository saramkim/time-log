import { CalendarDatum, ResponsiveCalendar } from '@nivo/calendar';
import { BasicTooltip } from '@nivo/tooltip';

const theme = {
  textColor: '#666666',
  fontSize: window.innerWidth <= 768 ? 12 : 20,
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

function CalTooltip({ day, value, color }: { day: string; value: string; color: string }) {
  const hour = Math.floor(Number(value) / 3600);
  const minute = Math.floor((Number(value) % 3600) / 60);
  const theTime = hour === 0 ? `${minute}분` : `${hour}시간${minute}분`;
  const theDate = `${day.slice(5, 7)}월${day.slice(8, 10)}일`;
  return <BasicTooltip id={theDate} value={theTime} color={color} enableChip />;
}

function MyResponsiveCalendar({ data }: { data: CalendarDatum[] }) {
  if (window.innerWidth <= 768) {
    return (
      <ResponsiveCalendar
        data={data}
        from='2022-01-01'
        to='2022-12-31'
        theme={theme}
        direction='vertical'
        tooltip={CalTooltip}
        emptyColor='#eeeeee'
        colors={['#B8E6D1', '#7ACCBA', '#47B3A2', '#1F998B', '#008074']}
        margin={{ top: 40, right: 20, bottom: 50, left: 20 }}
        minValue='auto'
        yearSpacing={0}
        yearLegendOffset={0}
        monthSpacing={0}
        monthBorderWidth={0}
        monthBorderColor='#ffffff'
        monthLegendOffset={10}
        daySpacing={2}
        dayBorderWidth={0}
        dayBorderColor='#ffffff'
        legendFormat={(v) => `${Math.floor(v / 60)}`}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            justify: false,
            itemCount: 5,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 10,
            itemDirection: 'right-to-left',
            translateX: -50,
            translateY: -40,
            symbolSize: 12,
          },
        ]}
      />
    );
  }
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
      legendFormat={(v) => `${Math.floor(v / 60)}`}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          justify: false,
          itemCount: 5,
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
