import "../css/index.scss";

//视图滚动模块
import "./jquery.aniview"
var options = {
    animateThreshold: 10,
    scrollPollInterval: 0
}
$('.aniview').AniView(options); 
//tab模块
$(".tab_btn div").on("click",function(e){
  $(this).addClass("active").siblings().removeClass("active")
  $(".tab_cont .ite").eq($(this).index()).addClass("active").siblings().removeClass("active")
//百度地图模块
  var map = new BMap.Map("allmap");
var point = new BMap.Point(117.177969,39.08321);
map.centerAndZoom(point, 16);
var marker = new BMap.Marker(point);
map.addOverlay(marker);               
marker.setAnimation(BMAP_ANIMATION_BOUNCE);
})
//轮播模块
$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:true,
  })        
  //报名模块
  let chekarr=[]
  $(".c_chek .act").each(function (x,y) {
    chekarr.push($(y).text())
  })
  $(".c_chek div").on("click",function() {
    chekarr=[]
    $(this).toggleClass("act")
    $(".c_chek .act").each(function (x,y) {
      chekarr.push($(y).text())
    })
    console.log(chekarr);
  })
    $(".sub_btn").on("click",function() {
      if(chekarr.length<1){
        alert("您要学习的内容")
      }
      let name=$.trim($(".c_tname input").val())
      let phone=$.trim($(".c_phone input").val())
      let type=chekarr.join("和")
      if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        alert("手机号码有误，请重填");  
        return false; 
     } 
     if(name.length<2||!isNaN(name)){
       alert("姓名输入有误")
     }
      console.log(name,phone,type);
      $.ajax({
        url:"/report",
        type:"POST",
        data:{name:name,phone:phone,type:type},
        success:function(x) {
          if(x.success){
            alert("报名已经成功提交")
            $(".c_tname input").val("")
            $(".c_phone input").val("")
            $(".c_c1").siblings().removeClass("act")
          }else{
            alert("报名提交失败,请重新提交或者联系管理员")
          }
        }
      })
    })
 })
