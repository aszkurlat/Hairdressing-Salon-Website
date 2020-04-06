$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
      $(this).find("a").html("<i class='fas fa-bars'></i>");
    } else {
      $(".item").addClass("active");
      $(this).find("a").html("<i class='fas fa-times'></i>");
    }
  });
});

$("nav a").on("click", function () {
  const clickItem = "." + $(this).attr("id");
  $("body, html").animate(
    {
      scrollTop: $(clickItem).offset().top - $(".menu").height(),
    },
    1000
  );
});
