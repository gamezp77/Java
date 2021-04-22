var span = document.createElement("span");
span.innerHTML = "My Gram  ";

var div = document.getElementById("MainContainer");

div.appendChild(span);

var loginButton =
    document.createElement("button");
loginButton.innerHTML = "Log In";
div.appendChild(loginButton);

var signUpButton =
    document.createElement("button");
signUpButton.innerHTML = "Sign Up";
var a = document.createElement("a");
a.setAttribute("href", "Home/Register");
a.appendChild(signUpButton);

div.appendChild(a);

var lineBreak = document.createElement("br");
div.appendChild(lineBreak);

var lineBreak = document.createElement("br");
div.appendChild(lineBreak);

var table = document.createElement("table");
var tbody = document.createElement("tbody");
var trow = document.createElement("tr");;
var td = null;
var imageSpan = null;
var counter = 0;

var imageList = [];

var image = new Image();

for (var i = 0; i < 25; i++) {
    image = new Image();
    image.imageName = "Image " + (i + 1);
    image.imageId = (i + 1);
    image.imagePath = "";

    imageList.push(image);

}

for (var i = 0; i < 25; i++) {
    image = imageList[i];
    if (counter == 5) {
        tbody.appendChild(trow);
        trow = document.createElement("tr");
        counter = 0;
    }
        
        td = document.createElement("td");
    imageSpan = document.createElement("span");
    imageSpan.className = "ImagesClass";
        imageSpan.innerHTML = image.imageName;
   

    td.appendChild(imageSpan);

    trow.appendChild(td);

    counter++;
}


tbody.appendChild(trow);

table.appendChild(tbody);

div.appendChild(table);

var imageClassList = document.getElementsByClassName("ImagesClass");
for (var x = 0; x < 25; x++) {
    imageClassList[x].onclick = function()  {
        alert("You have clicked on an image");
    }
}



var lineBreak = document.createElement("br");
div.appendChild(lineBreak);

var lineBreak = document.createElement("br");
div.appendChild(lineBreak);

var aboutSpan = document.createElement("span");

aboutSpan.innerHTML = "About  ";

div.appendChild(aboutSpan);


var blogSpan = document.createElement("span");

blogSpan.innerHTML = "  Blog  ";

div.appendChild(blogSpan);

var jobsSpan = document.createElement("span");

jobsSpan.innerHTML = "  Jobs  ";

div.appendChild(jobsSpan);

var helpSpan = document.createElement("span");

helpSpan.innerHTML = "  Help  ";

div.appendChild(helpSpan);


var lineBreak = document.createElement("br");
div.appendChild(lineBreak);

var englishSpan = document.createElement("span");

englishSpan.innerHTML = "English  ";

div.appendChild(englishSpan);


var yearSpan = document.createElement("span");

yearSpan.innerHTML = "  2021  ";

div.appendChild(yearSpan);

var mySpan = document.createElement("span");

mySpan.innerHTML = "  My  ";

div.appendChild(mySpan);

var gramSpan = document.createElement("span");

gramSpan.innerHTML = "  Gram  ";

div.appendChild(gramSpan);

var lineBreak = document.createElement("br");
div.appendChild(lineBreak);

var lineBreak = document.createElement("br");
div.appendChild(lineBreak);


var divThemeContainer = document.getElementById("ThemeContainer");
var select = document.createElement("select");
var option = document.createElement("option");
option.innerHTML = "Light Theme";
select.appendChild(option);

option = document.createElement("option");
option.innerHTML = "Dark Theme";
select.appendChild(option);
divThemeContainer.appendChild(select);

var span = document.createElement("span");
span.innerHTML = "Change Theme:";
divThemeContainer.appendChild(span);

select.onchange = function () {
    alert("You have changed the theme");
}



//var firstDate = new Date(2016,9,30);
//var secondDate = new Date(1996,6,4);

//if (firstDate > secondDate) {
//    document.write("First date is greater");
//}
//else if (firstDate == seocondDate) {
//    document.write("The two dates are equal");
//}
//else {
//    document.write("The second date is greater");
//}




//var x;/*undefined*/
//var y = 13; /*number*/
//var string2 = 'Second String'; /*string*/
//var decimal = 3.14; /*decimal*/
//var exp = 3e2; /*is like having (3 * 100) or (3*10^2)*/
//var myBool = true; /* boolean */
//var myNull = null; /*null*/

//console.log(x);
//console.log(y);
//console.log(string2);
//console.log(exp);
//console.log(myBool);
//console.log(myNull);

//console.log(typeof x);
//console.log(typeof y);
//console.log(typeof z);
//console.log(typeof string2);
//console.log(typeof decimal);
//console.log(typeof exp);
//console.log(typeof myBool);
//console.log(typeof myNull);

//var x = 10;
//var y = 10;
//var z = x + y;
//var z1 = x - y;
//var z2 = x / y;
//var z3 = x * y;

//console.log(z);
//console.log(z1);
//console.log(z2);
//console.log(z3);

//var Micheangelo = true;
//var Leonardo = true;
//var Donatello = true;
//var Raphael = true;
//var pizza = Micheangelo && Leonardo && Donatello && Raphael;


//function ninjas() {
  //  console.log(pizza);
//}
//ninjas();

//var g = '     "Hello, this is a string."   ';
//var e = g.substring(4, 8);
//var h = g.trim();

//console.log(g);
//console.log(e);
//console.log(h);

//"use strict";

//document.write('</br>');
//var d = new Date(); 


//document.write((d.getMonth() + 1).toString().padStart(2, "0") + "/" +
//d.getMonth().toString().padStart(2, "0") + "/" +
//d.getFullYear());

//document.write('</br>');

//document.write(d.toLocaleString("ja-JP"));


