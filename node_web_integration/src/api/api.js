/*
 * @Descripttion: 
 * @version: 
 * @Author: maoyueer
 * @Date: 2023-02-02 13:42:44
 * @LastEditors: maoyueer
 * @LastEditTime: 2023-02-27 15:57:35
 */
import request from "@/service/request";
//post
export function xxx(data) {
  return request({
    url: "/xx/xx",
    method: "post",
    data,
  });
}
