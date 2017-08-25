<template>
  <div>

    <divider>水平滑动没有滚动条</divider>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>水平滑动有滚动条</divider>
    <scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>



    <!--<divider>123</divider>-->
    <!--<scroller lock-x scrollbar-y height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offset="0" class="scrollerYYY" :use-pulldown="true">-->
      <!--<div class="box2">-->
        <!--<p v-for="i in bottomCount">placeholder {{i}}</p>-->
        <!--<load-more tip="正在加载中"></load-more>-->
      <!--</div>-->
    <!--</scroller>-->
    <!--<x-button type="primary" @click.native="$refs.scrollerBottom.reset({top:0})">reset</x-button>-->

  </div>
</template>



<script>
  import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux'
  export default {
    components: {
      Scroller,
      Divider,
      Spinner,
      XButton,
      Group,
      Cell,
      LoadMore
    },
    data () {
      return {
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20
      }
    },
    mounted () {
      this.$nextTick(() => {
        //一开始进去重置到顶部
//        this.$refs.scrollerBottom.reset({top: 0})
      })
    },
    methods: {
//      onScrollBottom () {
//          console.log(124);
//        if (this.onFetching) {
//          // do nothing
//        } else {
//          this.onFetching = true
//          setTimeout(() => {
//            this.bottomCount += 10
//            this.$nextTick(() => {
//              this.$refs.scrollerBottom.reset()
//            })
//            this.onFetching = false
//          }, 1000)
//        }
//      },
    }
  }
</script>

<style scoped>
  .box1 {
    height: 100px;
    position: relative;
    width: 1490px;
  }
  .box1-item {
    width: 200px;
    height: 100px;
    background-color: #ccc;
    display:inline-block;
    margin-left: 15px;
    float: left;
    text-align: center;
    line-height: 100px;
  }
  .box1-item:first-child {
    margin-left: 0;
  }
  .box2-wrap {
    height: 300px;
    overflow: hidden;
  }
  .scrollerYYY {
    /*这里设置了底部内边距是为了让上拉加载的字幕显示出来*/
    margin-bottom: 20px;
    /*border: 2px solid #000;*/
    padding: 40px;
  }
</style>
