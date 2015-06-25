/**
 * Created by employee on 6/24/15.
 */


(function($){
    var
        FORM, //Глобальный (для плагина) объект формы, на которую он натравлен
    ACCEPTABLE;

    $.fn.smartValidator = function() {
        ACCEPTABLE=$.extend({	"subselector":"*",
            "classValid":"ACCEPTABLE",
            "classInvalid":"UNACCEPTABLE",
            "classRequired":"REQUIRED",
            "classNorequired":"NOREQUIRED",
            "classEnabled":"ENABLED",
            "classDisabled":"DISABLED",
            "classVisible":"VISIBLE",
            "classHidden":"HIDDEN",
            "classChanged":"CHANGED",
            "classUnchanged":"UNCHANGED",
            "action":"input",
            "actions":{},
            "onAction":false,
            "allowInvalidSubmit":true,
            "useRequiredAttr":true,
            "nativeEnabled":true,
            "nativeVisible":true,
            "autograb":true,
            "ignore_autograb_change":true,//Игнорировать смену состояний Changed/Unchanged при autograb=true
            "ignore_autograb_action":false//Игнорировать вызов события onAction при autograb=true
        });

        FORM = this;

        var inputs, input;

        inputs = FORM.find(ACCEPTABLE.subselector);

        inputs.each(function() {
                input = $(this);

                alert("hi there")
            }
        );
        // complete this code

        FORM.on('submit',function(){
            if (!FORM.isNotRequired()) return (false);
            if (FORM.isValid()) return (true);
            return (ACCEPTABLE.allowInvalidSubmit===true);
        });

        jQuery.fn.isValid = function(){
            return (this.find("."+ACCEPTABLE.classInvalid).length===0);
        };

        jQuery.fn.isNotRequired = function(){
            return (this.find("."+ACCEPTABLE.classRequired).length===0);
        };
    };

}(jQuery));