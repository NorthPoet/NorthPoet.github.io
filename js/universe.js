function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark()

//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀跑哪里去了~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '🐖抓到你啦～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});

function whenDOMReady() {
  if (location.pathname == '/essay/') document.addEventListener('DOMContentLoaded', function () {setTimeout(() => { changeTime(), btf.loadLightbox(document.querySelectorAll('#icat-bber img')), window.lazyLoadInstance && window.lazyLoadInstance.update(), reflashWaterFall();}, 300)})
}
whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// 适配pjax

window.onresize = () => {
  waterfall('#waterfall');
};

// 自适应

function timeDiff(timeObj, today) => {
  const timeObjUTC = Date.UTC(timeObj.getFullYear(), timeObj.getMonth(), timeObj.getDate());
  const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());

  const timeDiff = todayUTC - timeObjUTC;
  return Math.floor(timeDiff / (1000 * 3600 * 24));
}
function changeTime() {
  const timeElements = Array.from(document.getElementsByTagName("time"));
  const currentDate = new Date();

  timeElements.forEach(timeElement => {
    const datetime = timeElement.getAttribute("datetime");
    const timeObj = new Date(datetime);
    const daysDiff = timeDiff(timeObj, currentDate);

    let timeString;
    if (daysDiff === 0) {
      timeString = `最近`;
    } else if (daysDiff === 1) {
      timeString = `昨天`;
    } else if (daysDiff === 2) {
      timeString = `前天`;
    } else if (daysDiff <= 7) {
      timeString = `${daysDiff}天前`;
    } else {
      if (timeObj.getFullYear() !== currentDate.getFullYear()) {
        timeString = `${timeObj.getFullYear()}/${timeObj.getMonth() + 1}/${timeObj.getDate()}`;
      } else {
        timeString = `${timeObj.getMonth() + 1}/${timeObj.getDate()}`;
      }
    }
    timeElement.textContent = timeString;
  });
}
function reflashWaterFall() {
  document.querySelector("#waterfall") &&
    setTimeout(function() {
      waterfall("#waterfall");
      document.getElementById("waterfall")
        .classList.add("show");
    }, 500);
} // 加载显示 - 即刻短文
function commentText(txt) {
  const inputs = ["#wl-edit", ".el-textarea__inner"];
  for (let i = 0; i < inputs.length; i++) {
    let el = document.querySelector(inputs[i]);
    if (el != null) {
      el.dispatchEvent(new Event('input', { bubble: true, cancelable: true }));
      el.value = '> ' + txt.replace(/\n/g, '\n> ') + '\n\n';
      el.focus();
      el.setSelectionRange(-1, -1);
    }
  }
} // 引用评论跳转 - 即刻短文


function waterfall(a) {
  function b(a, b) {
    var c = window.getComputedStyle(b);
    return parseFloat(c["margin" + a]) || 0;
  }
  function c(a) {
    return a + "px";
  }
  function d(a) {
    return parseFloat(a.style.top);
  }
  function e(a) {
    return parseFloat(a.style.left);
  }
  function f(a) {
    return a.clientWidth;
  }
  function g(a) {
    return a.clientHeight;
  }
  function h(a) {
    return d(a) + g(a) + b("Bottom", a);
  }
  function i(a) {
    return e(a) + f(a) + b("Right", a);
  }
  function j(a) {
    a = a.sort(function (a, b) {
      return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a);
    });
  }
  function k(b) {
    f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a));
  }
  "string" == typeof a && (a = document.querySelector(a));
  var l = [].map.call(a.children, function (a) {
    return (a.style.position = "absolute"), a;
  });
  a.style.position = "relative";
  var m = [];
  l.length && ((l[0].style.top = "0px"), (l[0].style.left = c(b("Left", l[0]))), m.push(l[0]));
  for (var n = 1; n < l.length; n++) {
    var o = l[n - 1],
      p = l[n],
      q = i(o) + f(p) <= f(a);
    if (!q) break;
    (p.style.top = o.style.top), (p.style.left = c(i(o) + b("Left", p))), m.push(p);
  }
  for (; n < l.length; n++) {
    j(m);
    var p = l[n],
      r = m.pop();
    (p.style.top = c(h(r) + b("Top", p))), (p.style.left = c(e(r))), m.push(p);
  }
  j(m);
  var s = m[0];
  a.style.height = c(h(s) + b("Bottom", s));
  var t = f(a);
  window.addEventListener ? window.addEventListener("resize", k) : (document.body.onresize = k);
}

function whenDOMReady() {
	initEssay();
};

whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

function initEssay() {
  if (document.querySelector('#essay-mini')) {
    let swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },
    });
  }
} // Swiper轮播 - 即刻mini