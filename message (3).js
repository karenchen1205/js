$(document).ready(function() {
    $('#msg').hide();
    $("input:submit").on('click', function() {
        $('#msg').html('歡迎註冊');
        $('#msg').fadeIn(1000);
        $('#msg').fadeOut(1000);
        return false;
    })
});