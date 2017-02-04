$(document).ready(function(){

  $("ul#menu").on("click","li", function(){
    $("li").removeClass("active")
    $(this).addClass("active")
  })

  $("input[action='toggle']").click(function(){
    var input_name = $(this).data("inputname")
    togglecover(input_name,"icon-icon-plus")
    iconrotate("icon-icon-plus", 45)
  })

  function togglecover(name, resetrotate){
    $('#cover').css('display','block')
    $('body').css('overflow','hidden')
    $("#"+name).css('z-index','9999')
    
    $('#cover,.close').click(function(){
      $('#cover').css('display','none')
      $('body').css('overflow','visible')
      $("#"+name).css('z-index','1')

      removerotate(resetrotate, 45)
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