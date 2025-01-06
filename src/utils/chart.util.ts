import axios from 'axios';

interface chartOptions {
  height?: number;
  width?: number;
}

/**
 * Convert chart.js configuration to image
 * @param chartConfig The chart.js configuration
 * @returns A promise that resolves to a base64 string
 */
export const chartJsToImage = async (
  chartConfig: unknown,
  options: chartOptions = {},
) => {
  const params = new URLSearchParams();
  if (options.height) {
    params.append('height', options.height.toString());
  }
  if (options.width) {
    params.append('width', options.width.toString());
  }
  const encodedUri = encodeURIComponent(JSON.stringify(chartConfig));
  const baseUrl = `https://quickchart.io/chart?c=${encodedUri}&${params.toString()}`;
  const response = await axios.get(baseUrl, { responseType: 'arraybuffer' });
  return `data:image/png;base64,${Buffer.from(response.data).toString('base64')}`;
};
