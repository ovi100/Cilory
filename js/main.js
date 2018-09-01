/*------------------------------------
 *Author:Storrea LTD
 *Template:The Online Store
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function() {

  $(window).scroll(function(){
    if ($(this).scrollTop()>200){
      $('.link-bar').addClass('fixed-nav');
      $('.option-box').addClass('option-box-fixed');
    } 
    else {
      $('.link-bar').removeClass('fixed-nav');
      $('.option-box').removeClass('option-box-fixed');
    }
  });


  // $(".body").on("hide.bs.collapse", function(){
  //   $(".icon-change").html('<span class="fa fa-angle-down"></span>');
  // });
  // $(".body").on("show.bs.collapse", function(){
  //   $(".icon-change").html('<span class="fa fa-angle-up"></span>');
  // });

  $('.body').on('shown.bs.collapse', function () {
    $(this).parent().find('.fa-angle-down')
                    .removeClass('fa-angle-down')
                    .addClass('fa-angle-up');
  }).on('hidden.bs.collapse', function () {
      $(this).parent().find(".fa-angle-up")
                      .removeClass("fa-angle-up")
                      .addClass("fa-angle-down");
  });

  $('.carousel').carousel({
    interval: 2000
  })


  /*
   *---------------------------------------------
   *-------------OwlCarousel/Product--------------
   *---------------------------------------------
   */

  $('.homeProduct').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items: 5,
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    navClass:['nav-prev','nav-next'],
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      370: {
        items: 2
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })


  /*
   *---------------------------------------------
   *-------------OwlCarousel/Brand Logo--------------
   *---------------------------------------------
   */

   $('#brandLogo').owlCarousel({
    autoplay:false,
    items: 10,
    slideBy:10,
    margin:10,
    dots:false,
    nav:true,
    navClass:['nav-prev','nav-next'],
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: {
      320: {
        items: 2
      },
      360: {
        items: 3
      },
      400: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 10
      }
    }
  });

   /*
   *---------------------------------------------
   *----------------Price Slide-----------------
   *---------------------------------------------
   */

  // $("#range").ionRangeSlider({
  //   hide_min_max: true,
  //   keyboard: true,
  //   min: 0,
  //   max: 5000,
  //   from: 1000,
  //   to: 4000,
  //   type: 'double',
  //   step: 1,
  //   prefix: "$",
  //   grid: true
  // });

  $("#range").ionRangeSlider({
    type: "double",
    min: 350,
    max: 5000,
    from: 350,
    to: 5000,
    step: 100,
    onStart: function (data) {
        console.log(data);
    },
    onChange: function (data) {
        console.log(data);
    },
    onFinish: function (data) {
        console.log(data);
    },
    onUpdate: function (data) {
        console.log(data);
    }
  });

  /*
   * -----------------------------------------------------------------
   *---------------------------ElevateZoom----------------------------
   * -----------------------------------------------------------------
   */


  $("#pdd-img").elevateZoom(
    {
      gallery:'zoom-control',
      zoomType: "inner",
      cursor: "crosshair",
      galleryActiveClass: 'active',
      imageCrossfade: true,
      constrainType:"height", 
      constrainSize: 350
  });   

});


function openmenuSidenav() {
  if ($(window).width() > 360) {
    document.getElementById("menu-sidenav").style.width = "280px";
  }else{
    document.getElementById("menu-sidenav").style.width = "250px";
  }
}

function closemenuSidenav() {
  document.getElementById("menu-sidenav").style.width = "0";
}


function openOption() {
  document.getElementById("catalog-filter").style.width = "75%";
}

function closeOption() {
  document.getElementById("catalog-filter").style.width = "0";
}


  
