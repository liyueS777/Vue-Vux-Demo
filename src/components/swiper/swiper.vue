<template>
  <div>
    <group-title>好好看看</group-title>
    <swiper loop auto height="60px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p>微笑着，去唱生活的歌谣。</p></swiper-item>
      <swiper-item><p>大海如果失去了巨浪的翻滚，就会失去雄浑。</p></swiper-item>
      <swiper-item><p>人生如果仅去求得两点一线。</p></swiper-item>
      <swiper-item><p>不幸，是天才的进升阶梯，信徒的洗礼之水.</p></swiper-item>
      <swiper-item><p>风雨过后，眼前会是鸥翔鱼游的天水一色</p></swiper-item>
      <swiper-item><p>走出荆棘，前面就是铺满鲜花的康庄大道</p></swiper-item>

    </swiper>
    <br/>
    <divider>华丽的分割线</divider>
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" class="aaa" @click.native="selectOne(demo06_index)"></swiper>
  </div>
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, Divider } from 'vux'



  export default {
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      Divider
    },
    methods: {
      selectOne(index){
          console.log(index,123);
          if(index==0){
              this.$router.push({
                name:'pulldown',
                query:{title:'上拉加载、下拉刷新'}
              });
          }else if(index==1){
            this.$router.push({
              name:'previewer',
              query:{title:'图片预览'}
            });
          }
      },
      onSwiperItemIndexChange (index) {
        console.log('demo item change', index)
      },
      demo06_onIndexChange (index) {
          console.log(index,1);
        this.demo06_index = index
      },

    },
    data () {
      return {
        demo06_list: [],
        demo06_index: 0,
        list:[
          {
            img: "./static/imgs/swiper1.png",
            title:111,
            url:"javascript:;"
          },
          {
            img:"./static/imgs/swiper2.png",
            title:222,
            url:"javascript:;"

          },
          {
            img:"./static/imgs/swiper3.png",
            title:333,
            url:"javascript:;"
          },
          {
            img:"./static/imgs/swiper4.png",
            title:444,
            url:"javascript:;"

          },
        ],

        swiperItemIndex: 1
      }
    },
    mounted(){
        this.demo06_list = this.list;
    }
  }
</script>

<style scoped>
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
</style>
