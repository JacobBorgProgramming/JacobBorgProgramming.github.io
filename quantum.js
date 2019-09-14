var q1 = "wer" + Math.floor(Math.random() * 101);
var q2 = Math.floor(Math.random() * 101);
var q3 = "q@" + Math.floor(Math.random() * 101) + 'agF';
var q4 = '!' + screen.availHeight+screen.availWidth * Math.floor(Math.random() * 11);
var q5 =  'Q1?' + Math.floor(Math.random() * 101);


if (navigator.cookieEnabled === false){
  console.log('Cookies are disabled')
  document.getElementById("jsC1").innerHTML = (q1 + q2 + q3 + q4 + q5);
  document.getElementById("jsC2").innerHTML = "Your cookies are active. You can change this in your browser's settings.";
}
if (navigator.cookieEnabled === true){
  document.getElementById("jsC1").innerHTML = (q1 + q2 + q3 + q4 + q5);
  document.getElementById("jsC2").innerHTML = "";
  console.log('Cookies are enabled')
}
