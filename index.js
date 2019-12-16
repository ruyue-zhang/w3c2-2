var move = document.getElementsByClassName("move")[0]; //获取元素
var x, y; //鼠标相对与div左边，上边的偏移
var isDrop = false; //移动状态的判断鼠标按下才能移动
move.onmousedown = function(e) {
  var e = e || window.event; //要用event这个对象来获取鼠标的位置
  x = e.clientX - move.offsetLeft;
  y = e.clientY - move.offsetTop;
  isDrop = true; //设为true表示可以移动
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

      moveX=Math.min(maxX, Math.max(0,moveX));
      moveY=Math.min(maxY, Math.max(0,moveY));
      move.style.left = moveX + "px";　　
      move.style.top = moveY + "px";　　　　　　　　　　
  } 
  else {
      return;　　　　　　　　　　
  }
}
document.onmouseup = function() {
  isDrop = false; //设置为false不可移动
}