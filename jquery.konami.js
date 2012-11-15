/*! jquery.konami v0.1.0 */
;(function (window, document, $) {
  
    var key = {
            UP : 38,
            DOWN : 40,
            LEFT : 37,
            RIGHT : 39,
            B : 66,
            A : 65
        }
        , code = [
            key.UP,
            key.UP,
            key.DOWN,
            key.DOWN,
            key.LEFT,
            key.RIGHT,
            key.LEFT,
            key.RIGHT,
            key.B,
            key.A
        ]
        , current_key = 0
        , PAUSE_RESET = 500
        , isMatch = false
        , timer;
  
    function resetCode() {
        isMatch = false;
        current_key = 0;
    }
  
    function trackKeyPattern(e) {
        isMatch = (current_key < code.length && e.which === code[current_key]);

        if(isMatch) {
            clearTimeout(timer);
            current_key++;

            if (current_key === code.length) {
              $.event.trigger('konami');
              clearTimeout(timer);
            }
            
            timer = setTimeout(function () {
              resetCode();
            }, PAUSE_RESET);
            
        } else {
            clearTimeout(timer);
            resetCode();
        }
    }

    $.konami = function (options) {
        $(window).on('keydown', trackKeyPattern);
        return this;
    };
  
  
})(this, document, jQuery);