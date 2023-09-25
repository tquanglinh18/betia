// lấy chiều cao màn hình không gồm 2 thanh điều hướng bên trên và bên dưới
const setHeight = () => {
  const mainMobile = document.querySelector("#main_mobile");
  if (mainMobile) {
    document.querySelector("#main_mobile").style.height =
      window.innerHeight + "px";
  }
};

setHeight();

window.onload = function (e) {
  setHeight();
};

window.addEventListener("orientationchange", function () {
  var afterOrientationChange = function () {
    window.location.reload();
    setHeight();
    window.removeEventListener("resize", afterOrientationChange);
  };
  window.addEventListener("resize", afterOrientationChange);
});

$(function () {
  $(".slick_betia_home").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    centerMode: true,
    centerPadding: "25%",
    arrows: false,
  });

  $(".slick_betia_feedback").slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick_betia_introduce").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    nextArrow: `<button type="button">
    <img src="./assets/images/btn_next.png" alt="">
  </button>`,
    prevArrow: `<button type="button">
    <img src="./assets/images/btn_prev.png" alt="">
  </button>`,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".slick_betia_products").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  });
});

const listTabNew = document.querySelectorAll(".tab-news");
const listContentNew = document.querySelectorAll(".tab-contents-news");
listTabNew.forEach((tabNew, index) => {
  tabNew.addEventListener("click", () => {
    const lineSlt = document.querySelectorAll(".line-selected");
    for (var i = 0; i < lineSlt.length; i++) {
      lineSlt[i].classList.replace("selected", "hidden");
      listContentNew[i].classList.replace("selected", "hidden");
    }
    lineSlt[index].classList.replace("hidden", "selected");
    listContentNew[index].classList.replace("hidden", "selected");
  });
});
