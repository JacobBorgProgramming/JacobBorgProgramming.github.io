var a1           = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length;
   a1 += characters.charAt(Math.floor(Math.random() * charactersLength));

   var a2           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
      a2 += characters.charAt(Math.floor(Math.random() * charactersLength));

      var a3           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
         a3 += characters.charAt(Math.floor(Math.random() * charactersLength));
         var c1           = '';
         var characters       = '!@#$%&?-';
         var charactersLength = characters.length;
            c1 += characters.charAt(Math.floor(Math.random() * charactersLength));
            var c2           = '';
            var characters       = '!@#$%&?-';
            var charactersLength = characters.length;
               c2 += characters.charAt(Math.floor(Math.random() * charactersLength));

var q1 = a2 + Math.floor(Math.random() * 1001);
var q2 = Math.floor(Math.random() * 101);
var q3 = "#"+a1 + Math.floor(Math.random() * 1001);
var q4 = '&' + Math.floor(Math.random() * 11);
var q5 =  a2+a3 + Math.floor(Math.random() * 1001);
var q6 = c2 + screen.availHeight+screen.availHeight * Math.floor(Math.random() * 11);
var q7 =  a1 + Math.floor(Math.random() * 8);
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
  document.getElementById("jsC1").innerHTML = (q1+div+c1+f4+f2+c2+f3);

}
if (navigator.cookieEnabled === true){
  document.getElementById("jsC1").innerHTML = (q1+div+c1+f4+f2+c2+f3);

  console.log('Cookies are enabled')
}
