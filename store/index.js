// 在服务端渲染期间运行的都是同一个实例
// 为了防止数据冲突，务必把state定义成一个对象
const cookieParser = process.server?require('cookieparser'):undefined
export const state = () => {
    return {
        // 当前登录用户登录状态
        user: null
    }
}

export const mutations = {

    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    // nuxtServerInit 是nuxt特殊的action方法
    // 这个action会在服务端渲染期间自动调用
    // 作用：初始化容器数据 传递数据给客户端使用
    nuxtServerInit({ commit }, { req }) {
        let user = null
        if(req.headers.cookie){
            // 使用cookieparser把cookie字符串转为 js对象
            const patsed = cookieParser?.parse(req.headers.cookie)
            try{
                user = JSON.parse(patsed.user)
            }catch(err){

            }
            commit('setUser',user)
        }
    }
}