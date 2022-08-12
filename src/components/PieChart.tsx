import { DefaultRawDatum, ResponsivePie } from '@nivo/pie';
import { BasicTooltip } from '@nivo/tooltip';

const theme = {
  labels: {
    text: {
      fontSize: '1.5em',
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
  return (
    <BasicTooltip
      id={datum.id}
      value={(datum.value / 60).toFixed(1)}
      color={datum.color}
      enableChip
    />
  );
}

function MyResponsivePie({ data }: { data: DefaultRawDatum[] }) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 100, right: 200, bottom: 100, left: 200 }}
      theme={theme}
      arcLabel={(v) => `${(v.value / 60).toFixed(1)}`}
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
