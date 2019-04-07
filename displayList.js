function displayList(IdArr) {
    var index;
    console.log("Refresh list");
    var playlists;
    for(index = 0; index<IdArr.length; index++) {
        extractPlaylists(IdArr[index], playlists)
    }

    for( index = 1; index <= 1; index++ ) {
    let txtTitle = document.getElementById("title".concat(index.toString()));
    let link = document.getElementById("link".concat(index.toString()));
    let txtAuthor = document.getElementById("author".concat(index.toString()));
    let txtContent = document.getElementById("content".concat(index.toString()));
    let thumbnail = document.getElementById("thumbnail".concat(index.toString()));
    let price = document.getElementById("price".concat(index.toString()));
    let btnAdd = document.getElementById("btnAdd".concat(index.toString()));

    txtTitle.innerHTML=playlists[0]['title'];
    txtAuthor.innerHTML=playlists[0]['author'];
    txtContent.innerHTML=playlists[0]['description'];
    thumbnail.src=playlists[0]['image'];
    price.innerHTML = playlists[0]['price'];
    link.href=playlists[0]['url'];
    }
}