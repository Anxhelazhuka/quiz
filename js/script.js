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

function q1Result(x){
     if (x === "Read"){
      return 1;
  }else if (x==="Play"){
      return 2;
  }else if (x=== "Sing"){
      return 3;
  }else{
      return 4;
}
}
function q2Result(y){
     if (y === "Coffee"){
      return 1;
  }else if (y==="Pancakes"){
      return 2;
  }else{
      return 3;
}
}
function q3Result(z){
     if (z === "Dog"){
      return 1;
  }else{
      return 2;
}
}
function totalScore(x,y,z){
    $(".result").return (x+y+z);
}
function inputJob(name,techPlacement){
   $(".result").html("Congradulations" + "," + " " + name + " " + "your dream job is" + " " +techPlacement+ "."); 
}


