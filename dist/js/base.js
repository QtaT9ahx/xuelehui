var Page={init:function(){console.log("year!"),Page.controlEvents(),Page.selectEvents(),Page.amountEvents()},controlEvents:function(){var a=function(a){a.preventDefault(),$(this).addClass("cur").siblings("a").removeClass("cur")};$(".m-control").on("click","a",a)},fakeSelect:function(a,b){var c=this;c.resultItem=$(a).children("p")||b.resultItem,c.realSelect=$(a).find("select")||b.realSelect,c.callback="null";var d=function(){c.realSelect.focus()},e=function(){var a=c.realSelect[0],b=a.options[a.selectedIndex].text;c.resultItem.html(b)};c.resultItem.on("click",d),c.realSelect.on("change",e)},customNumber:function(a,b){var c=this;c.reduceButton=$(a).children(".reduce")||b.reduceButton,c.increaseButton=$(a).children(".increase")||b.increaseButton,c.numberInput=$(a).children("input")||b.numberInput,c.maxNumber=$(a).data("max-number")||b.maxNumber,c.callback="null";var d=function(a){a.preventDefault();var b=parseFloat(c.numberInput.val(),10);b>1&&c.numberInput.val(b-1)},e=function(a){a.preventDefault();var b=parseFloat(c.numberInput.val(),10);b+1<=c.maxNumber&&c.numberInput.val(b+1)};c.reduceButton.on("click",d),c.increaseButton.on("click",e)},selectEvents:function(){Page.fakeSelect(".m-select")},amountEvents:function(){Page.customNumber(".m-amount")}};$(document).ready(function(){Page.init()});