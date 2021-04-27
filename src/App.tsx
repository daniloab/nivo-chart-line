import NivoLine from "./NivoLine";
import { aprilItems, marchItems } from "./items";
import { useState } from "react";

import { Flex, Text } from "rebass";

const App = () => {
  const [item, setItem] = useState(aprilItems);

  const series = [
    {
      id: `charges`,
      data: item.data,
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
      <Flex p="10px">
        <button onClick={() => setItem(marchItems)}>show march data</button>
        <button onClick={() => setItem(aprilItems)}>show april data</button>
      </Flex>

      <Flex p="10px" flexDirection={"column"}>
        <Text>is showing {item.label}</Text>
        <Flex height={"300px"}>
          <NivoLine
            data={series}
            axisBottom={axisBottom}
            yFormat={yFormat}
            xFormat={xFormat}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default App;
