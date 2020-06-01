import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAILD } from "./mutationType";
export const mutations = {
  // 请求中
  [REQUESTING](state) {
    state.isFirst = false;
    state.isLoading = true;
  },
  // 成功时
  [REQUEST_SUCCESS](state, users) {
    state.isLoading = false;
    state.users = users;
  },
  // 失败时
  [REQUEST_FAILD](state, msg) {
    state.errMsg = msg; //axios错误信息是message
    state.isLoading = false;
  },
};
