import { DefaultRawDatum, ResponsivePie } from '@nivo/pie';
import { BasicTooltip } from '@nivo/tooltip';

const theme = {
  labels: {
    text: {
      fontSize: window.innerWidth <= 768 ? '2rem' : '1.5em',
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

function PieTooltip({ datum }: { datum: { id: string | number; value: number; color: string } }) {
  const hour = Math.floor(datum.value / 3600);
  const minute = Math.floor((datum.value % 3600) / 60);
  const theTime = hour === 0 ? `${minute}분` : `${hour}시간${minute}분`;
  return <BasicTooltip id={datum.id} value={theTime} color={datum.color} enableChip />;
}

function MyResponsivePie({ data }: { data: DefaultRawDatum[] }) {
  if (window.innerWidth <= 768) {
    return (
      <ResponsivePie
        data={data}
        margin={{ top: 100, right: 20, bottom: 100, left: 20 }}
        theme={theme}
        arcLabel={(v) => `${Math.floor(v.value / 60)}`}
        tooltip={PieTooltip}
        padAngle={2}
        cornerRadius={5}
        innerRadius={0.4}
        sortByValue
        colors={{ scheme: 'set3' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsColor={{ from: 'color', modifiers: [['darker', 1]] }}
        arcLabelsSkipAngle={20}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 5]],
        }}
        animate={false}
      />
    );
  }

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 100, right: 20, bottom: 100, left: 20 }}
      theme={theme}
      arcLabel={(v) => `${Math.floor(v.value / 60)}`}
      tooltip={PieTooltip}
      padAngle={2}
      cornerRadius={10}
      innerRadius={0.4}
      sortByValue
      colors={{ scheme: 'set3' }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={0}
      arcLinkLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 1]],
      }}
      arcLinkLabelsOffset={15}
      arcLinkLabelsDiagonalLength={15}
      arcLinkLabelsStraightLength={15}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color', modifiers: [['darker', 1]] }}
      arcLabelsSkipAngle={20}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 5]],
      }}
      animate={false}
    />
  );
}

export default MyResponsivePie;
