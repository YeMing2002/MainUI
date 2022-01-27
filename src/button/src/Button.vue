<template>
  <button
    class="m-button"
    :class="[
      `m-button-${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"> <slot></slot></span>
  </button>
</template>


<script>
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped >
.m-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-plain {
    &:hover,
    &:focus {
      background: #fff;
      border-color: #409eff;
      color: #409eff;
    }
    &.is-disabled {
      background-color: #fff;
      border-color: #ebeef5;
      color: #c0c4cc;
    }
  }
  //禁用按钮
  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
// 颜色
.m-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
    &.is-disabled {
      color: #8cc5ff;
      background-color: #ecf5ff;
      border-color: #d9ecff;
    }
  }
  &.is-disabled {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
}
.m-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
    &.is-disabled {
      color: #a4da89;
      background-color: #f0f9eb;
      border-color: #e1f3d8;
    }
  }
  &.is-disabled {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
  }
}
.m-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
    &.is-disabled {
      color: #bcbec2;
      background-color: #f4f4f5;
      border-color: #e9e9eb;
    }
  }
  &.is-disabled {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
  }
}
.m-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
    &.is-disabled {
      color: #f0c78a;
      background-color: #fdf6ec;
      border-color: #faecd8;
    }
  }
  &.is-disabled {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
  }
}
.m-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
    &.is-disabled {
      color: #f9a7a7;
      background-color: #fef0f0;
      border-color: #fde2e2;
    }
  }
  &.is-disabled {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
  }
}
// 圆角
.m-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形
.m-button.is-circle {
  border-radius: 50%;
  padding: 12px;
  min-width: 40px;
}
//如果有图标就给span加边距
.m-button [class*="main-icon-"] + span {
  margin-left: 5px;
}
</style>