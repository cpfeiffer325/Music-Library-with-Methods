var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists: function () {
  var list = this.playlists;
  for (var p in list) {
    console.log(`${list[p].id}: ${list[p].name} - ${list[p].tracks.length} tracks`);
    }
  },

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
  var list = this.tracks;
  for (var t in list) {
    console.log(`${list[t].id}: ${list[t].name} by ${list[t].artist} (${list[t].album})`);
    }
  },

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
  var currentP = this.playlists[playlistId];
  console.log(`${currentP.id}: ${currentP.name} - ${currentP.tracks.length} tracks`);
  var track = "";
  for (var i = 0; i < currentP.tracks.length; i++) {
    track = this.playlists[playlistId].tracks[i];
    var currentT = this.tracks[track];
    console.log(`${currentT.id}: ${currentT.name} by ${currentT.artist} (${currentT.album})`);
    }
  },

// adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
  console.log(this.playlists[playlistId].tracks);
  },


// generates a unique id
// (use this for addTrack and addPlaylist)

  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


// adds a track to the library

  addTrack: function (name, artist, album) {
  var newId = this.uid();
  this.tracks[newId] = {id: newId, name, artist, album};
  },


// adds a playlist to the library

  addPlaylist: function (name) {
  var newId = this.uid();
  this.playlists[newId] = {id: newId, name, tracks: []};
  }


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// };

};

console.log("----------test printPlayLists------------------");
library.printPlaylists();

console.log("----------test printTracks---------------------");
library.printTracks();

console.log("----------test printPlayList-------------------");
library.printPlaylist("p01");

console.log("----------test add addTrackToPlaylist----------");
library.addTrackToPlaylist("t01", "p02");

console.log("----------test addTrack------------------------");
library.addTrack("Mr. Blue Sky", "Electric Light Orchestra", "Out of the Blue");
library.addTrack("Three Little Birds", "Bob Marley & The Wailers", "Exodus");
library.printTracks();

console.log("----------test addPlaylist---------------------");
library.addPlaylist("Workout Music");
library.printPlaylists();
