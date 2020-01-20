(function(win, doc){
    // 'use strict';

    function dom(elements){
        if(!(this instanceof dom))
            return new dom(elements);

        this.element = doc.querySelectorAll(elements);
         if (this.element.length === 1)
            return this.element[0];

        this.on = function on(elements, event, func){
            Array.prototype.forEach.call(elements,function(element){
                element.addEventListener(event, func, false);
            });
        };
        this.off = function off(elements, event, func){
            Array.prototype.forEach.call(elements,function(element){
                element.removeEventListener(event, func, false);
            });
        }

        this.isNull = function isNull(value){
            if (value === undefined || value === null){
                return true;
            }
            return false;
        }
    }
    dom.prototype.get = function get(index){
        if(!index)
            return this.element[0];
        return this.element[index];
    }
    win.DOM = dom;
})(window, document);