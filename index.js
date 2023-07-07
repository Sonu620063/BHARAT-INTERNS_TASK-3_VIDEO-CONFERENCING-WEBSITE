$(document).ready(function(){
    $('button.mode-switch').click(function(){
      $('body').toggleClass('dark');
    });
    
    $(".btn-close-right").click(function () {
      $(".right-side").removeClass("show");
      $(".expand-btn").addClass("show");
    });
    
    $(".expand-btn").click(function () {
      $(".right-side").addClass("show");
      $(this).removeClass("show");
    });
  });