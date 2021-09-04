$(document).ready(function(){
	
 //hobby_cla item1 - 지점 선택
 $("#hobby_cla .item1 .cla_showroom li:first").addClass("on");
 $("#hobby_cla .item1 .cla_showroom li").click(function(){
  $("#hobby_cla .item1 .cla_showroom li").removeClass("on");
  $(this).addClass("on");
 });
    
 //florist_cla item1 - 지점 선택
 $("#florist_cla .item1 .cla_showroom li:first").addClass("on");
 $("#florist_cla .item1 .cla_showroom li").click(function(){
  $("#florist_cla .item1 .cla_showroom li").removeClass("on");
  $(this).addClass("on");
 });
 //florist_cla item2 - 지점 선택
 $("#florist_cla .item2 .cla_showroom li:first").addClass("on");
 $("#florist_cla .item2 .cla_showroom li").click(function(){
  $("#florist_cla .item2 .cla_showroom li").removeClass("on");
  $(this).addClass("on");
 });
 //florist_cla item3 - 지점 선택
 $("#florist_cla .item3 .cla_showroom li:first").addClass("on");
 $("#florist_cla .item3 .cla_showroom li").click(function(){
  $("#florist_cla .item3 .cla_showroom li").removeClass("on");
  $(this).addClass("on");
 });
    
 //oneday_cla item1 - 지점 선택
 $("#oneday_cla .item1 .cla_showroom li:first").addClass("on");
 $("#oneday_cla .item1 .cla_showroom li").click(function(){
  $("#oneday_cla .item1 .cla_showroom li").removeClass("on");
  $(this).addClass("on");
 });
	
});//end