//Filter

function formatCalendar() {
  $(".sf-field-taxonomy-departure_date li").each(function() {
    //Disable empty inputs
    if ($(this).attr("data-sf-count") == 0) {
      $(this)
        .find("input")
        .attr("disabled", "true");

      $(this)
        .find("label")
        .addClass("filter-label-empty");
    }

    //Create a title with the correct year
    var label = $(this).find("label");

    if (label.html().includes("01-")) {
      var year = label.html().split("-")[1];
      $(this).before("<h5>" + year + "</h5>");
    }

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
  });
}

formatCalendar();
