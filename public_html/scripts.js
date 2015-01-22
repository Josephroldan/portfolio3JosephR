/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $('#button').bind('click', newButton);
    $('#buttoon').bind('click', oldButton);
    $('#tremble').bind('click', keyIsClicked);
    //displays message when header is clicked 
    $('#tremble').bind('mouseover', hi).bind('mouseout', bye);
    //lets header display secret message
    $('#hi').bind('click', change);
   // binds color changer
    $('#p').bind('click', changeTwo).bind('mouseover', color).bind('mouseout', noColor);
   //uses background image
    $("body").css("background-image", "url(http://24.media.tumblr.com/af38ff89188ad18c10afadf2b2c7824d/tumblr_mzvjht9eay1s2wio8o5_500.gif)");
    $("body").css("background-image", "cover");
    $("img:nth-child(1)").css("height", "32px");
    //alters height of image
    $("img:nth-child(2)").css("height", "32px");
});
$("document").ready(function() {
    // masks borders of div tags
    $(".container").css("border", "0");
    $(".row").css("border", "0");
    $(".col-xs-3").css("border", "0");
    $(".col-xs-9").css("border", "0");
    $("body").css("background-image", "url(http://www.jail.se/hardware/digital_camera/canon/ixus_800is-powershot_sd700/images/sample_photos/sample1.jpg)");
});
//generates accordion with jquery
$("document").ready(function() {
    $('#nice').accordion({header: "h4"});
});
//function generates alert for when header is clicked
function keyIsClicked() {
    alert('your cursor clicked my header *gasp*');
}
//creates secret messege
function change() {
    $('#hi').html('so you have found my secret sentence impresive ');
    $('#hi').bind('click', hideImg);
}
//when mouse hovers over header displays messege
function hi() {
    $('#tremble').html('hi there');
}
//changes header to display other message
function bye() {
    $('#tremble').html('hey where did you go come back.');
}
//function to change paragraph to <h1>
function changeTwo() {
    $('#p').html('<h1>Hi my name is joseph welcome to my third portfolio web page. over the course of this year(p.s. now im in h1)</h1>');

    $('#p').bind('click', lala);
}
//reverts paragraph back to text
function lala() {
    $('#p').text('<h1>Hi my name is joseph welcome to my third portfolio web page. over the course of this year(p.s. now im in text)</h1>');
}
/*
 * 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
 * uses jQuery fo background color changes on p tag
 * 10101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010
 */
//changes color to blue when mouse hovers over the paragraph
function color() {
    $('#p').css('background-color', "blue");
}
//changes color back to normal after removeing mouse off of the paragraph
function noColor() {
    $('#p').css("background-color", "white");
}

//oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//adds animation for sentence
function hideImg() {
    $('#hi').hide('puff', {}, 2500);
}
//adds the add paragraph effect for the button 
function newButton() {
    $('#button').append('<p>hi</p>');
}
//function that removes the add para effect
function oldButton() {
    $('p:nth-child(3)').remove();
}