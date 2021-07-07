/*game timer*/

setTimeout(timer, 0);

var i = 60;
var startTime = document.getElementById('count-down');

function timer() {
  setInterval(decrease, 1000);
}
function decrease() {
    if (i >= 1) {
      i--;
      startTime.innerText = i; 
    }
  
}

