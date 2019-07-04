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
        <span class="modal-close" v-if="showClose" @click="modalClose">
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
    showClose: {
      type: Boolean,
      default: true
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
