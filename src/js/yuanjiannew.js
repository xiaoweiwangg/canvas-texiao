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
$(".tab_btn div").on("click",function(e){
  $(this).addClass("active").siblings().removeClass("active")
  // console.log());
  $(".tab_cont .ite").eq($(this).index()).addClass("active").siblings().removeClass("active")
})
class news{
  constructor(obj){
    this.data=obj.data
    this.type=obj.type
  }
  indom(){
    let dom=""
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].type==this.type){
        dom+=`
    <div class="n_item" style="border-bottom: 2px solid #b3b3b3;padding: 25px;display: flex;">
              <div class="n_img" style="margin-right: 40px;">
                <img src="../images/ys_03.png" alt="" width="117px" height="117px" style="border: 1px solid black;">
              </div>
              <div class="n_con" style="display: flex;width: 100%;flex-flow: column;justify-content: space-around;">
                <a href="/new.html" style="text-decoration: none;"><dt style="font-size: 40px;font-family: '宋体';color: #505050;">${this.data[i].title}</dt></a>
                <dd style="font-size: 22px;color: #aaaaaa;margin:10px 0;">${this.data[i].summary}</dd>
                <div class="auth" style="width: 100%;display: flex;justify-content: space-between;color: #aaaaaa;font-size: 22px;">
                  <div class="au">本文作者: <span>${this.data[i].authour}</span></div>
                  <div class="time">${this.data[i].time}</div>
                </div>
              </div>
    </div>
    `
      }
    }
    
    return dom
  }

}
$(document).ready(function () {
  $.ajax({
    url:"/fnew",
    type:"POST",
    success:function(x) {
      let n=new news({data:x,type:"公司新闻"})
      let xb=new news({data:x,type:"箱包新闻"})
      let z=new news({data:x,type:"珠宝新闻"})
      let b=new news({data:x,type:"钟表新闻"})
      $(".gongsi").html(n.indom())
      $(".xiangbao").html(xb.indom())
      $(".zhubao").html(z.indom())
      $(".zhongbiao").html(b.indom())
      console.log(n.indom());
      
    }
  })
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:true,
  })        
 })