$(document).ready(function(){
  $("ul#menu").on("click","li", function(){
    $("li").removeClass("active")
    $(this).addClass("active")
  })
  $("input[action='toggle']").click(function(){
    var input_name = $(this).data("inputname")
    togglecover(true,input_name,1,true,"icon-addpro",false,"")
    iconrotate("icon-addpro", 45)
    effectinput(input_name)
  })
  $("span.search").click(function(){

    $("#search-box").css('display','block')

    togglecover(false,"", '', false,"",true,"search-box")

    $("input.searchbox").focus()
  })
  function effectinput(indname){
    $("#"+indname).css('z-index','9999')
  }
  $(".menu_back").click(function(){
    $('#left').css('display','block')
    $('#top-phone, .poweredby-phone').css('z-index',3)

    togglecover(true, "top-phone, .poweredby-phone", 10, false, "", true, "left")
  })

  function togglecover(returnzindex, indname, zindex, resetrotate, rotatename, togglestuff, stuffid){
    $('#cover').css('display','block')
    $('body').css('overflow','hidden')

    $('div').on("click", "#cover,.close",function(){
      $('#cover').css('display','none')
      $('body').css('overflow','visible')
      if(resetrotate == true) {
        removerotate(rotatename, 45)  
      }
      if(returnzindex == true) {
        $("#"+indname).css('z-index',zindex)
      }
      if(togglestuff == true) {
        $("#"+stuffid).css('display','none')
      }
    })
  }
  // Transform icon
  function iconrotate(idname, deg){
    $('#'+idname).addClass("transform"+deg).addClass("close")
  }
  // Reset Transform icon
  function removerotate(idname, deg){
    $('#'+idname).removeClass("transform"+deg).removeClass("close")
  }
  // Remove
  $("tr").on("click","td.remove",function(){
    let tid = $(this).data("table")
    $("tr.table_"+tid).remove()
  })
});

jQuery(function($){
  function leftpad(){
    var $left = $("#left");
    var leftwidth = $left.width();
    if($(window).width() > 1023) {
      $("#right").css("padding-left",leftwidth);
    } else {
      $("#right").css("padding-left",0);
    }
  }
  $(window).resize(leftpad);
  leftpad();
});