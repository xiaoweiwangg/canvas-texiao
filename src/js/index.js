let $ = require("jquery")
let _ = require("underscore")
let canvas = $("canvas")[0]
let c = canvas.getContext("2d")
class Ball {
  constructor(o) {
    this._init()
    this.r = o.r || _.random(60, 100)
    this.x = o.x || _.random(this.r, canvas.width)
    this.y = o.y || _.random(this.r, canvas.height)
    this.sa = o.sa || 0
    this.ea = o.ea || 360
    this.opa = o.opa || 0
    this.speedx = o.speedx || _.random(-.1, .9)
    this.speedy = o.speedy || _.random(-.1, .9)
    this.fps = o.fps || 60
    this.color = o.color || `rgb(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)})`
    console.log(this.speedx);

  }
  _init() {
    canvas.height = $(window).height()
    canvas.width = $(window).width()
    $(window).on("resize", this._init)
  }
  gca() {
    return `rgba(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)},${_.random(5, 10) / 10})`
  }
  gc() {
    return `rgb(${_.random(0, 255)},${_.random(0, 255)},${_.random(0, 255)})`
  }
  updata() {

    if (this.opa <= 0.8) {
      this.opa += .001
    }
    if (this.x <= 0-this.r || this.x >= canvas.width+this.r || this.y <= 0-this.r || this.y >= canvas.height+this.r) {
      this.opa =0.01
      this.x = _.random(-this.r, canvas.width)
      this.y = _.random(-this.r, canvas.height)
    }else{
      this.x += this.speedx
      this.y += this.speedy
    }
  }
  draw(c) {
    c.beginPath()
    c.arc(
      this.x,
      this.y,
      this.r,
      this.sa,
      this.ea,
    )
    c.globalAlpha = this.opa
    c.fillStyle = this.color;
    c.fill()
  }
}
let arr = []
for (let i = 0; i < 30; i++) {
  arr.push(new Ball({
    speedx: _.random(-5, 5) / 10,
    speedy: _.random(-5, 5) / 10,
  }))
}
setInterval(() => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < arr.length; i++) {
    arr[i].draw(c)
    arr[i].updata()
  }
}, 1000 / 60);