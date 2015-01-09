/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".wimp").css("background-color", "green");
    $('#tremble').bind('click', keyIsClicked);
    $('p:first').css("background-color", "olive");
    $('#hi').bind('click', change);
});
$("document").ready(function() {
    $(".container").css("border", "0");
    $(".row").css("border", "0");
    $(".col-xs-2").css("border", "0");
    $(".col-xs-10").css("border", "0");
});

function keyIsClicked() {
alert('your cursor clicked my header *gasp*');
}
function change(){
    $('#hi').html('so you have found my secret sentence impresive ');
}