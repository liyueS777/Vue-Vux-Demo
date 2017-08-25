<template>
    <div>
      <div class="header">
        <span class="back" @click="goBack">
        <i class="fa fa-reply-all fa-lg"></i>
        </span>
        <div class="title">登录</div>
      </div>
      <div class="loginForm">
        <group title="" >
          <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
        </group>
        <group title="">
          <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group title="">
          <x-input title="密码" type="text" placeholder="请输入密码" v-model="enterText"
                   @on-enter="onEnter"></x-input>
        </group>
        <div class="formLogin">
          <divider>请先填好上面信息</divider>
          <x-button type="primary" :show-loading='isShowLoading' @click.native="login">登录</x-button>
        </div>
      </div>

    </div>
</template>
<script>
  import { Alert,TransferDomDirective as TransferDom,Group,XInput,Divider,XButton,XHeader } from 'vux'
    export default {
      components:{
        Alert,Group,XInput,Divider,XButton,XHeader
      },
      directives: {
        TransferDom
      },
        data() {
            return {
                show:false,
                enterText:'',
                isShowLoading:false
            }
        }, created() {

        }, methods: {
            goBack(){
              this.$router.go(-1);
            },
            login(){
              this.isShowLoading = true;
              setTimeout(()=>{
                this.$router.push({
                  path:'/home',
                  query:{
                      title:'主页'
                  }
                });
                this.isShowLoading = false;
              },500)
            },
            onEnter (val) {
              console.log('click enter!', val)
              this.login();
            }
        }
    }
</script>
<style lang="scss" scoped>
  .formLogin {
    padding-left: 10px;
    padding-right: 10px;
  }
  .header {
    height: 46px;
    line-height: 46px;
    background-color: #35495e;
    position: relative;
    color:white;
    .back {
      position: absolute;
      left:0px;
      top: 0;
      box-sizing: border-box;
      /*width: 60px;*/
      padding-left: 10px;
      padding-right: 10px;
      font-size: 16px;
    }
    .title {
      text-align: center;
    }
    .list {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 40px;
      box-sizing: border-box;
      font-size: 17px;
    }
  }
  .loginForm {
    padding-top: 6px;
  }
</style>
