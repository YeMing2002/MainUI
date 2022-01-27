//统一引入
import Toast, { toast } from './toast'
import Button from "@/button";
//图标库
import "@/styles/iconfont/iconfont.css"

const MainUI = {
    [Button.name]: Button,
}

//install函数
const install = function(Vue, otps = {}) {
        //遍历注册组件
        Object.keys(MainUI).forEach(key => {
                Vue.component(key, MainUI[key])
            })
            //注册到vue原型
        Vue.prototype[Toast.name] = toast(Vue)
    }
    //script引入
if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue); // 通过use方式全部引入
}

export default {
    install,
    ...MainUI
}
// 按需引入
export { Button, Toast }