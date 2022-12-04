import axios from 'axios';

export async function subgraphQuery(query: string) {
  try {
    const SUBGRAPH_URL =
      'https://api.thegraph.com/subgraphs/name/dinesh11515/ragtag';
    const response = await axios.post(SUBGRAPH_URL, {
      query,
    });
    if (response.data.errors) {
      console.error(response.data.errors);
      throw new Error(`Error making subgraph query ${response.data.errors}`);
    }
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Could not query the subgraph ${error}`);
  }
}
