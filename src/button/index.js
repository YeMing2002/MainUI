import Button from './src/Button.vue'

//按需引入
Button.install = function(Vue) {
    Vue.component(Button.name, Button)
}

export default Button