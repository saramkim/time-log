import { ResponsivePie } from '@nivo/pie';

function MyResponsivePie({ data }: { data: any }) {
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

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 100, right: 200, bottom: 100, left: 200 }}
      theme={theme}
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
