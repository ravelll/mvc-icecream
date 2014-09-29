var selectionModel = {
  list: [],

  icecreamNumber: 2,

  add: function(item) {
    var list = this.list;
    list.push(item);
    if (list.length > this.icecreamNumber) {
      list.shift();
    }
    this.updateViews();
  },

  contain: function(icecream) {
    return this.list.indexOf(icecream) >= 0;
  },

  containById: function(id) {
    return this.contain(icecreamModel.findById(id));
  },

  getIcecreams: function() {
    return this.list;
  },

  updateViews: function() {
    updateSelection();
    updateIcecreamList();
  },

  clearIcecreams: function() {
    this.list = [];
    this.updateViews();
  }
};
