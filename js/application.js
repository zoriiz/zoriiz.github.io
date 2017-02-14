var Frontend = (function () {

  var menuActive = function() {
    $("ul#menu").on("click","li", function(){
      $("li").removeClass("active")
      $(this).addClass("active")
    })
  };

  var inputToggle = function() {
    $("input[action='toggle']").click(function(){
      var input_name = $(this).data("inputname")
      togglecover(true, input_name, 1, true, "icon-addpro", false, "");
      iconrotate("icon-addpro", 45)
      effectinput(input_name)
    })
  };

  var searchToggle = function() {
    $("span.search").click(function(){
      $("#search-box").css('display','block')
      togglecover(false,"", '', false,"",true,"search-box")
      $("input.searchbox").focus()
    })
  };

  var iconrotate = function(idname, deg) {
    $('#'+idname).addClass("transform"+deg).addClass("close")
  };  

  var removerotate = function(idname, deg) {
    $('#'+idname).removeClass("transform"+deg).removeClass("close")
  };  

  var effectinput = function(indname) {
    $("#"+indname).css('z-index','9999')
  };  

  var togglecover = function(returnzindex, indname, zindex, resetrotate, rotatename, togglestuff, stuffid) {
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
  };

  var rowRemove = function() {
    $("tr").on("click","td.remove",function(){
      let tid = $(this).data("table")
      $("tr.table_"+tid).remove()
    })
  };

  var menuMobile = function() {
    $(".menu_back").click(function(){
      $('#left').css('display','block')
      $('#top-phone, .poweredby-phone').css('z-index',3)
      togglecover(true, "top-phone, .poweredby-phone", 10, false, "", true, "left")
    })
  };

  var leftpad = function() {
    var $left = $("#left")
    var leftwidth = $left.width()
    if($(window).width() > 1023) {
      $("#right").css("padding-left",leftwidth)
      $("#left").css("display","block")
    } else {
      $("#right").css("padding-left",0)
      $("#left").css("display","none")
    }
  }

  var inputAnimation = function() {
    var delay = function(){
      var timer = 0
      return function(callback, ms){
        clearTimeout (timer)
        timer = setTimeout(callback, ms)
      }
    }()

    var inputAnimate = function() {
      $("#input_addproduct").keypress('input', function() {
        $('#icon-addpro').addClass('animated infinite zoomIn')
        // $('#icon-addpro > i').removeClass('icon-icon-plus')
        // $('#icon-addpro > i').addClass('icon-controls-purple')
      })
      $("#input_addproduct").keyup('input', function() {
        delay(function(){
          $('#icon-addpro').removeClass('animated infinite zoomIn')
          // $('#icon-addpro > i').removeClass('icon-controls-purple')
          // $('#icon-addpro > i').addClass('icon-icon-plus')
        }, 300 )
      })
    }
    inputAnimate()
  }

  var checkhight = function() {
    var $nav = $("nav")
    var navheight = $nav.height()
    if($('body').height() > navheight + 300) {
      $(".poweredby-nav").css({'position':'absolute', 'bottom':'22'})
    } else {
      $(".poweredby-nav").css({'position':'relative', 'margin-top':'20px'})
    }
  }

  var runObject = function () {
    menuActive()
    inputToggle()
    searchToggle()
    rowRemove()
    menuMobile()
    leftpad()
    inputAnimation()
    checkhight()

    $(window).resize(leftpad)
    $(window).resize(checkhight)
  };
  
  return {
    runObject: runObject
  };

})();

