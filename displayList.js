function displayList(IdArr) {
    var index;
    var indices = [0, 10];
    console.log("Refresh list");
    for(index = 0; index<IdArr.length; index++) {
        populatePlaylists(IdArr[index], indices);
    }
    while(indices[0] < indices[1]) {
        document.getElementById("item".concat(index[0].toString())).style.display = 'none';
        indices[0]=indices[0]+1;
    }
}
function addData() {

}