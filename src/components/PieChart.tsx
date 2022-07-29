import { ResponsivePie } from '@nivo/pie';

function MyResponsivePie({ data }: { data: any }) {
  const theme = {
    labels: {
      text: {
        fontSize: '1.5em',
      },
    },
    legends: {
      text: {
        fontSize: '1em',
      },
    },
  };

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 60, right: 200, bottom: 60, left: 200 }}
      theme={theme}
      sortByValue
      colors={{ scheme: 'paired' }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={0}
      arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
      arcLinkLabelsOffset={15}
      arcLinkLabelsDiagonalLength={15}
      arcLinkLabelsStraightLength={15}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
      arcLabelsSkipAngle={0}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 3]],
      }}
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
