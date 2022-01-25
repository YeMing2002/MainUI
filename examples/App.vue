<template>
  <div id="app">
    <y-button value="自定义" />
   <y-button value="成功" @click.native="toastSuccess"/>
   <y-button value="失败" @click.native="toastError"/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    toastClick() {
      this.YToast({
        text: '自定义提示',
        icon: 'https://gw.alicdn.com/imgextra/i3/O1CN01uRz3de23mzWofmPYX_!!6000000007299-2-tps-143-59.png'
      })
    },
    toastSuccess(){
      this.YToast.success("登陆成功")
    },
    toastError(){
      this.YToast.error("登陆失败")
    }
  },
};
</script>

