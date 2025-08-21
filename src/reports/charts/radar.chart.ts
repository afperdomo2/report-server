import * as Utils from 'src/utils';

export const getRadarChart = async () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const labels = Utils.months({ count: 7 });
  const dataFirstSkip = Utils.numbers(NUMBER_CFG);
  const dataMiddleSkip = Utils.numbers(NUMBER_CFG);
  const dataLastSkip = Utils.numbers(NUMBER_CFG);

  dataFirstSkip[0] = null;
  dataMiddleSkip[Math.floor(dataMiddleSkip.length / 2)] = null;
  dataLastSkip[dataLastSkip.length - 1] = null;

  const data = {
    labels,
    datasets: [
      {
        label: 'Skip first dataset',
        data: dataFirstSkip,
        borderColor: Utils.NAMED_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.NAMED_COLORS.red, 0.5),
      },
      {
        label: 'Skip mid dataset',
        data: dataMiddleSkip,
        borderColor: Utils.NAMED_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.NAMED_COLORS.blue, 0.5),
      },
      {
        label: 'Skip last dataset',
        data: dataLastSkip,
        borderColor: Utils.NAMED_COLORS.green,
        backgroundColor: Utils.transparentize(Utils.NAMED_COLORS.green, 0.5),
      },
    ],
  };

  const config = { type: 'radar', data };

  return Utils.chartJsToImage(config);
};
