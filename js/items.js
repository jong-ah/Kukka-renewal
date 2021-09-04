$(document).ready(function(){
	
 //썸네일 마우스오버 - 썸네일 확대
 $(".con_item .etc_item").mouseover(function(){
  $(".con_item .etc_item .thumnail").removeClass("active");
  $(this).find(".thumnail").addClass("active");
 }).mouseout(function(){
  $(this).find(".thumnail").removeClass("active");
 });

	
});//end