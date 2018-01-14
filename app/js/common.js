$(function() {

	var $element = $('.form__range');
  var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
    }
  })
  .on('input', function() {
    updateHandle($handle[0], this.value);
  });

function updateHandle(el, val) {
	//el.textContent = "" + val + " " + "дней" + " ";
	if(val == 1 || val == 21) {
		el.textContent = val + " " + "дeнь";
	} 
	else if(val > 4 && val < 21 || val > 24) {
		el.textContent = val + " " + "дней";
	}
	else {
		el.textContent = val + " " + "дня";
	}
}

$(document).ready(function(){
  
  //when slider changes, hide start message
$("input").on("change", function() {
  $("#helper").fadeOut("slow");
});

//promo-box
$("#js-promo-box").hide();
$("#promo-link").on("click", function(){
  $("#js-promo-box").slideToggle();
  return false;
});
  
});

});
