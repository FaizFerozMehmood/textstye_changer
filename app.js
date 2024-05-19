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




})

html_capitalize.addEventListener('click', function () {
    para.style.textTransform = "capitalize"


})

html_italic.addEventListener('click', function () {
    para.style.fontStyle = "italic"


})

html_color.addEventListener('click', function () {
    para.style.color = "red"


})