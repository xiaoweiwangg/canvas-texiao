import "../css/index.scss";
// import "hotcss"
import fast from "fastclick"
fast.attach(document.body)
import "./jquery.aniview"
var options = {
    animateThreshold: 10,
    scrollPollInterval: 0
}
$('.aniview').AniView(options); 
//tab
$(".tab_btn div").on("click",function(e){
  $(this).addClass("active").siblings().removeClass("active")
  // console.log());
  $(".tab_cont div").eq($(this).index()).addClass("active").siblings().removeClass("active")
})
$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:true,
  })        
 })