/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        inputJob(name,techPlacement); 
    });
});


function inputJob(name,techPlacement){
   $(".result").html("Congradulations" + "," + " " + name + " " + "your dream job is" + " " +techPlacement+ "."); 
}


