declare module 'react-gauge-chart' {
    import { FC } from 'react';
  
    interface GaugeChartProps {
      id: string;
      nrOfLevels?: number;
      percent: number;
      textColor?: string;
      arcsLength?: number[];
      colors?: string[];
      arcPadding?: number;
      needleColor?: string;
      needleBaseColor?: string;
      hideText?: boolean;
      animate?: boolean;
      animDelay?: number;
      formatTextValue?: (value: number) => string;
    }
  
    const GaugeChart: FC<GaugeChartProps>;
    export default GaugeChart;
  }
  