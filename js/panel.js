/*


 */

//Speed of the show/hide animations
var show=500;
var hide=800;



//Show Panel1
$("#nav1").click(function(){
    $("#panel1").show(show);
    $("#panel2").hide(hide);
    $("#panel3").hide(hide);
});

//Show Panel2
$("#nav2").click(function(){
    $("#panel1").hide(hide);
    $("#panel2").show(show);
    $("#panel3").hide(hide);
});

//Show Panel3
$("#nav3").click(function(){
    $("#panel1").hide(hide);
    $("#panel2").hide(hide);
    $("#panel3").show(show);
});