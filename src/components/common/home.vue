<template>
    <div>
      <div class="header">
        <span class="back" @click="goBack">
        <i class="fa fa-reply-all fa-lg"></i>
        </span>
        <div class="title">{{this.$route.query.title}}</div>
        <div @click="show = !show" class="list">
          <i class="fa fa-dedent fa-lg" ></i>
        </div>
      </div>
      <!--<x-header title="122" @on-click-more="show = !show" :left-options="{showBack: true,backText: '返回'}" :right-options="{showMore: true}" @on-click-title="show = !show">-->
      <!--</x-header>-->
      <popup v-model="show" position="right" @on-hide="close" hide-on-deactivated class="w-popup">
          <div>
            <group title="功能一">
              <cell class="sub"
                title="用户"
                is-link
                :border-intent="false"
                :arrow-direction="showContent001 ? 'up' : 'down'"
                @click.native="showContent001 = !showContent001"></cell>

              <template v-if="showContent001">
                <cell-box class="sub-item" :link="{name:'aboutMe',query:{title:'我的'}}">我的</cell-box>
                <cell-box :border-intent="false" class="sub-item" link="/login">登录</cell-box>

              </template>
              <cell class="sub"
                title="组件功能"
                is-link
                :border-intent="false"
                :arrow-direction="showContent003 ? 'up' : 'down'"
                @click.native="showContent003 = !showContent003"></cell>

              <template v-if="showContent003">
                <cell-box class="sub-item" :link="{name:'u',query:{title:'小碎件'}}">各种按钮</cell-box>
                <cell-box class="sub-item" :link="{name:'swiper',query:{title:'轮播图'}}">轮播图</cell-box>
                <cell-box class="sub-item" :link="{name:'previewer',query:{title:'图片预览'}}">预览图</cell-box>
                <cell-box class="sub-item" :link="{name:'confirm',query:{title:'确定框'}}">confirm</cell-box>
                <cell-box class="sub-item" :link="{name:'group',query:{title:'选择列表'}}">Input 选择列表</cell-box>
                <cell-box class="sub-item" :link="{name:'swiperLoad',query:{title:'swiperLoad'}}">swiperLoad</cell-box>
                <cell-box class="sub-item" :link="{name:'pulldown',query:{title:'上拉加载、下拉刷新'}}">上拉加载、下拉刷新</cell-box>
                <cell-box class="sub-item" :link="{name:'map',query:{title:'地图'}}">map</cell-box>
                <cell-box class="sub-item" :link="{name:'sticky',query:{title:'sticky'}}">sticky</cell-box>
                <cell-box class="sub-item" :link="{name:'swipeout',query:{title:'swipeout'}}">swipeout</cell-box>
                <cell-box class="sub-item" :link="{name:'toast',query:{title:'toast'}}">toast</cell-box>
                <cell-box class="sub-item" :link="{name:'select',query:{title:'select'}}">select</cell-box>
              </template>
            </group>
          </div>
        </popup>
      <router-view class="homeView"></router-view>
    </div>
</template>
<script>
  import { XSwitch,Group,Popup,Cell, CellBox,CellFormPreview,XHeader } from 'vux'

  export default {
        components:{
          XSwitch,Group,Popup,Cell, CellBox,CellFormPreview,XHeader
        },
        data() {
            return {
                show:false,
                showContent001: false,
                showContent003: false,
                list: [{
                  label: 'Apple',
                  value: '3.29'
                }, {
                  label: 'Banana',
                  value: '1.04'
                }, {
                  label: 'Fish',
                  value: '8.00'
                }]
            }
        }, created() {
            console.log(this.$route,8989);
        }, methods: {
            onClick () {
              console.log('on click')
            },
            close(){
                console.log('close');
            },
            goBack(){
                this.$router.go(-1);
            }

        },
        watch:{
            $route:{
                handler(r){
                    console.log(r.params);
                    this.show = !this.show;
                },
                deep:true
            }
        }
    }
</script>
<style lang="scss" scoped>
  /*.child-view2 {*/
    /*width: 100%;*/
    /*position: absolute;*/
    /*z-index: 1000;*/
  /*}*/
  .slide-leave-active,.slide-enter-active {
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .slide-enter,.slide-leace-to {
    opacity: 0;
    transform:translate3d(100%,0,0);
  }
  .animated {
    animation-duration: .5s;
    animation-fill-mode: both;
  }
  @keyframes bounceInLeft {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }

    75% {
      transform: translate3d(-10px, 0, 0);
    }

    90% {
      transform: translate3d(5px, 0, 0);
    }

    to {
      transform: none;
    }
  }

  .bounceInLeft {
    animation-name: bounceInLeft;
  }
  .header {
    width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: #35495e;
    position: fixed;
    top: 0;
    left: 0;
    z-index:2;
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
      right: 5px;
      top: 0px;
      width: 40px;
      box-sizing: border-box;
      font-size: 17px;
      padding-left: 10px;
      /*padding-right: 10px;*/
    }
  }
  .homeView {
    padding-top: 60px;
  }
  .w-popup {
    width: 70% !important;
    .weui-cells {
      .sub.weui-cell {
        line-height: 0;
        font-size: 17px !important;

      }
      .weui-cell {
        font-size: 15px !important;
        .vux-cell-primary {
          line-height: 0 !important;
        }
        &::before {
          left: 0px !important;
        }

      }
      .vux-cell-box {
        background-color: rgba(239,239,239,1) !important;
        > div {
          font-size: 14px !important;
        }
      }
    }


  }
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>
