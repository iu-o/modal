<template>
  <div v-if="showModal">
    <div class="modal-mask" @touchstart="handleStart" @touchmove="handleMove" @touchend="handleEnd" :style="{'opacity': opacity, 'z-index': zIndex}" v-if="showMask"></div>
    <div class="modal-wrap" :style="{'z-index': zIndex + 1}">
      <div class="modal">
        <div class="modal-head">
          <slot name="modal-head">{{title}}</slot>
        </div>
        <div class="modal-content" :class="[contentClass]">
          <slot>
            <div v-html="message"></div>
          </slot>
        </div>
        <span class="modal-close" @click="modalClose">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="svg-modal-close" width="100%" height="100%"><path d="M7.414 6l4.243 4.243a1 1 0 0 1-1.414 1.414L6 7.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L4.586 6 .343 1.757A1 1 0 1 1 1.757.343L6 4.586 10.243.343a1 1 0 1 1 1.414 1.414L7.414 6z" fill="#333" fill-rule="nonzero"></path></svg>
        </span>
        <div class="modal-foot" v-if="modalType === 'confirm'">
          <slot name="modal-foot">
            <div class="btn-cancel" @click="cancel">{{cancelText}}</div>
            <div class="btn-confirm" @click="confirm">{{confirmText}}</div>
          </slot>
        </div>
        <div class="modal-foot" v-if="modalType === 'alert'">
          <slot name="modal-foot">
            <div class="btn-alert" @click="confirm">{{btnText}}</div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '温馨提示'
    },
    contentClass: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    btnText: {
      type: String,
      default: '确定'
    },
    callBack: {
      type: Function,
      default: () => {}
    },
    preventScroll: {
      type: Boolean,
      default: true
    },
    showMask: {
      type: Boolean,
      default: true
    },
    clickMask: {
      type: Boolean,
      default: false
    },
    modalType: {
      type: String,
      default: 'alert'
    },
    opacity: {
      type: Number,
      default: 0.6
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  methods: {
    modalClose () {
      this.callBack('close')
      this.$emit('close')
    },
    cancel () {
      this.callBack('cancel')
      this.$emit('cancel')
    },
    confirm () {
      this.callBack('confirm')
      this.$emit('confirm')
    },
    handleStart (e) {
      if (this.preventScroll) {
        e.preventDefault()
      }
      if (this.clickMask) {
        this.callBack('mask')
      }
    },
    handleMove (e) {
      this.$emit('handleMove', e)
    },
    handleEnd (e) {
      this.$emit('handleEnd', e)
    }
  }
}
</script>

<style lang="scss">
  .modal-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .6);
  }
  .modal-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .modal {
    position: relative;
    box-sizing: border-box;
    width: 295px;
    background-color: #fff;
    border-radius: 4px;
    .modal-head {
      padding-top: 16px;
      padding-bottom: 16px;
      font-size: 16px;
      line-height: 22px;
      color: #333;
      text-align: center;
      font-weight: 500;
    }
    .modal-content {
      padding-left: 20px;
      padding-right: 20px;
      max-height: 320px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
    .modal-foot {
      padding-top: 20px;
      padding-bottom: 30px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      .btn-alert {
        width: 235px;
        height: 40px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        margin-left: auto;
        margin-right: auto;
        background-color: #007bff;
      }
      .btn-cancel {
        width: 118px;
        height: 40px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        color: #333;
        border: 1px solid #333;
      }
      .btn-confirm {
        width: 118px;
        height: 40px;
        border-radius: 4px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background-color: #007bff;
      }
      .btn-cancel + .btn-confirm {
        margin-left: 20px;
      }
    }
    .modal-close {
      position: absolute;
      right: 10px;
      top: 8px;
      padding: 10px;
      svg {
        display: inline-block;
        vertical-align: sub;
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
