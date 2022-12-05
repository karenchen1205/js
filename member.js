$(document).ready(function() {
    var n = 0;

    $(document).on('click', "[name=mainChoose]", function() {
        if (n == 0) {

            n += 1;
            $("input[name='choose']").each(function() {
                this.checked = true;
            });
        } else {

            n -= 1;
            $("input[name='choose']").each(function() {
                this.checked = false;
            });
        }

    });













});