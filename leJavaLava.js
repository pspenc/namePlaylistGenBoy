


function freakingRead(pathOfFileToReadFrom){
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
}


function startPlaylistin(event){
    
    
    document.getElementById("playlistSpot").innerHTML = "";
    var name = document.getElementById("nameForm").value;
    document.getElementById("peepsName").innerHTML = name;
    
    var songList = freakingRead("Songs.txt");
    var songArray = songList.split("\n");
    
    var playlist = [];
    for (var i = 0;i<name.length;i++){
        

        var upperLetter = name.charAt(i).toUpperCase();
        var index = (upperLetter.charCodeAt(0) -65) * 2;
        
        
        var text = songArray[index]+"<br>";
        playlist.push(text);
        //alert(songArray[index]);
        
    }
    
    for(var i = 0; i < playlist.length; i++){
        
        document.getElementById("playlistSpot").innerHTML += playlist[i]+"<br>" ;
        
    }
    
    
    event.preventDefault();
}