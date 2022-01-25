<template>
  <transition name="fadeIn" appear v-on:after-leave="destroy">
    <div id="y-toast" v-if="show">
      <!-- 成功图标 -->
      <div class="y-icon" v-show="state != null && state">
        <img width="30" src="https://s4.ax1x.com/2022/01/13/7lr0Zn.png" alt="图片失效"/>
      </div>
      <!-- 失败图标 -->
      <div class="y-icon" v-show="state != null && !state">
        <img width="30" src="https://s4.ax1x.com/2022/01/13/7lrBaq.png" alt="图片失效"/>
      </div>
      <div class="y-icon" v-if="icon && state == null">
        <img
            width="100"
            :src="icon"
            alt="图片失效"
        />
      </div>
      <!-- 文案 -->
      <span>{{ text }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "YToast",
};
</script>

<style scoped>
#y-toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.568);
  padding: 10px 25px;
  border-radius: 5px;
  width: 100px;
  display: inline-block;
  word-wrap: break-word; /* 文字换行 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn-enter-active {
  animation: fadeIn 0.5s ease;
}

.fadeIn-leave-active {
  animation: fadeIn 0.5s ease reverse;
}
</style>