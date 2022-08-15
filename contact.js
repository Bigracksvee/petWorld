$(function() {
    
// focus inside form control every time to focus you get 'test' output in the inspect tool
$(".form-control").on('focus', function(){
  
    // inside form control select parent element at a class ex: div class 
$(this).parents(".form-group").addClass('focused');

$(".form-control").on('blur', function(){

$(this).parents(".form-group").removeClass('focused');

})

});

});