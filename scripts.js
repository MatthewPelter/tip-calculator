// Tip Calculator JS

var tip, tipAmount, amount, tipWithBill;

$(function () {
  $("#slider").on("input", function () {
    $("#tipVal").html($(this).val() + "%");

    amount = $("#amount").val();
    tip = $(this).val() / 100;
    tipAmount = amount * tip;
    tipAmount = tipAmount.toFixed(2);
    tipWithBill = parseFloat(amount) + parseFloat(tipAmount);

    if (amount != "") {
      $(".tip").html("The tip is: ");
      $(".tipAmount").html("<b>$" + tipAmount + "</b>");
      $(".tipwitbill").html("The tip included in the bill: ");
      $(".tipWithBill").html("<b>$" + tipWithBill.toFixed(2) + "</b>");
    } else {
      $(".error").html("<b><red>Enter an amount!</red></b>");
    }
  });

  $("#amount").on("input", function () {
    $(".error").empty();
    $("#slider").val(0);
    $("#tipVal").html($("#slider").val() + "%");
    $(".tip").empty();
    $(".tipAmount").empty();
    $(".tipwitbill").empty();
    $(".tipWithBill").empty();
  });
});
