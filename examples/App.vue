<template>
  <div id="app">
    <div class="row">
      <m-button @click="toastSuccess">按钮</m-button>
      <m-button type="primary">按钮</m-button>
      <m-button type="success">按钮</m-button>
      <m-button type="info">按钮</m-button>
      <m-button type="warning">按钮</m-button>
      <m-button type="danger">按钮</m-button>
    </div>
    <div class="row">
      <m-button icon="main-icon-check" plain>按钮</m-button>
      <m-button icon="main-icon-check" plain type="primary">按钮</m-button>
      <m-button icon="main-icon-check" plain type="success">按钮</m-button>
      <m-button icon="main-icon-check" plain type="info">按钮</m-button>
      <m-button icon="main-icon-check" plain type="warning">按钮</m-button>
      <m-button icon="main-icon-check" plain type="danger">按钮</m-button>
    </div>
    <div class="row">
      <m-button round>圆角</m-button>
      <m-button round type="primary">圆角</m-button>
      <m-button round type="success">圆角</m-button>
      <m-button round type="info">圆角</m-button>
      <m-button round type="warning">圆角</m-button>
      <m-button round type="danger">圆角</m-button>
    </div>
    <div class="row">
      <m-button circle icon="m-icon-check"></m-button>
      <m-button circle icon="m-icon-check" type="primary"></m-button>
      <m-button circle icon="m-icon-check" type="success"></m-button>
      <m-button circle icon="m-icon-check" type="info"></m-button>
      <m-button circle icon="m-icon-check" type="warning"></m-button>
      <m-button circle icon="m-icon-check" type="danger"></m-button>
    </div>
    <div class="row">
      <m-button disabled>按钮</m-button>
      <m-button disabled type="primary">按钮</m-button>
      <m-button disabled type="success">按钮</m-button>
      <m-button disabled type="info">按钮</m-button>
      <m-button disabled type="warning">按钮</m-button>
      <m-button disabled type="danger">按钮</m-button>
    </div>
    <div class="row">
      <m-button plain disabled>按钮</m-button>
      <m-button plain disabled type="primary">按钮</m-button>
      <m-button plain disabled type="success">按钮</m-button>
      <m-button plain disabled type="info">按钮</m-button>
      <m-button plain disabled type="warning">按钮</m-button>
      <m-button plain disabled type="danger">按钮</m-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    toastClick() {
      this.YToast({
        text: "自定义提示",
        icon: "https://gw.alicdn.com/imgextra/i3/O1CN01uRz3de23mzWofmPYX_!!6000000007299-2-tps-143-59.png",
      });
    },
    toastSuccess() {
      this.YToast.success("登陆成功");
    },
    toastError() {
      this.YToast.error("登陆失败");
    },
  },
};
</script>
<style lang="less" scoped>
.row {
  margin-bottom: 20px;
  .m-button {
    margin-right: 20px;
  }
}
</style>

