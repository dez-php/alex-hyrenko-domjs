(function (domjs) {
    'use strict';

    domjs.extend({
        value: function (value) {
            return this.val(value);
        },

        native: function (index) {
            return domjs.isElement(this[index]) ? this[index] : null;
        },

        disable: function () {
            return this.each(function (element) {
                element.disabled = true;
            });
        },

        lock: function () {
            return this.on('submit', function () {
                domjs(this).find('input, button').disable();
            });
        }
    });

})(app.DOM);