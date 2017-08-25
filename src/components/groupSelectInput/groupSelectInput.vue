<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-number title="计算器" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>
      <datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>
      <x-input title="用户名" placeholder="必填" v-model="value3"></x-input>
      <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
      <!--<popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>-->
      <popup-picker title="title3" :data="list" :columns="3" v-model="value5"></popup-picker>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
      <x-textarea placeholder="请填写详细信息" :show-counter="true" :rows="3" v-model="textArea" @on-blur="onEvent('blur')">
        <img slot="restricted-label" :autosize="true" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
      </x-textarea>
      <div style="padding:15px;">
        <x-button @click.native="showPlugin" type="primary">提 交</x-button>
      </div>
    </group>
  </div>
</template>

<script>
  import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch,XButton } from 'vux'
  export default {
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XSwitch,
      XButton
    },
    data () {
      return {
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        value3: '',
        value4: '',
        value5: [],
        list: [{
          name: '中国',
          value: '1',
          ID:1
        }, {
          name: '美国',
          value: '2',
          ID:2
        }, {
          name: '广东',
          value: '3',
          ID:3
        }],
        time1: '2017-06-01',
        numberValue: 0,
        textArea:'122211'
      }
    },
    methods:{
      onEvent (event) {
        console.log('on', event)
      },
      showPlugin () {
        const that = this;
        this.$vux.confirm.show({
          title: '确定要这么做？',
          content: 'Content',
          onShow () {
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            that.$nextTick(()=>{
              console.log(that.addressValue,that.value3,that.value4,that.value5,that.time1,that.numberValue,that.textArea);
            })
          }
        })
      },
    }




  }
</script>
