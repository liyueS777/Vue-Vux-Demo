<template>
    <div class="mapBox" ref='mapBox'>
      <group title="" >
        <x-input title="" placeholder="请输入关键字" ref="mapInput" id="mapInput"></x-input>
      </group>
      <!--<input type="text" id="suggestId">-->
      <div id="allmap" style="
                width: 100%;
                height:300px;
                border: 1px solid gray;
                overflow:hidden;">

      </div>
      <div id="searchResultPanel"></div>
    </div>
</template>
<!--<script src="http://api.map.baidu.com/api?v=2.0&ak=piXQ5CgHFqEefqCVbhhBFfe6HjF7l4zW"></script>-->
<script>
  import {Group,XInput } from 'vux'

  export default {
      components:{
        Group,XInput
      },
        data() {
            return {}
        }, created() {


        }, methods: {

      },mounted(){
        // 百度地图API功能
          var map = new BMap.Map("allmap");    // 创建Map实例
          map.centerAndZoom(new BMap.Point(113.30764968, 23.1200491), 11);  // 初始化地图,设置中心点坐标和地图级别
          map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
          map.setCurrentCity("深圳市");          // 设置地图显示的城市 此项是必须设置的
          map.enableScrollWheelZoom(true);
          map.enableScrollWheelZoom();
//      var myDrag = new BMapLib.RectangleZoom(map, {
//        followText: "拖拽鼠标进行操作"
//      });
//      myDrag.open();  //开启拉框放大
      this.$refs["mapInput"].$el.querySelector('.weui-input').id="suggestId";
//      this.$refs.mapInput.$children[1].$children[0].id = "suggestId";
//        document.getElementById('mapInput').children[1].children[0].id="suggestId";
        // 百度地图API功能
          function G(id) {
            return document.getElementById(id);
          }


        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
          {"input" : "suggestId",
            "location" : map
          });

        ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
          var str = "";
          var _value = e.fromitem.value;
          var value = "";
          if (e.fromitem.index > -1) {
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
          }
          str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

          value = "";
          if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
          }
          str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
//          G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
          var _value = e.item.value;
          myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
//          G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

          setPlace();
        });

        function setPlace(){
          map.clearOverlays();    //清除地图上所有覆盖物
          function myFun(){
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 18);
            map.addOverlay(new BMap.Marker(pp));    //添加标注
          }
          var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
          });
          local.search(myValue);
        }

      }
    }
</script>
<style>
  #allmap {
    box-sizing: border-box;
  }
  .anchorBL{
    display: none;
  }
</style>
