var q1 = "f@l" + Math.floor(Math.random() * 101);
var q2 = Math.floor(Math.random() * 101);
var q3 = "Y@" + Math.floor(Math.random() * 1001) + 'agF';
var q4 = '!' + screen.availHeight+screen.availWidth * Math.floor(Math.random() * 11);
var q5 =  'Q1?' + Math.floor(Math.random() * 1001);
var q6 = '$' + screen.availHeight+screen.availHeight * Math.floor(Math.random() * 11);
var q7 =  '##F' + Math.floor(Math.random() * 11);
var q8 = new Date();
var q9 = q8.getDate();
var q10 = q8.getMonth();
var q11 = q8.getFullYear();
var q12 = q8.getMinutes();
var q13 = q8.getSeconds();
var q14 = Math.floor(Math.random() * 180);

var m1 = Math.tan(q13);

var div = '#f@'

var f1 = Math.round(q11/q2);
var f2 = Math.ceil(m1);
var f3 = Math.round(q14*q11) + q7;
var f4 = Math.round(q12*q13/3.14)

if (navigator.cookieEnabled === false){
  console.log('Cookies are disabled')
  document.getElementById("jsC1").innerHTML = (q1+f3+div+f1+f2+div+f4);
  document.getElementById("jsC2").innerHTML = "Your cookies are active. You can change this in your browser's settings.";
}
if (navigator.cookieEnabled === true){
  document.getElementById("jsC1").innerHTML = (q1+f2+div+f1+f3+q12+q11);
  document.getElementById("jsC2").innerHTML = "Your cookies are deactivated.";
  console.log('Cookies are enabled')
}
