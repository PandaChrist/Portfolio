$(".wrapper").page();

$(".wrapper .page .navigate").click(function (ev) {
    var page  = $(ev.target).attr("data-page-name");
    var trans = $(ev.target).attr("data-page-trans");
    if ($(".wrapper").page().fetch(page) === null)
        $(".wrapper").page().shake();
    else
        $(".wrapper").page().transition(page, trans);
  });