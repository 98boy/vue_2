// 导入axios
import axios from "axios";
import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAILD } from "./mutationType";
export const actions = {
  async search({ commit }, searchName) {
    //发送请求的时候我们把页面切换成正在发送请求的页面
    commit(REQUESTING);

    try {
      let response = await axios({
        url: "https://api.github.com/search/users",
        method: "GET",
        params: {
          q: searchName,
        },
      });
      let users = [];
      //items 第一条信息就是一个用户信息 是一个对象
      response.data.items.forEach((item) => {
        //从每个获取到的数据当中过滤我要的数据
        let user_name = item.login;
        let user_img = item.avatar_url;
        let user_url = item.url;
        //把我要的数据组装成一个对象
        let obj = {
          user_name,
          user_img,
          user_url,
        };
        //把数据对象给放到我的数据当中
        users.push(obj);
      });
      commit(REQUEST_SUCCESS);
    } catch (error) {
      commit(REQUEST_FAILD, error.message);
    }
  },
};
