$(document).ready(function () {
  $("#start").click(function () {
    $("#sun")
      .fadeIn(3000)
      .animate(
        {
          left: "520px",
          //   top: "50px",
          height: "+=30px",
          width: "+=30px",
          opacity: 4,
        },
        10000
      )
      .animate(
        {
          left: "1030px",
          top: "50px",
          height: "-=20px",
          width: "-=20px",
          opacity: 0.3,
        },
        10000
      )
      .stop();
    $("body").animate(
      {
        opacity: 0.5,
      },
      100000
    );
    $("img").fadeIn(1000).animate({
      opacity: 5,
    });
  });
});
