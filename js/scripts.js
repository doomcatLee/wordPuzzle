$(function(){
  $("#input").submit(function(){
    var userInput = $("#input1").val();
    event.preventDefault();

    var vowels = ["a", "e", "i", "o", "u"]
    //userInput string turns into array
    var letterArray = userInput.split("")


    vowels.forEach(function(vowel){
      letterArray.forEach(function(letter){
        if (vowel === letter){
          var index = letterArray.indexOf(letter)
          letterArray.splice(index,1, "-");
        }else{
          console.log("Do nothing");
        }
      });
    });

    //turn back into a string
    var outputString = letterArray.join("");
    $("#output").text(outputString);
  });//SubmitForm
});//jQuery
