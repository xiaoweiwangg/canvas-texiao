console.log("xiangbao.js");
import "../css/index.scss";
// import "hotcss"
import fast from "fastclick"
import "./jquery.aniview"
fast.attach(document.body)
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

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods:{
        // tab(e){
        //     e.preventDefault();
        //     console.log("ev");
        // }
    }
  })
  $(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      autoplay:true,
    })        
   })
  