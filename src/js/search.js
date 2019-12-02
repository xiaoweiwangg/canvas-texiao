import "../css/index.scss";
//jquery视图特效插件
import "./jquery.aniview"
var options = {
    animateThreshold: 10,
    scrollPollInterval: 0
}
$('.aniview').AniView(options); 
//轮播模块
import clunbo from "./lunbo";
$(document).ready(function () {
  $.ajax({
    url:"/clunbo",
    type:"POST",
    success:function(x){
        console.log(x);
        let l=new clunbo({data:x})
        $(".s_con .swiper-wrapper").html(l.credom())
       swi()      
    }
})
  //搜索模块
  let conthtml=$(".s_con").html()
   $(".s_btn").on("click",function(){
    let code=$.trim($(".s_put input").val()) //ccictj0100502
    if(code.length<12){
      alert("请输入正确证书号码")
      return
    }else{
    $.ajax({
      url:"/findcode",
      data:{code:code},
      type:"POST",
      success:function(x){
        if(x.msg=="ok"){
          $(".s_con").html(`
          <img src=/${x.src}><br/>
          <button>返回</button>
          `).on("click","button",function(){
            console.log("btn");
            $(".s_con").html(conthtml)
            swi()
          })
        }else{
          alert("没有查询到任何数据")
        }
      }
    })}
   })
  swi()
      function swi(){
        var mySwiper = new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
        })  
      }
 })
 