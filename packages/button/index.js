import Button from './src/Button.vue'
import '../style/var.css'

// //按需引入
Button.install=function(Vue){
    Vue.component(Button.name,Button)   
}

export default Button
