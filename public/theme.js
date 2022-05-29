$("#opacity-slider").on("change mousemove", function () {
  $("#slider-value").html($(this).val());
  $("#tweet-card div").css({
    opacity: $(this).val(),
  });
});
