var $ = jQuery;

appendFilters();
clickFilter();

function appendFilters() {
  //Create structure
  $(".filter-container .wpb_wrapper").append(
    "<div class='filter-country'><h2>Find A Journey</h2><h3>Countries</h3></div><div class='filter-date'><h3>Departure Date</h3></div><div class='filter-length'><h3>Trip Length</h3></div>"
  );

  $(".custom-filter [data-vc-grid-filter-value]").each(function() {
    checkFilter("country", $(this));
    checkFilter("date", $(this));
    checkFilter("length", $(this));
  });
}

function clickFilter() {
  $(".filter-container .wpb_wrapper li").each(function(i) {
    var self = $(this);
    self.click(function() {
      uncheckAllLis();
      $(".custom-filter [data-vc-grid-filter-value]")
        .eq(i + 1)
        .trigger("click");
      checkLi(self);
    });
  });
}

function checkLi(self) {
  self.addClass("checked");
}

function uncheckAllLis() {
  console.log("unchecAllLis");
  $(".filter-container .wpb_wrapper li").each(function() {
    $(this).removeClass("checked");
  });
}

function checkFilter(filter, self) {
  if (
    $(self)
      .html()
      .includes(filter)
  ) {
    var newText = $(self)
      .html()
      .replace(filter + ":", "");
    $(".filter-container .wpb_wrapper .filter-" + filter).append(
      "<li>" + newText + "</li>"
    );
  }
}
