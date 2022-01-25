<template>
  <input id="y-button" type="button" :value="value" />
</template>

<script>
export default {
  props: {
    value: {
      default: "按钮",
    },
  },
  name: "YButton",
};
</script>

<style lang="less" scoped >
#y-button {
  padding: 8px 20px;
  background: var(--primary-attach);
  border: 0;
  color: var(--primary);
  font-size: 14px;
  border: 1px solid var(--primary-attach2);
  border-radius: 4px;
  transition-duration: 0.4s;
}

#y-button:hover {
  cursor: pointer;
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

#y-button:active {
  transition-duration: 0s;
  background: var(--primary-attach3);
  border-color: var(--primary-attach3);
}
</style>