import axios from "axios";

const graphCms = axios.create({
  baseURL:
    "https://api-eu-central-1.graphcms.com/v2/cknmq1k7cvjdz01xghmla5qmf/master",
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

export const getQuery = (query: string, variables?: any) => {
  return graphCms.post(null, {
    query,
    variables,
  });
};
export default graphCms;
