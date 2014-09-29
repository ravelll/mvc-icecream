var icecreamModel = {
  list: [
    {id:'t1', name:"バニラ"},
    {id:'t2', name:"チョコレートチップ"},
    {id:'t3', name:"オレンジシャーベット"},
    {id:'t4', name:"チョコミント"},
    {id:'t5', name:"ストロベリー"},
    {id:'t6', name:"抹茶"}
  ],

  getAll: function() {
    return this.list;
  },

  findById: function(id) {
    return $.grep(this.list, function(val) {
      return id == val.id;
    })[0];
  }
};
