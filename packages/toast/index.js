import Toast from './src/Toast.vue'

Toast.install = function (Vue) {
    Vue.prototype[Toast.name] = toast(Vue)
}

export function toast(Vue) {
    //Toast数据
    let options = {
        text: '提示',
        show: true,
        state: null,
        icon: null
    }
    //渲染、销毁封装
    function render(options) {
        // 防抖判断
        if (!document.getElementById("y-toast")) {
            // extend创建一个“子类”
            const YToast = Vue.extend(Toast);
            //通过assign,断除数据引用关系
            let currentOptions = () => Object.assign({}, options)
            //new 出dom元素，但是现在还没指定挂载元素
            const instance = new YToast({
                data: currentOptions(),
                methods: {
                    //动画结束时销毁组件
                    destroy() {
                        this.$destroy()
                    }
                },
                destroyed() {
                    console.log("Toast已经被销毁");
                }
            })
            //在文档之外渲染并且随后挂载
            instance.vm = instance.$mount()
            document.body.appendChild(instance.vm.$el)
            //延迟1.5秒删除
            setTimeout(() => {
                instance.show = false
            }, 1500)
            //返回组件实例
            return instance.vm
        }
    }
    //自定义
    let toastClass = (value) => {
        //对象合并
        render(Object.assign({}, options, value))
    }
    //成功提示
    toastClass.success = (value) => {
        let o = {
            text: value,
            state: true
        }
        render(Object.assign({}, options, o))
    }
    //失败提示
    toastClass.error = (value) => {
        let o = {
            text: value,
            state: false
        }
        render(Object.assign({}, options, o))
    }
    return toastClass
}

export default Toast