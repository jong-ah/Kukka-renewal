$(document).ready(function(){
	
 //썸네일 마우스오버 - 썸네일 확대
 $(".con_item .bou_item").mouseover(function(){
  $(".con_item .bou_item .thumnail").removeClass("active");
  $(this).find(".thumnail").addClass("active");
 }).mouseout(function(){
  $(this).find(".thumnail").removeClass("active");
 });

	
});//end