import axios from 'axios';

/**
 * Convert chart.js configuration to image
 * @param chartConfig The chart.js configuration
 * @returns A promise that resolves to a base64 string
 */
export const chartJsToImage = async (chartConfig: unknown) => {
  const encodedUri = encodeURIComponent(JSON.stringify(chartConfig));
  const baseUrl = `https://quickchart.io/chart?c=${encodedUri}`;
  const response = await axios.get(baseUrl, { responseType: 'arraybuffer' });
  return `data:image/png;base64,${Buffer.from(response.data).toString('base64')}`;
};
