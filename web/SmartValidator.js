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

        submit.on("click", function() {
            alert("you click on submit button");
        });

        var allInputs = FORM.find("input");

        allInputs.on("keyup", function() {
            var mail = $(this);

            if (mail.attr('required')) {
               if (mail.val() === '') {
                   mail.addClass("colorError");
               } else {
                   mail.removeClass("colorError");
               }
            }
        })
    }
}(jQuery));

