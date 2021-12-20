$(document).ready(() => {
  if ($("#fromSmalltoLarge").length > 0) {
    var isLarge = sessionStorage.getItem("isLarge");

    if (isLarge == "true") {
      $("#fromSmalltoLarge").addClass("hidden");
    } else {
      $("#fromSmalltoLarge").removeClass("hidden");
    }
  }

  $(".ordernow").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#shippingForm").offset().top,
      },
      500
    );
  });

  if ($(".quantity").length > 0) {
    var quantity = sessionStorage.getItem("quantity");

    $(".quantity").text(quantity);
  }

  var quantity = sessionStorage.getItem("quantity");

  if ($(".price").length > 0) {
    var price = sessionStorage.getItem("price");

    price.toString();

    $(".price").text(price);
  }

  if ($(".price-double").length > 0 && quantity == 2) {
    var price = parseInt(sessionStorage.getItem("price"));

    price = price * 2;

    $(".price-double").text(price);
  }

  $("#specialoffer-basic").click(function () {
    var price = $("#speciall-basic-price-value").html();
    sessionStorage.setItem("price", price);
    sessionStorage.setItem("isLarge", "false");
  });

  $("#specialloffer").click(function (e) {
    e.preventDefault();

    var price = $("#speciall-price-value").html();
    sessionStorage.setItem("isLarge", "true");
    sessionStorage.setItem("price", price);

    $.ajax({
      type: "POST",
      url: "form2.php",
      data: {},
      success: function (data) {
        console.log(data);
        var data2 = $.parseJSON(data);
        if (data2.passed == true) {
          window.location.href = data2.redirect;
        }
      },
      error: function (data) {
        console.log("error");
      },
    });
  });

  //popupFactory.createPopup();

  if ($("#odometer").length > 0) {
    let odometerCoutState = 1023;
    var el = document.querySelector("#odometer");
    let odometer = new Odometer({
      el: el,
      value: 1023,
      duration: 30000,
      animation: "count",
    });

    setInterval(() => {
      if (odometerCoutState != 1007) {
        var newState = odometerCoutState - 1;
        odometer.update(newState);
      }
      odometerCoutState = newState;
    }, Math.floor(Math.random() * 10000) + 50000);
  }

  //let firstOutFlag = true;

  $("#tooltipMail").tooltip({ placement: "right" });
  $("#tooltipPhone").tooltip({ placement: "right" });
});

(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(86880833, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});
