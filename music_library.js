// Constructor
function Library (name, creator) {
  this.name = name,
  this.creator = creator,
  this.tracks = [],
  this.playlists = []
}


Library.prototype.newPlaylist = function (playlistName) {
this.playlists.push({name: playlistName,
                    tracks: []});
};


Library.prototype.newTrack = function (title, rating, length) {
this.tracks.push({
title: title,
rating: parseInt(rating),
length: parseInt(length),
});
};

// overallRating for playlist Function: avg rating of its tracks

Library.prototype.overallRating = function () {
  var tracks = this.playlists.tracks;
  var total = 0;
  for (var item in tracks) {
    total += item.rating;
  }
  return total / tracks.length;
}

// totalDuration for playlist Function: total durations of its tracks
Library.prototype.totalDuration = function () {

  var tracks = this.playlists;
  console.log("TRACKS",tracks);

  var total = 0;
  for (var item in tracks) {
    console.log("THIS IS ITEM",item);
    total += item.length
  }
  return total;
}

var classics = new Library ("Classics", "Bob");
classics.newPlaylist("myMusic");
classics.newTrack("Dark side of the moon", "5", "180");

console.log(classics);
classics.totalDuration();

// ME FALTA AGREGAR LOS TRACKS A CADA PLAYLIST

