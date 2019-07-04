<template>
  <div class="demo">
    <div class="btn" @click="testAlert">alert</div>
    <div class="btn" @click="testConfirm">confirm</div>
    <div class="btn" @click="testCustom">custom</div>
    <div class="btn" @click="showModal = true">component</div>
    <br>
    <br>
    <br>
    <br>
    <modal :showModal="showModal" @confirm="showModal = false">
      <div>custom modal</div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'modal-demo',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    testCustom () {
      this.$modal({
        title: 'Lorem',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        preventScroll: true,
        clickMask: true,
        opacity: 0.9,
        zIndex: 100,
        showClose: false,
        modalType: 'custom'
      }).then(res => {
        console.log('res', res)
      })
    },
    testAlert () {
      this.$alert({
        title: 'Lorem',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        preventScroll: true,
        clickMask: true,
        opacity: 0.1,
        zIndex: 100
      }).then(res => {
        console.log('res', res)
      })
    },
    testConfirm () {
      this.$confirm({
        title: 'Lorem',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        preventScroll: true,
        clickMask: true
      }).then(res => {
        console.log('res', res)
      })
    }
  }
}
</script>

<style lang="scss">
  .demo {
    .btn {
      display: inline-block;
      vertical-align: middle;
      width: 100px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      border: 1px solid #ddd;
      cursor: pointer;
      + .btn {
        margin-left: 20px;
      }
    }
  }
</style>
