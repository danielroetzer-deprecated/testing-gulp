/*


 */


//Speed of the show/hide animations
var fadein=700;
var fadeout=0;
var bgcolor;


//Set the color for the different library colors
$( ".library-red").hover(function() {
    bgcolor = "#ff3535";
});

$( ".library" ).hover(function() {
    bgcolor = "#5a5a5a";
});
$( ".library-black" ).hover(function() {
    bgcolor = "#393434";
});
$( ".library-blue" ).hover(function() {
    bgcolor = "#2f6be3";
});
$( ".library-purple" ).hover(function() {
    bgcolor = "#c02fe5";
});
$( ".library-green" ).hover(function() {
    bgcolor = "#3dbd5a";
});



//Sets the styling for inactive elements
function outColor(element){
    $( element ).css( "background-color", "transparent" );
    $( element ).css( "color", "#E7E7E7" );

}
//Sets the styling for active elements
function inColor(element){
    $( element ).css( "background-color", bgcolor );
    $( element ).css( "color", "white" );
}




//Show Lib1
$("#lib-nav1").click(function(){
    $("#lib1").fadeIn(fadein,inColor('#lib-nav1'));
    $("#lib2").fadeOut(fadeout,outColor('#lib-nav2'));
    $("#lib3").fadeOut(fadeout,outColor('#lib-nav3'));

    $("#lib-active1").show();
    $("#lib-active2").hide();
    $("#lib-active3").hide();
});

//Show Lib2
$("#lib-nav2").click(function(){
    $("#lib1").fadeOut(fadeout,outColor('#lib-nav1'));
    $("#lib2").fadeIn(fadein,inColor('#lib-nav2'));
    $("#lib3").fadeOut(fadeout,outColor('#lib-nav3'));

    $("#lib-active1").hide();
    $("#lib-active2").show();
    $("#lib-active3").hide();
});

//Show Lib3
$("#lib-nav3").click(function(){
    $("#lib1").fadeOut(fadeout,outColor('#lib-nav1'));
    $("#lib2").fadeOut(fadeout,outColor('#lib-nav2'));
    $("#lib3").fadeIn(fadein,inColor('#lib-nav3'));

    $("#lib-active1").hide();
    $("#lib-active2").hide();
    $("#lib-active3").show();
});