
/**
 * 验证是否登录的中间件 在渲染之前 会进行调用中间件处理
 */

export default function({store,redirect}){
    if(!store.state.user){
        return redirect('/login')
    }
}