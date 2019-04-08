var listOfBooks = [];
function getBooks(indices) {
    db = firebase.firestore();
    db.collection(firebase.auth().currentUser.uid).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        listOfBooks.push(doc.data());

        if(indices[0] <= indices[1]) {
            var index = indices[0];
            console.log("Index:", index);
        document.getElementById("item".concat(index.toString())).style.display = 'block';
        let txtTitle = document.getElementById("title".concat(index.toString()));
        let link = document.getElementById("link".concat(index.toString()));
        let txtAuthor = document.getElementById("author".concat(index.toString()));
        let txtContent = document.getElementById("content".concat(index.toString()));
        let thumbnail = document.getElementById("thumbnail".concat(index.toString()));
            let price = document.getElementById("price".concat(index.toString()));

            
        var titleVal = listOfBooks[index-1]["title"];
        txtTitle.innerHTML = titleVal;
        txtAuthor.innerHTML = "";
        var subtitleVal = listOfBooks[index-1]["subtitle"];
        txtContent.innerHTML = subtitleVal;
        var image = listOfBooks[index-1]["thumbnail"];
        thumbnail.src = image;
        var priceVal = listOfBooks[index-1]["price"];
        price.innerHTML = priceVal;
        var urlVal = listOfBooks[index-1]["url"];
        link.href = urlVal;
            indices[0]++;
        }
    });
});
}
function displayBooks() {
    listOfBooks = [];
    var indices = [1, 10];
    getBooks(indices);

    console.log("Filled upto:", index);
    index = indices[0]-1;
    console.log("Filled upto:", index);
    while(index < 10)  {
        document.getElementById("item".concat(index.toString())).style.display = 'none';
        index = index + 1;
    }
    
}