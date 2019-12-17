var move = document.getElementsByClassName("move")[0]; //获取元素
var stick = document.getElementsByClassName("stick")[0];

var x, y; //鼠标相对与div左边，上边的偏移
var isDrop = false; //移动状态的判断鼠标按下才能移动
//得到stick的left和top

var stickX = stick.offsetLeft;
var stickY = stick.offsetTop;

move.onmousedown = function(e) {
  var e = e || window.event; //要用event这个对象来获取鼠标的位置
  x = e.clientX - move.offsetLeft;
  y = e.clientY - move.offsetTop;
  isDrop = true; 
}

document.onmousemove = function(e) {              　　　　　　　　　　　 　　　　　　　
  if(isDrop) {　　　　
      var e = e || window.event;                   　　
      var moveX = e.clientX - x;                   　　
      var moveY = e.clientY - y; 

      //是否重合的判断及改变颜色
      var moveBoxX = move.offsetLeft;
      var moveBoxY = move.offsetTop;
      var isIntersect = (moveBoxX >= stickX - 80 && moveBoxX <= stickX + 80) 
                     && (moveBoxY >= stickY - 80 && moveBoxY <= stickY + 80)
      if(isIntersect) {
        stick.style.backgroundColor = "blue";
      }

      //限制红色div的移动范围在大盒子里
      var box = document.getElementsByClassName("box")[0];
      var maxX = box.clientWidth - move.clientWidth;
      var maxY = box.clientHeight -move.clientHeight;
      if(moveX <= 0) {
        moveX = 0;
      }
      else if(moveX >= maxX) {
        moveX = maxX;
      }

      if(moveY <= 0) {
        moveY = 0;
      }
      else if(moveY >= maxY) {
        moveY = maxY;
      }
      move.style.left = moveX + "px";　　
      move.style.top = moveY + "px";　　　　　　　　　
  } 
  else {
      return;　　　　　　　　　　
  }
}

document.onmouseup = function() {
  isDrop = false;
}
