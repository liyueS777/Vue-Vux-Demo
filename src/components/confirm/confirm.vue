<template>
  <div>
    <divider>按钮式调用</divider>
    <group>
      <x-switch title="Toggle" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>
      <confirm v-model="show"
               title="confirm deleting the item"
               @on-cancel="onCancel"
               @on-confirm="onConfirm"
               @on-show="onShow"
               @on-hide="onHide">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
    </div>
    <divider>组件式调用</divider>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin" type="primary">Show</x-button>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin2" type="primary">Plugin usage</x-button>
    </div>
  </div>
</template>

<script>
  import { Divider,Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Confirm,
      Group,
      XSwitch,
      XButton,
      Divider
    },
    data () {
      return {
        show: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false
      }
    },
    methods: {
      onCancel () {
        console.log('on cancel')
      },
      onConfirm (msg) {
        console.log('on confirm')
        if (msg) {
          alert(msg)
        }
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      showPlugin () {
        this.$vux.confirm.show({
          title: '确定要这么做？',
          content: 'Content',
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            console.log('plugin confirm')
          }
        })
      },
      showPlugin2 () {
        this.showPlugin()
      },
    }
  }
</script>
