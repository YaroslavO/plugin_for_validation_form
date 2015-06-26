/**
 * Created by employee on 6/24/15.
 */
(function ($) {
    $.fn.smartValidator = function (options) {
        var ACCEPTABLE = $.extend({
            "selector": "input",
            "event": "keyup",
            "rxp_mail": ""
        }, options);

        $(this).each(function () {
            SV($(this), ACCEPTABLE);
        });
    };

    function SV (FORM, options) {
        var submit = FORM.find("[type=submit]"); //place for code
        var valid = false;

        FORM.on('submit', function () {
            if (!valid) {
                submit.addClass("error");
                //return false;
            }
            return valid;
        });

        var allInputs = FORM.find("input");

        allInputs.on("keyup", function() {
            var input = $(this);

            if (input.attr('required')) {
               if (input.val() === '') {
                   valid &= false;
                   input.addClass("error");
               } else {
                   valid = true;
                   input.removeClass("error");
               }
            }

            if (input.is("[type=email]")) {
                var value = input.val();
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if(!pattern.test(value)) {
                    valid &= false;
                    input.addClass("error");
                }else {
                    valid = true;
                    input.removeClass("error");
                }
            }
        })
    }
}(jQuery));

