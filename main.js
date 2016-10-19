// Knock Knock JS Code:
//replace .hide withing the html

document.getElementById("joke-part2") .classList.add ("hide");
document.getElementById("button2") .classList.add("hide");
document.getElementById("joke-part3") .classList.add("hide");

// when user clicks first button show seond part

document.getElementById("button1") .addEventListener ('click',function() {
  document.getElementById("joke-part2") .classList.add ("show");
  document.getElementById("button2") .classList.add ("show");
});

document.getElementById("button2") .addEventListener ("click", function() {
  document.getElementById("joke-part3") .classList.add ("show")
});
