$(document).ready(function(){
    $("form").submit(placeOrder);
});
$(document).on('click','#changeColor',function(){
    var $radio = $(this).closest('form').find('input[type="radio"]:checked');
    $('label').css('color','green');
    $radio.closest('label') .css('color','green');
});

function placeOrder(event) {
    // prevent form from flashing
    event.preventDefault();

    $("span#ranks").text();

    let message = $("input[name=ranks]:checked").data("ranks");
    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();


    $("span#ranks").text("Hello, " + message + " " + firstName + " " + lastName);


}
