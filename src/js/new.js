import "../css/index.scss";
import fast from "fastclick"
fast.attach(document.body)
import "./jquery.aniview"
var options = {
    animateThreshold: 10,
    scrollPollInterval: 0
}
$('.aniview').AniView(options); 
$(".tab_btn div").on("click",function(e){
  $(this).addClass("active").siblings().removeClass("active")
  $(".tab_cont .ite").eq($(this).index()).addClass("active").siblings().removeClass("active")
})
$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:true,
  })        
 })