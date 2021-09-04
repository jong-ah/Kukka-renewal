$(document).ready(function(){
    
 //main_banner bxslider
  var slider3=$(".bxslider_03").bxSlider({ //4
   auto:true, mode:'horizontal', pager:false, speed:2000, pause:6000, controls:true
  });
	
  $(document).on('click','.bx_prev, .bx_next',function(){
   slider3.stopAuto();
   slider3.startAuto();
  });
  $(document).on('mouseover',function(){
   slider3.stopAuto();
   slider3.startAuto();
  });
	
 $(".btn_left").on('click',function(){
  mySlider.goToPrevSlide(); //이전 슬라이드 배너로 이동
  return false; //a링크 차단
 });
	
 $(".btn_right").on('click',function(){
  mySlider.goToNextSlide(); //다음 슬라이드 배너로 이동
  return false; //a링크 차단
 });
      
 //.bx-prev, .bx-next 마우스오버
 $(".bx-wrapper .bx-prev, .bx-wrapper .bx-next").hide();//초깃값
 $("#main_banner").hover(function(){
  $(".bx-wrapper .bx-prev, .bx-wrapper .bx-next").show();  
 },function(){
  $(".bx-wrapper .bx-prev, .bx-wrapper .bx-next").hide();
 });
	
 //main_banner_txt
 //마우스오버 밑줄
  var li1=$(".b_txt1 li:eq(3) span:first:not(:animated)");
  var li2=$(".b_txt1 li:eq(3) span:last:not(:animated)");
  var li3=$(".b_txt2 li:eq(3) span:first:not(:animated)");
  var li4=$(".b_txt2 li:eq(3) span:last:not(:animated)");
  var li5=$(".b_txt3 li:eq(3) span:first:not(:animated)");
  var li6=$(".b_txt3 li:eq(3) span:last:not(:animated)");
    
 $("#main_banner_inner ul.b_txt1").hover(function(){
  li1.animate({width:"295px"},"fast");
  li2.animate({width:"410px"},"fast");
 },function(){
  li1.animate({width:"0px"},"fast");
  li2.animate({width:"0px"},"fast");
 });
    
 $("#main_banner_inner ul.b_txt2").hover(function(){
  li3.animate({width:"185px"},"fast");
  li4.animate({width:"470px"},"fast");
 },function(){
  li3.animate({width:"0px"},"fast");
  li4.animate({width:"0px"},"fast");
 });
    
 $("#main_banner_inner ul.b_txt3").hover(function(){
  li5.animate({width:"190px"},"fast");
  li6.animate({width:"465px"},"fast");
 },function(){
  li5.animate({width:"0px"},"fast");
  li6.animate({width:"0px"},"fast");
 });
    
//ban_txt 페이지이동
 $(".ban_txt1").click(function(){
  window.open("index.html","_self");
 });

 //main_banner_btn
 $(".main_banner_btn img").hide();
 $("#main_banner").hover(function(){
  $(".main_banner_btn img").show();  
 },function(){
  $(".main_banner_btn img").hide();
 });

 //kukka_txt
 //왼쪽으로 애니메이션
 ku_txt1();
 function ku_txt1(){
  $("#top_container .ku_t1").css("left","20px").animate({left:"-360px"},10000,"linear",function(){
   $(this).css("left","1920px").animate({left:"1540px"},10000,"linear",function(){
    $(this).css("left","1540px").animate({left:"1160px"},10000,"linear",function(){
     $(this).css("left","1160px").animate({left:"780px"},10000,"linear",function(){
      $(this).css("left","780px").animate({left:"400px"},10000,"linear",function(){
       $(this).css("left","400px").animate({left:"20px"},10000,"linear",ku_txt1);
      });
     });
    });
   });
  });
 }

 ku_txt2();
 function ku_txt2(){
  $("#top_container .ku_t2").css("left","400px").animate({left:"20px"},10000,"linear",function(){
   $(this).css("left","20px").animate({left:"-360px"},10000,"linear",function(){
    $(this).css("left","1920px").animate({left:"1540px"},10000,"linear",function(){
     $(this).css("left","1540px").animate({left:"1160px"},10000,"linear",function(){
      $(this).css("left","1160px").animate({left:"780px"},10000,"linear",function(){
       $(this).css("left","780px").animate({left:"400px"},10000,"linear",ku_txt2);
      });
     });
    });
   });
  });
 }

 ku_txt3();
 function ku_txt3(){
  $("#top_container .ku_t3").css("left","780px").animate({left:"400px"},10000,"linear",function(){
   $(this).css("left","400px").animate({left:"20px"},10000,"linear",function(){
    $(this).css("left","20px").animate({left:"-360px"},10000,"linear",function(){
     $(this).css("left","1920px").animate({left:"1540px"},10000,"linear",function(){
      $(this).css("left","1540px").animate({left:"1160px"},10000,"linear",function(){
       $(this).css("left","1160px").animate({left:"780px"},10000,"linear",ku_txt3);
      });
     });
    });
   });
  });
 }

 ku_txt4();
 function ku_txt4(){
  $("#top_container .ku_t4").css("left","1160px").animate({left:"780px"},10000,"linear",function(){
   $(this).css("left","780px").animate({left:"400px"},10000,"linear",function(){
    $(this).css("left","400px").animate({left:"20px"},10000,"linear",function(){
     $(this).css("left","20px").animate({left:"-360px"},10000,"linear",function(){
      $(this).css("left","1920px").animate({left:"1540px"},10000,"linear",function(){
       $(this).css("left","1540px").animate({left:"1160px"},10000,"linear",ku_txt4);
      });
     });
    });
   });
  });
 }

 ku_txt5();
 function ku_txt5(){
  $("#top_container .ku_t5").css("left","1540px").animate({left:"1160px"},10000,"linear",function(){
   $(this).css("left","1160px").animate({left:"780px"},10000,"linear",function(){
    $(this).css("left","780px").animate({left:"400px"},10000,"linear",function(){
     $(this).css("left","400px").animate({left:"20px"},10000,"linear",function(){
      $(this).css("left","20px").animate({left:"-360px"},10000,"linear",function(){
       $(this).css("left","1920px").animate({left:"1540px"},10000,"linear",ku_txt5);
      });
     });
    });
   });
  });
 }

 ku_txt6();
 function ku_txt6(){
  $("#top_container .ku_t6").css("left","1920px").animate({left:"1540px"},10000,"linear",function(){
   $(this).css("left","1540px").animate({left:"1160px"},10000,"linear",function(){
    $(this).css("left","1160px").animate({left:"780px"},10000,"linear",function(){
     $(this).css("left","780px").animate({left:"400px"},10000,"linear",function(){
      $(this).css("left","400px").animate({left:"20px"},10000,"linear",function(){
       $(this).css("left","20px").animate({left:"-360px"},10000,"linear",ku_txt6);
      });
     });
    });
   });
  });
 }

 //scrollTop ㅅ
 

    
});//end