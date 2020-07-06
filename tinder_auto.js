function tinderLike() {
  const min = 5, max = 10;
  const rand_time = Math.floor(Math.random() * (max - min + 1) + min);
  const rand_flag = Math.floor(Math.random() * (max - min + 1) + min);
  const like_elem = document.evaluate('//button[@aria-label="いいね！"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
  const unlike_elem = document.evaluate('//button[@aria-label="いいえ"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
  try{
  	if(rand_flag>7){
  		like_elem.snapshotItem(0).click();	
  	}else{
  		unlike_elem.snapshotItem(0).click();
  	}
  }catch(e){
    console.log( e.message );
  }
  setTimeout(tinderLike, rand_time * 1000);
}


tinderLike()
