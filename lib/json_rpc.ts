import axios from 'axios';

export const createJsonRpcRequest = async(url: string, method: any, params:any) => {
    const rpcJson = {
        ...params,
        jsonrpc: "2.0",
        id: "test",
        method, params
    }
    return axios.post(url, rpcJson).then((response) => { return response.data.result})
}