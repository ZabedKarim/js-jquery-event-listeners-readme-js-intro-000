function frameIt(){
  $('img').on('load', function frameIt(){
$('img').addClass('tasty')
      })
}
function getIt(){
$('p').on("click", function getIt(){
        alert ("Hey!")
})
}
function submitIt(){
  $("form").on("submit", function(){
    alert ("Your form is going to be submitted now.")
  })
}
function pressIt(){
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
    }
  })
}
$(document).ready(function(){
getIt()
frameIt()
submitIt()
pressIt()
});
