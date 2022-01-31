////////////////

var swiper = new Swiper(".worksSwiper", {
  slidesPerView: 1,
  centeredSlides: true,

  grabCursor: true,
  keyboard: {
    enabled: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".price_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 2000,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_price_from").val(data.from);
    $("#range_price_to").val(data.to);
  },
});

$(".area_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 2000,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_area_from").val(data.from);
    $("#range_area_to").val(data.to);
  },
});

$(".power_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 2000,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_power_from").val(data.from);
    $("#range_power_to").val(data.to);
  },
});

$(".noize_range").ionRangeSlider({
  type: "double",
  min: 0,
  max: 2000,
  skin: "round",
  hide_from_to: true,
  hide_min_max: true,
  onChange: function (data) {
    $("#range_noize_from").val(data.from);
    $("#range_noize_to").val(data.to);
  },
});
// nav
$(function () {
  $(".nav__icon").on("click", function () {
    $(this).toggleClass("active");
    $("nav ul").slideToggle();
  });

  $(window).on("load resize", function () {
    var w = $(window).width();
    var h = $(window).height();
    var x = 992;
    if (w >= x) {
      $("nav ul").css({ display: "flex", height: "auto" });
    } else {
      $("nav ul").css({ display: "none", height: "auto" });
    }
  });
});
///
const toggleSidebar = document.querySelector(".filter");
const filterSidebar = document.querySelector(".sidebar");
const body = document.querySelector(".overlay");
const closeBtn = document.querySelector(".btn--hide-filter");
toggleSidebar.addEventListener("click", function () {
  filterSidebar.classList.add("sidebar-visible");
  body.classList.add("overlay-visible");
});
closeBtn.addEventListener("click", function () {
  filterSidebar.classList.remove("sidebar-visible");
  body.classList.remove("overlay-visible");
});
