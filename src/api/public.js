import request from "@/until/axios/service";

export function xxx(param) {
  return request({
    url: "/xxx",
    method: "get",
    param,
  });
}
export function xxxx(param) {
  return request({
    url: "/xxxx",
    method: "post",
    data: param,
  });
}
