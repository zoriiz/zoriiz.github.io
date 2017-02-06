$(document).ready(function(){
  $("ul#menu").on("click","li", function(){
    $("li").removeClass("active")
    $(this).addClass("active")
  })
  $("input[action='toggle']").click(function(){
    var input_name = $(this).data("inputname")
    togglecover(true,input_name,true,"icon-addpro",false,"")
    iconrotate("icon-addpro", 45)
    effectinput(input_name)
  })
  $("span.search").click(function(){

    $("#search-box").css('display','block')

    togglecover(false,"",false,"",true,"search-box")

    $("input.searchbox").focus()
  })
  function effectinput(indname){
    $("#"+indname).css('z-index','9999')
  }
  function togglecover(returnzindex, indname, resetrotate, rotatename, togglestuff, stuffid){
    $('#cover').css('display','block')
    $('body').css('overflow','hidden')

    $('div').on("click", "#cover,.close",function(){
      $('#cover').css('display','none')
      $('body').css('overflow','visible')
      if(resetrotate == true) {
        removerotate(rotatename, 45)  
      }
      if(returnzindex == true) {
        $("#"+indname).css('z-index','1')
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
    $("#right").css("padding-left",leftwidth);
  }
  $(window).resize(leftpad);
  leftpad();
});