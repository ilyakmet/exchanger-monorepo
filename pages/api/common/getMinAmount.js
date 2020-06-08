import { createJsonRpcRequest } from "./../../../lib/json_rpc";

const API_URL = "https://api.changelly.com";
export default async (req, res) => {
  const result = await createJsonRpcRequest(API_URL,"getMinAmount",  { "from": "ltc", "to": "eth" });
  res.statusCode = 200
  console.log(result);
  res.setHeader('Content-Type', 'application/json')
  res.end( { result })
}
  