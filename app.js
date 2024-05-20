var html_underline = document.getElementById('underline')
var html_capitalize = document.getElementById('capitalize')
var html_italic = document.getElementById('italic')
var html_bold = document.getElementById('bold')


var html_color = document.getElementById('color')

var para = document.getElementById('para');



html_underline.addEventListener('click', function () {

    para.style.textDecoration = "underline"
})

html_bold.addEventListener('click', function () {
    para.style.fontWeight = "bold";
    para.style.textDecoration = "none"




})

html_capitalize.addEventListener('click', function () {
    para.style.textTransform = "capitalize"
    para.style.textDecoration = "none"



})

html_italic.addEventListener('click', function () {
    para.style.fontStyle = "italic"
    para.style.textDecoration = "none"



})

html_color.addEventListener('click', function () {
    para.style.color = "red"
    para.style.textDecoration = "none"



})

// console.log(1> 2 > 3); //false 
// console.log(3> 2 > 1); //false
// console.log(3 < 2 < 1);//true
// var heading = document.getElementById("heading")
// var arr = ['umair ', "habib"]
// var res = 0;
// var btn = document.getElementById("btn")
// btn.addEventListener("click", function () {
//     heading.innerText = (arr[res++]);

// }) 