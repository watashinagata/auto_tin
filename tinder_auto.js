function tinderLike() {
  var min = 5, max = 10;
  var rand = Math.floor(Math.random() * (max - min + 1) + min);
  var elem = document.evaluate('//button[@aria-label="いいね！"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
  try{
    elem.snapshotItem(0).click();
  }catch(e){
    console.log( e.message );
  }
  setTimeout(tinderLike, rand * 1000);
}

tinderLike()