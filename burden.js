$(document).ready(function() {
    var total = 0;
    var a0 = 0,
        a1 = 0,
        a2 = 0,
        a3 = 0,
        a4 = 0,
        a5 = 0;
    $(document).on('click', 'input[name="score0"]', function() {
        var num = $('input[name="score0"]:checked').val();
        if (num != '0') {
            a0 = parseInt(num);
        } else {
            a0 = 0;
        }
        total = a0 + a1 + a2 + a3 + a4 + a5;
        $('input[name="totalScore"]').val(total);
    });
    $(document).on('click', 'input[name="score1"]', function() {
        var num = $('input[name="score1"]:checked').val();
        if (num != '0') {
            a1 = parseInt(num);
        } else {
            a1 = 0;
        }
        total = a0 + a1 + a2 + a3 + a4 + a5;
        $('input[name="totalScore"]').val(total);
    });
    $(document).on('click', 'input[name="score2"]', function() {
        var num = $('input[name="score2"]:checked').val();
        if (num != '0') {
            a2 = parseInt(num);
        } else {
            a2 = 0;
        }
        total = a0 + a1 + a2 + a3 + a4 + a5;
        $('input[name="totalScore"]').val(total);
    });
    $(document).on('click', 'input[name="score3"]', function() {
        var num = $('input[name="score3"]:checked').val();
        if (num != '0') {
            a3 = parseInt(num);
        } else {
            a3 = 0;
        }
        total = a0 + a1 + a2 + a3 + a4 + a5;
        $('input[name="totalScore"]').val(total);
    });
    $(document).on('click', 'input[name="score4"]', function() {
        var num = $('input[name="score4"]:checked').val();
        if (num != '0') {
            a4 = parseInt(num);
        } else {
            a4 = 0;
        }
        total = a0 + a1 + a2 + a3 + a4 + a5;
        $('input[name="totalScore"]').val(total);
    });
    $(document).on('click', 'input[name="score5"]', function() {
        var num = $('input[name="score5"]:checked').val();
        if (num != '0') {
            a5 = parseInt(num);
        } else {
            a5 = 0;
        }
        total = a0 + a1 + a2 + a3 + a4 + a5;
        $('input[name="totalScore"]').val(total);
    });
});