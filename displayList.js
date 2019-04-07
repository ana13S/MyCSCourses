function displayList(IdArr) {
    var index;
    var indices = [0, 10];
    console.log("Refresh list");
    for(index = 0; index<IdArr.length; index++) {
        populatePlaylists(IdArr[index], indices);
    }

}