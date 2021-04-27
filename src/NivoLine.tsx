import { ResponsiveLine, LineSvgProps } from "@nivo/line";

export type NivoLineProps = {
  data: any;
} & LineSvgProps;

const NivoLine = (props: NivoLineProps) => {
  const {
    data,
    axisLeft = {
      legendOffset: 12,
      tickValues: 7,
    },
    axisBottom = {
      format: "%b %d",
    },
    xScale = {
      type: "time",
      format: "%Y-%m-%d",
      precision: "day",
      useUTC: false,
    },
    yScale = {
      type: "linear",
      min: 0,
      max: "auto",
    },
    ...rest
  } = props;

  const colors = ["#4AB7A8", "#4AB7A8"];

  return (
    <ResponsiveLine
      data={data}
      animate={false}
      margin={{ top: 20, right: 10, bottom: 30, left: 50 }}
      enablePointLabel={false}
      useMesh={true}
      enableArea={true}
      xScale={xScale}
      xFormat="time:%Y-%m-%d"
      yScale={yScale}
      axisLeft={axisLeft}
      axisBottom={axisBottom}
      colors={colors}
      enableGridX={false}
      enableGridY={false}
      enableCrosshair={false}
      curve="monotoneX"
      {...rest}
    />
  );
};

export default NivoLine;
