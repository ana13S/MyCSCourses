function extractPlaylists(field, playlistsinfo) {
    console.log("Start fetching playlists for ", field);
    gapi.client.setApiKey("AIzaSyAya7y971pPxYE4no2UW7DtGvZvAAdSIQ4");
    gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(function() {
      var json = gapi.client.youtube.search.list({
      "part": "snippet",
      "maxResults": 25,
      "q": field,
      "type": "playlist"
    }).then(function(response) {
      var i, newIndex;
      console.log("Response", response);
      for (i = 0; i < response.result.items.length; i++){
        newIndex = playlistsinfo.length;
        console.log(i + response.result.items[i].id);
        var playlistid = response.result.items[i].id['playlistId'];
        var url = 'https://www.youtube.com/playlist?list='+playlistid;

        console.log(i + response.result.items[i].snippet['title']);
        var name = response.result.items[i].snippet['title'];
        playlistsinfo[newIndex] = {};
        playlistsinfo[newIndex]['url'] = url;
        playlistsinfo[newIndex]['title'] = name;

        console.log(i + response.result.items[i].snippet['description']);
        var description = response.result.items[i].snippet['description'];
        playlistsinfo[newIndex]['description'] = description;

        console.log(i + response.result.items[i].snippet.thumbnails);
        var image = response.result.items[i].snippet.thumbnails['high']['url'];
        playlistsinfo[newIndex]['image'] = image;

        playlistsinfo[newIndex]['price'] = 0;
      }

  });
     });
    }
  gapi.load("client");