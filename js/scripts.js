var originalSentence, splitSentence, newSentence;
var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
  var calculate = function()  {
    for (var index = 0; index < splitSentence.length; index++)  {

      if (vowels.indexOf(splitSentence[index]) > -1) {
        splitSentence[index] = '-';
      }
    }
    newSentence = splitSentence.join("");
  }




$(document).ready(function()  {
  $("#reset").click(function() {
    $(".form-group").show();
    $(".output-div").hide();
    $("button#submit").show();
    $("button#reset").hide();

  });
  $("#submit").click(function() {
    originalSentence = $("#sentence").val();
    splitSentence = originalSentence.split("");
    calculate();
    $("p#newSentence").text(newSentence);
    $(".form-group").hide();
    $(".output-div").show();
    $("button#submit").hide();
    $("button#reset").show();
    });
});
