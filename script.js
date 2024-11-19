//lec 41
//inner ele is ony valid for element nodes for other node value or data i.e .data or .datavalue
//console.log(document.body.firstChild.nodeName);

//console.log(document.body.firstElementChild.nodeName);
//first.innerHTML
//first.outerHTML
//first.outerHTML
//first.outerHTML="<div> hey </div>"
//document.body.firstChild;
//document.body.firstChild.data;
//document.body.firstChild.nodevalue;
//console.log(document.body.textContent);
//$0.hidden=false

//lec 42 html attributes and thier methods
//let a = first.getAttribute("class");
//console.log(a);
//console.log(first.hasAttribute("class"));
//console.log(first.hasAttribute("style"));
//first.setattribute("hidden","true")
//first.setAttribute("class", "true sachin");
//first.removeAttribute("class");
//console.log(first.Attributes);

//lec 43 HTML insertion methods
//let a = document.getElementsByTagName("div")[0];
//a.innerHTML = a.innerHTML + "<h1>hello world!</h1>";

//or we can use this instead of innerhtml another method

/*let div = document.createElement("div");
div.innerHTML = "<h1>hello world!</h1>";
a.appendChild(div);*/

//a.append(div);
//a.prepend(div);
//a.before(div);
//a.after(div);
//a.replaceWith(div);

//lec 44 insertAdjacentHTML, insertAdjacentElement and insertAdjacentText

//first.insertAdjacentHTML("beforebegin", '<div class ="test">beforebegin</div>');
//first.insertAdjacentHTML("beforeend", '<div class ="test">beforeend</div>');
//first.insertAdjacentHTML("afterbegin", '<div class ="test">afterbegin</div>');
//first.insertAdjacentHTML("afterend", '<div class ="test">afterend</div>');

//lec 45 Changing HTML Classes using JavaScript: className and classList

/*first.class = "text-black red";
first.classList.add("red");
first.classList.remove("red");
first.classList.contains("red");
first.classList.toggle("red");
*/

//lec 46 setInterval and setTimeout in JavaScript | JavaScript Tutorial in Hindi

//alert("hello");
/*document.write("Hello");

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c));
  a + b;
};*/
//setInterval(function () {
// alert("setinterval");
//}, 3000);

//setTimeout(sum, 1000, 1, 2, 7);

/*let a = setTimeout(function () {
  alert("I am inside of settimeout");
}, 5000);
let b = prompt("Do you want to run the settimout?");
if ("n" == b) {
  clearTimeout(a);
}
//clearTimeout(a);
console.log(a);*/

// lec 47 Introduction to Browser Events
/*let a = document.getElementsByClassName("container")[0];
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "Hello World!";
};*/

// lec 48 Handling Browser Events
btn.addEventListener("click", function (e) {
  alert("hello world1");
});
btn.addEventListener("click", function (e) {
  alert("hello sarjanas!");
});

let a = prompt("What is your favorite number?");
if (a == "2") {
  btn.removeEventListener("click", x);
}

//
let button = document.getElementById("btn");
let div = document.getElementById("div");
let input = document.getElementById("input");
button.addEventListener("click", function () {
  div.innerHTML = input.value;
});
