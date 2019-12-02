console.log("lb");
class clunbo{
  constructor(op){
     this.data=op.data
  }
  credom(){
      let dom=""
      for(let i=0;i<this.data.length;i++){
          dom+=`
          <div class="swiper-slide">
                <img src="${this.data[i].src}" alt="">
          </div>
          `;
      }
      return dom
  }
}
module.exports=clunbo