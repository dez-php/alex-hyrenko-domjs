(function (domjs) {
    'use strict';

    domjs.extend({
        value: function (value, index) {
            return this.val(value, index);
        },

        size: function () {
            return this.length;
        },

        native: function (index) {
            return domjs.isElement(this[index]) ? this[index] : null;
        },

        disable: function () {
            return this.each(function (element) {
                element.disabled = true;
            });
        },

        enable: function () {
            return this.each(function (element) {
                element.disabled = false;
            });
        },

        lock: function () {
            return this.find('input, button, select, textarea').disable();
        },

        unlock: function () {
            return this.find('input, button, select, textarea').enable();
        }
    });

})(app.DOM);