function displayList(IdArr, ascending) {
    var index;
    var fromToIndices = [1, 10];
    console.log("Refresh list");
    //for (index = 0; index < IdArr.length; index++) {
    //    populatePlaylists(IdArr[index], fromToIndices);
    //}

    fromToIndices[0] = populateBooks(IdArr, ascending);

    while(fromToIndices[0] < fromToIndices[1])  {
        fromToIndices[0] = fromToIndices[0]+1;
        document.getElementById("item".concat(fromToIndices[0].toString())).style.display = 'none';
    }
}