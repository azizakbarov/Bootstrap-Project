$(function() {
    $("#bookClass").click(function(){
        $("#bookClassModal").modal("show");
    });

    $("#signInButton").click(function(){
        $("#SignInModal").modal("show");
    });

    $("#signUpId").click(function(){
        $("#signUpModal").modal("show");
    });
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  