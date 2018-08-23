// 这里对state进行的所有同步动作方法（基础动作）
// 可通过mapMutations映射到组件中的methods中使用
// 名称建议大写

const mutations = {
  // NavButton里的底部路由切换
  SETCURINDEX(state, index) {
    state.curIndex = index;
  },
  // 登录
  LOGIN(state) {
    state.isLogin = true;
  },
  // 退出登录
  LOGOUT(state) {
    state.isLogin = false;
  }
};

export default mutations;
