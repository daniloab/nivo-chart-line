import NivoLine from "./NivoLine";
import { aprilItems } from "./items";

const App = () => {
  console.log("aprilItems", aprilItems);
  const series = [
    {
      id: `charges`,
      data: aprilItems,
    },
  ];

  const axisBottom = {
    format: "%d/%m",
    tickSize: 0,
    tickPadding: 10,
    tickValues: 7,
  };

  const yFormat = (value: string) => `${value}`;
  const xFormat = "time:%d de %B";

  return (
    <div className={"flex"}>
      <NivoLine
        data={series}
        axisBottom={axisBottom}
        yFormat={yFormat}
        xFormat={xFormat}
      />
    </div>
  );
};

export default App;
