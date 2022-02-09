
const data = {
    state: {
        language:'',    //驾驶舱主页面左下角下拉列表切换时，中国地图与世界地图刷新
    }, 
    mutations: {
      set_language: (state, value ) => {
        state.language = value
      },
    },
  
    actions: {
      changeLanguage({ commit }, value) {
        commit('set_language', value)
      },
    }
  }
  
  export default data
  