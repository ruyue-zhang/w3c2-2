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
  //是否为可移动状态                　　　　　　　　　　　 　　　　　　　
  if(isDrop) {　　　　
      var e = e || window.event;                    　　
      var moveX = e.clientX - x; //得到距离左边移动距离                    　　
      var moveY = e.clientY - y; //得到距离上边移动距离
      //可移动最大距离
      var maxX = document.documentElement.clientWidth - move.offsetWidth;
      var maxY = document.documentElement.clientHeight - move.offsetHeight;

      //是否重合的判断及改变颜色
      var moveBoxX = move.offsetLeft;
      var moveBoxY = move.offsetTop;
      var isIntersect = (moveBoxX >= stickX - 80 && moveBoxX <= stickX + 80) 
                     && (moveBoxY >= stickY - 80 && moveBoxY <= stickY + 80)
      //console.log(isIntersect);
      if(isIntersect) {
        stick.style.backgroundColor = "blue";
      }
      else {
        stick.style.backgroundColor = "yellow";
      }

      if(moveX < 0) {
          moveX = 0
      } else if(moveX > maxX) {
          moveX = maxX;
      }

      if(moveY < 0) {
          moveY = 0;
      } else if(moveY > maxY) {
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
