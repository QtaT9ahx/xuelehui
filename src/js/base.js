
var Page = {
    init: function () {
        console.log('year!');
        Page.controlEvents();
        Page.amountEvents();
    },
    controlEvents: function () {
        var toggleBtn = function (e) {
            e.preventDefault();
            $(this).addClass('cur').siblings('a').removeClass('cur');
        };
        $('.m-control').on('click', 'a', toggleBtn);
    },
    fakeSelect: function (selector, context) {
        var _self = this;
        _self.resultItem = $(selector).children('p') || context.resultItem;
        _self.realSelect = $(selector).find('select') || context.realSelect;
        _self.callback = 'null' || context.callback;
        var openSelect = function () {
            _self.realSelect.focus();
        };
        var renderItem = function () {
            var sel = _self.realSelect[0];
            var text = sel.options[sel.selectedIndex].text;
            _self.resultItem.html(text);
        }
        _self.resultItem.on('click', openSelect);
        _self.realSelect.on('change', renderItem);
    },
    customNumber: function (selector, context) {
        if ( $(selector).size() < 1 ) {
            return;
        }
        var _self = this;
        _self.reduceButton = $(selector).children('.reduce') || context.reduceButton;
        _self.increaseButton = $(selector).children('.increase') || context.increaseButton;
        _self.numberInput = $(selector).children('input') || context.numberInput;
        _self.maxNumber = $(selector).data('max-number') || context.maxNumber;
        _self.callback = 'null' || context.callback;
        var reduceNumber = function (e) {
            e.preventDefault();
            var currentNumber = parseFloat(_self.numberInput.val(), 10);
            if ( currentNumber > 1 ) {
                _self.numberInput.val( currentNumber-1 );
            }
        };
        var increaseNumber = function (e) {
            e.preventDefault();
            var currentNumber = parseFloat(_self.numberInput.val(), 10);
            if ( currentNumber + 1 <= _self.maxNumber ) {
                _self.numberInput.val( currentNumber+1 );
            }
        };
        _self.reduceButton.on('click', reduceNumber);
        _self.increaseButton.on('click', increaseNumber);

    },
    selectEvents: function () {
        Page.fakeSelect('.m-select');
    },
    amountEvents: function () {
        Page.customNumber('.m-amount');
    }
};

$(document).ready(function() {
    FastClick.attach(document.body);
    Page.init();
});