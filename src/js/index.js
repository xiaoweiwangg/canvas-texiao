import "../css/index.scss";
// import "hotcss"
import fast from "fastclick"
fast.attach(document.body)
import "./jquery.aniview"
import clunbo from "./lunbo"
$(function(){
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
    $.ajax({
        url:"/lunbo",
        type:"POST",
        success:function(x){
            console.log(x);
            let l=new clunbo({data:x})
            $(".swiper-wrapper").html(l.credom())
            var mySwiper = new Swiper ('.swiper-container', {
              loop: true,
              autoplay:true,
            })        
        }
    })
   })
   
  