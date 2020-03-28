console.log("destinations-page.js");
var $ = jQuery;

changeCoutriesLinks();
formatCalendar();

$(".filter-container .sf-field-taxonomy-departure_date ul").css(
  "display",
  "flex"
);

//Main
function changeCoutriesLinks() {
  var contriesLinks = $(".vc_gitem-link.vc-zone-link");
  contriesLinks.each(function() {
    var countryTitle = $(this)
      .attr("title")
      .toLowerCase()
      .trim()
      .replace(" ", "-");

    $(this).attr("href", "/?sfid=2847&_sft_countries=" + countryTitle);
  });
}

//Filter

function formatCalendar() {
  $(document).ready(function() {
    //Disable empty inputs
    $(".sf-field-taxonomy-departure_date li[data-sf-count='0'] input").attr(
      "disabled",
      "disabled"
    );
    $(".sf-field-taxonomy-departure_date li[data-sf-count='0'] label").addClass(
      "filter-label-empty"
    );
  });

  $(".sf-field-taxonomy-departure_date li").each(function() {
    var label = $(this).find("label");
    var year = label.html().split("-")[1];

    //Disable empty inputs
    /*if ($(this).attr("data-sf-count") == 0) {
      $(this)
        .find("input")
        .attr("disabled", "true");

      $(this)
        .find("label")
        .addClass("filter-label-empty");
    }*/

    //Remove year
    label.html(label.html().split("-")[0]);

    //Switch number to text date
    switch (label.html()) {
      case "01":
        label.html("Jan");
        break;
      case "02":
        label.html("Feb");
        break;
      case "03":
        label.html("Mar");
        break;
      case "04":
        label.html("Apr");
        break;
      case "05":
        label.html("May");
        break;
      case "06":
        label.html("Jun");
        break;
      case "07":
        label.html("Jul");
        break;
      case "08":
        label.html("Aug");
        break;
      case "09":
        label.html("Sep");
        break;
      case "10":
        label.html("Oct");
        break;
      case "11":
        label.html("Nov");
        break;
      case "12":
        label.html("Dec");
        break;
    }

    //Create div with year
    if ($("." + year).length == 0) {
      $(this)
        .parent()
        .append("<div class='" + year + "'><h5>" + year + "</h5></div>");
    }

    //Append the correct dates into the correct div
    $(this).appendTo("." + year);
  });
}
