$(document).ready(function () {

// 下拉框
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );

      
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
  
  // 没有markdown目录，即关闭“文章目录”和“<hr>”
    var catalog=$('.widget-content'),
        detail=$('.toc>ul');
        if (detail.text()==""){
            catalog.remove();
            console.log('测试');
        };
});



// 回到顶部
$(function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#back-to-top").fadeIn(1500);
                }
                else
                {
                    $("#back-to-top").fadeOut(1500);
                }
            });
 
            //当点击跳转链接后，回到页面顶部位置
            $("#back-to-top").click(function(){
                if ($('html').scrollTop()) {
                    $('html').animate({ scrollTop: 0 }, 100);//动画效果
                    return false;
                }
                $('body').animate({ scrollTop: 0 }, 100);
                return false;
            });
        });
    });

