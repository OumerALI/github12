/** @format */

$(".omar").add(".hide");
$(".hide").hide();
$("h1").on("click", function () {
  $(this).remove(".hide");
  $(this).next(".omar").slideToggle();
});
