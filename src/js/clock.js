import "../css/index.scss";
// import "hotcss"
import fast from "fastclick"
fast.attach(document.body)
import "./jquery.aniview"

$(function(){
    console.log("hello");
    $(".pre").on("click",()=>{
        $(".t_top ul").css({
            transform:"translateX(-233px)"
        })
    })
    $(".next").on("click",()=>{
        $(".t_top ul").css({
            transform:"translateX(0px)"
        })
    })
})
var options = {
    animateThreshold: 10,
    scrollPollInterval: 0
}
$('.aniview').AniView(options); 
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      autoplay:true,
    })        
   })