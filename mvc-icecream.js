$(function () {
  var els = $('#icecreams');
  $.each(icecreamModel.getAll(),
    function(i, icecream) {
      els.append($("<li>")
        .append($("<input type='checkbox'>")
          .attr('name', icecream.id))
        .append($("<span>")
          .text(icecream.name))
        .click(function() {
          onclickIcecream(event);
        })
      );
    }
  );

  var button = $('#clear-icecreams');
  button.append($("<input type='button'>")
    .click(function() {
      clearIcecreamList(event);
    })
  );

  selectionModel.updateViews();
});

function clearIcecreamList(event) {
  var checkbox = $(event.currentTarget).find("input[type='checkbox']");

  if (checkbox) {
    selectionModel.clearIcecreams();
  }
}

function onclickIcecream(event) {
  var checkbox = $(event.currentTarget).find("input[type='checkbox']");

  if (checkbox) {
    selectionModel.add(
        icecreamModel.findById(checkbox.attr("name"))
    );
  }
}

function updateSelection() {
  $('#icecreams input[type="checkbox"]').each(function(i, elm) {
    elm.checked = selectionModel.containById( elm.name );
  });
}

function updateIcecreamList() {
  $("#icecream-list").text(
      $.map(selectionModel.getIcecreams(), function(val) {
        return val.name;
      }).join(" > ")
      );
}
