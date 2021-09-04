$(document).ready(function(){
	
 //Flower subscription 나를 위한 꽃 정기구독
 //01. 사이즈 선택 - 썸네일 선택
 $("#flower_sub .size_s").addClass("active");
 $("#flower_sub .size_item").click(function(){
  $("#flower_sub .size_item").removeClass("active");
  $(this).addClass("active");
 });
	
 //Flower bouquet 꽃이 필요한 순간, 꽃다발
 //썸네일 마우스오버 - 썸네일 확대
 $("#flower_bou .bou_item").mouseover(function(){
  $("#flower_bou .bou_item .thumnail").removeClass("active");
  $(this).find(".thumnail").addClass("active");
 }).mouseout(function(){
  $(this).find(".thumnail").removeClass("active");
 });

 //Daily flower 오늘 바로 받는 당일배송
 //썸네일 마우스오버 - 썸네일 확대
 $("#daily_flo .flo_item").mouseover(function(){
  $("#daily_flo .flo_item .thumnail").removeClass("active");
  $(this).find(".thumnail").addClass("active");
 }).mouseout(function(){
  $(this).find(".thumnail").removeClass("active");
 });

 //Flower class 꽃과 함께 하는 일상, 플라워클래스
 //썸네일 마우스오버 - 썸네일 변경
 $("#flower_cla .cla_item thumnail img:eq(1)").css("opacity","0");
 $("#flower_cla .cla_item").mouseover(function(){
  $(this).find("img:eq(1)").stop().animate({"opacity":"0"},"slow");
 }).mouseout(function(){
  $(this).find("img:eq(1)").stop().animate({"opacity":"1"},"slow");
 });
    
 //Flower class 꽃과 함께 하는 일상, 플라워클래스
 //item1 - 지점 선택
 $("#flower_cla .item1 .cla_showroom li:first").addClass("on");
 $("#flower_cla .item1 .cla_showroom li").click(function(){
  $("#flower_cla .item1 .cla_showroom li").removeClass("on");
  $(this).addClass("on");
 });
 //item2 - 지점 선택
 $("#flower_cla .item2 .cla_showroom li:first").addClass("on");
 $("#flower_cla .item2 .cla_showroom li").click(function(){
  $("#flower_cla .item2 .cla_showroom li").removeClass("on");
  $(this).addClass("on");
 });
    
 //Kukka story 꽃이 주는 행복을 누구나 누릴 수 있도록
 //story1 story2 마우스오버 - 어둡게
 $("#kukka_story .line1").mouseover(function(){
  $(this).find("img").stop().animate({"opacity":"0.5"},"slow");
 }).mouseout(function(){
  $(this).find("img").stop().animate({"opacity":"1"},"slow");
 });
 //story1 story2 마우스오버 - 어둡게
 $("#kukka_story .line2").mouseover(function(){
  $(this).find("button").stop().animate({"backgroundColor":"#2a2a2a","color":"#ffc948"},400);
 }).mouseout(function(){
  $(this).find("button").stop().animate({"backgroundColor":"#4a4a4a","color":"#ffffff"},400);
 });


 //kukka_ins 움직이기
 ins_mo1();
 function ins_mo1(){
  $(".ins_img1").css("left","0px").animate({left:"-270px"},10000,"linear",function(){
    $(this).css("left","1890px").animate({left:"1620px"},10000,"linear",function(){
     $(this).css("left","1620px").animate({left:"1350px"},10000,"linear",function(){
      $(this).css("left","1350px").animate({left:"1080px"},10000,"linear",function(){
       $(this).css("left","1080px").animate({left:"810px"},10000,"linear",function(){
       $(this).css("left","810px").animate({left:"540px"},10000,"linear",function(){
       $(this).css("left","540px").animate({left:"270px"},10000,"linear",function(){
       $(this).css("left","270px").animate({left:"0px"},10000,"linear",ins_mo1);
        });
        });
       });
      });
     });
    });
  });
 }
	
 ins_mo2();
 function ins_mo2(){
  $(".ins_img2").css("left","270px").animate({left:"0px"},10000,"linear",function(){
   $(this).css("left","0px").animate({left:"-270px"},10000,"linear",function(){
     $(this).css("left","1890px").animate({left:"1620px"},10000,"linear",function(){
      $(this).css("left","1620px").animate({left:"1350px"},10000,"linear",function(){
       $(this).css("left","1350px").animate({left:"1080px"},10000,"linear",function(){
       $(this).css("left","1080px").animate({left:"810px"},10000,"linear",function(){
       $(this).css("left","810px").animate({left:"540px"},10000,"linear",function(){
       $(this).css("left","540px").animate({left:"270px"},10000,"linear",ins_mo2);
        });
        });
       });
     });
    });
   });
  });
 }
	
 ins_mo3();
 function ins_mo3(){
  $(".ins_img3").css("left","540px").animate({left:"270px"},10000,"linear",function(){
   $(this).css("left","270px").animate({left:"0px"},10000,"linear",function(){
    $(this).css("left","0px").animate({left:"-270px"},10000,"linear",function(){
      $(this).css("left","1890px").animate({left:"1620px"},10000,"linear",function(){
       $(this).css("left","1620px").animate({left:"1350px"},10000,"linear",function(){
       $(this).css("left","1350px").animate({left:"1080px"},10000,"linear",function(){
       $(this).css("left","1080px").animate({left:"810px"},10000,"linear",function(){
       $(this).css("left","810px").animate({left:"540px"},10000,"linear",ins_mo3);
        });
        });
       });
      });
    });
   });
  });
 }
	
 ins_mo4();
 function ins_mo4(){
  $(".ins_img4").css("left","810px").animate({left:"540px"},10000,"linear",function(){
   $(this).css("left","540px").animate({left:"270px"},10000,"linear",function(){
    $(this).css("left","270px").animate({left:"0px"},10000,"linear",function(){
     $(this).css("left","0px").animate({left:"-270px"},10000,"linear",function(){
       $(this).css("left","1890px").animate({left:"1620px"},10000,"linear",function(){
       $(this).css("left","1620px").animate({left:"1350px"},10000,"linear",function(){
       $(this).css("left","1350px").animate({left:"1080px"},10000,"linear",function(){
       $(this).css("left","1080px").animate({left:"810px"},10000,"linear",ins_mo4);
        });
        });
       });
     });
    });
   });
  });
 }
	
 ins_mo5();
 function ins_mo5(){
  $(".ins_img5").css("left","1080px").animate({left:"810px"},10000,"linear",function(){
   $(this).css("left","810px").animate({left:"540px"},10000,"linear",function(){
    $(this).css("left","540px").animate({left:"270px"},10000,"linear",function(){
     $(this).css("left","270px").animate({left:"0px"},10000,"linear",function(){
      $(this).css("left","0px").animate({left:"-270px"},10000,"linear",function(){
       $(this).css("left","1890px").animate({left:"1620px"},10000,"linear",function(){
       $(this).css("left","1620px").animate({left:"1350px"},10000,"linear",function(){
       $(this).css("left","1350px").animate({left:"1080px"},10000,"linear",ins_mo5);
        });
        });
      });
     });
    });
   });
  });
 }
	
 ins_mo6();
 function ins_mo6(){
  $(".ins_img6").css("left","1350px").animate({left:"1080px"},10000,"linear",function(){
   $(this).css("left","1080px").animate({left:"810px"},10000,"linear",function(){
    $(this).css("left","810px").animate({left:"540px"},10000,"linear",function(){
     $(this).css("left","540px").animate({left:"270px"},10000,"linear",function(){
      $(this).css("left","270px").animate({left:"0px"},10000,"linear",function(){
       $(this).css("left","0px").animate({left:"-270px"},10000,"linear",function(){
       $(this).css("left","1890px").animate({left:"1620px"},10000,"linear",function(){
       $(this).css("left","1620px").animate({left:"1350px"},10000,"linear",ins_mo6);
        });
       });
      });
     });
    });
   });
  });
 }
	
 ins_mo7();
 function ins_mo7(){
  $(".ins_img7").css("left","1620px").animate({left:"1350px"},10000,"linear",function(){
   $(this).css("left","1350px").animate({left:"1080px"},10000,"linear",function(){
    $(this).css("left","1080px").animate({left:"810px"},10000,"linear",function(){
     $(this).css("left","810px").animate({left:"540px"},10000,"linear",function(){
      $(this).css("left","540px").animate({left:"270px"},10000,"linear",function(){
       $(this).css("left","270px").animate({left:"0px"},10000,"linear",function(){
       $(this).css("left","0px").animate({left:"-270px"},10000,"linear",function(){
       $(this).css("left","1890px").animate({left:"1620px"},10000,"linear",ins_mo7);
        });
       });
      });
     });
    });
   });
  });
 }
	
 ins_mo8();
 function ins_mo8(){
  $(".ins_img8").css("left","1890px").animate({left:"1620px"},10000,"linear",function(){
   $(this).css("left","1620px").animate({left:"1350px"},10000,"linear",function(){
    $(this).css("left","1350px").animate({left:"1080px"},10000,"linear",function(){
     $(this).css("left","1080px").animate({left:"810px"},10000,"linear",function(){
      $(this).css("left","810px").animate({left:"540px"},10000,"linear",function(){
       $(this).css("left","540px").animate({left:"270px"},10000,"linear",function(){
       $(this).css("left","270px").animate({left:"0px"},10000,"linear",function(){
       $(this).css("left","0px").animate({left:"-270px"},10000,"linear",ins_mo8);
        });
        });
       });
      });
     });
    });
   });
 }
	
});//end