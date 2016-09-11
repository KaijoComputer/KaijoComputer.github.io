//このページのはじめに戻る
jQuery(function(){
$('a[href*=#]').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {
var $target = $(this.hash);
$target = $target.length && $target
|| $('[name=' + this.hash.slice(1) +']');
if ($target.length) {
var targetOffset = $target.offset().top;
$('html,body')
.animate({scrollTop: targetOffset}, 500);
return false;
}
}
});
});


//stripeクラスのついている子要素をシマシマクラス追加
jQuery(function () {
$(".stripe li:odd, .stripe tr:odd").addClass("odd");
});


