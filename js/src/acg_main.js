// acg_main.js
(function($) {
  var menu   = $('.menu_icon');
  var panel  = $('#panel');
  var back_b = $('.back_b');
  var cancel = $('.cancel');


  // max640
  // min641 max999
  // min1000
  var rwd = function(){
    var rwdW = parseInt($(window).width());
    var mob = 640;
    var tab = 1000;

    if(rwdW <= mob){
      // 모바일
      // 패널 보이기, 없애기
      menu.on('click',function(e){
        panel.slideDown();
        back_b.fadeIn();
        cancel.fadeIn();
      });
      cancel.on('click',function(e){
        panel.slideUp();
        back_b.fadeOut();
        cancel.fadeOut();
      });
    }else if(mob < rwdW && rwdW < tab){
      // 타블렛
    }else{
      // 피씨
    }
  };
rwd();

// parseInt() 주어진값을 정수형 숫자로 변환처리
// 예: 40px  -> parseInt(40px)  -> 40
// 예2: 43.3 ->  parseInt(43.3) -> 43
  var $w = parseInt($(window).width());
  $(window).on('resize',function(){
    var nowW = $(window).width();
    if($w !== nowW){
      // location.reload();
      rwd();
// 리로드-사이즈 바뀔때마다 새로고침으로 적용
// 아래꺼-비동기처럼 변화를 주겠다
    }
  });
})(this.jQuery);