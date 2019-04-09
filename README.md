# modal
A alert/confirm modal in vue

# examples

js
```javascript
import modal from '@o-ui/modal'
Vue.use(modal)

this.$alert({
  title: 'title',
  message: 'message',
  btnText: 'btnText',
  opacity: 0.2,
  zIndex: 100
}).then(res => {
  // res: confirm/close/mask
  if (res === 'confirm') {
    // ...
  }
})
this.$confirm({
  title: 'title',
  message: 'message',
  cancelText: 'cancelText',
  confirmText: 'confirmText'
}).then(res => {
  // res: cancel/confirm/close/mask
  if (res === 'confirm') {
    // ...
  }
})
```

components
```html
<template>
  <modal title="title" :showModal="showModal" @confirm="confirm">
    <div>custom model content</div>
  </modal>
</template>
<script>
export default {
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    confirm () {
      // ...
    }
  }
}
</script>
```

params

| Param | Description |
| ----- | ----------- |
| showModal | when use modal by components |
| title | modal title |
| message | modal message |
| cancelText | confirm left button text |
| confirmText | confirm right button text |
| btnText | alert button text |
| preventScroll | prevent elements scroll under the mask |
| clickMask | resolve mask click  |
| modalType | alert/confirm |
| opacity | mask opacity |
| zIndex | modal mask z-index && modal z-index |
