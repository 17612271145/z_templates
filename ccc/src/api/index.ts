import axios from "./axios";

// 测试mock数据
export function test(permes) {
  return axios({
    method: "post",
    url: "/api/test",
    data: permes
  });
}




