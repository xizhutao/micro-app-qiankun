import request from "../utils/request";
export const getConfig = (data:any) => request({
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
    params: data
})