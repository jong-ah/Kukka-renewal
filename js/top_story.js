$(document).ready(function(){
    
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