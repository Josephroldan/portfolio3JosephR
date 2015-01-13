/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".wimp").css("background-color", "green");
    $('#button').bind('click',newButton);
    $('#tremble').bind('click', keyIsClicked);
    $('#tremble').bind('mouseover', hi).bind('mouseout', bye);
    $('p:first').css("background-color", "olive");
    $('#hi').bind('click', change);
    $('#p').bind('click', changeTwo).bind('mouseover', color).bind('mouseout', noColor);
    $('#hide').bind('click', hideImg);
});
$("document").ready(function() {
    $(".container").css("border", "0");
    $(".row").css("border", "0");
    $(".col-xs-3").css("border", "0");
    $(".col-xs-9").css("border", "0");
});

function keyIsClicked() {
    alert('your cursor clicked my header *gasp*');
}
function change() {
    $('#hi').html('so you have found my secret sentence impresive ');
}
function hi() {
    $('#tremble').html('hi there');
}
function bye() {
    $('#tremble').html('hey where did you go come back.');
}
function changeTwo() {
    $('#p').html('<h1>Hi my name is joseph welcome to my third portfolio web page. over the course of this year(p.s. now im in h1)</h1>');

    $('#p').bind('click', lala);
}
function lala() {
    $('#p').text('<h1>Hi my name is joseph welcome to my third portfolio web page. over the course of this year(p.s. now im in text)</h1>');
}
/*
 * 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
 * uses jQuery fo background color changes on p tag
 * 10101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010
 */
function color() {
    $('#p').css('background-color', "blue");
}
function noColor() {
    $('#p').css("background-color", "white");
}
//oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
function hideImg() {
    $('#hide').hide('puff', {}, 2500);
}
function newButton(){
  $('#button').append('<p>hi</p>');  
}