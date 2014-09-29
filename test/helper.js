function ok(title, expect, value) {
  if (expect === value) {
    console.log("OK : "+title);
  } else {
    console.log("NG : "+title+" ["+expect+"] --> ["+value+"]");
  }
}

function testModels() {
  var all = icecreamModel.getAll();

  ok("icecreamModel:個数", all.length, 6);
  ok("icecreamModel.findById", icecreamModel.findById("t4"), all[3]);

  ok("selectionModel:最初の個数",
      selectionModel.getIcecreams().length ,0);
  ok("selectionModel.contain:空の場合",
      false, selectionModel.contain(all[0]));

  selectionModel.add(all[0]);
  ok("selectionModel:1つめを追加したときの個数",
      selectionModel.getIcecreams().length, 1);
  ok("selectionModel.contain:1つめを追加したときのチェック",
      true, selectionModel.contain(all[0]));

  selectionModel.add(all[1]);
  ok("selectionModel:2つめを追加したときの個数",
      selectionModel.getIcecreams().length, 2);
  ok("selectionModel.contain:2つめを追加したときのチェック",
      true, selectionModel.contain(all[1]));

  selectionModel.add(all[2]);
  ok("selectionModel:3つめを追加したときの個数",
      selectionModel.getIcecreams().length, 2);
  ok("selectionModel.contain:3つめを追加したときのチェック",
      true, selectionModel.contain(all[2]));
  ok("selectionModel.contain:3つめを追加したら最初のものは消える",
      false, selectionModel.contain(all[0]));
}

testModels();
