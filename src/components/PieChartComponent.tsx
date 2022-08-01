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
    // legends: {
    //   text: {
    //     fontSize: '1em',
    //   },
    // },
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

      // legends={[
      //   {
      //     anchor: 'left',
      //     direction: 'column',
      //     justify: false,
      //     translateX: -50,
      //     translateY: 0,
      //     itemsSpacing: 100,
      //     itemWidth: 200,
      //     itemHeight: 0,
      //     itemTextColor: '#999',
      //     itemDirection: 'left-to-right',
      //     itemOpacity: 1,
      //     symbolSize: 20,
      //     symbolShape: 'circle',
      //     effects: [
      //       {
      //         on: 'hover',
      //         style: {
      //           itemTextColor: '#000',
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
}

export default MyResponsivePie;
