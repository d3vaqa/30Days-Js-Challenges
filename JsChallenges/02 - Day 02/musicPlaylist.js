
const musicPlaylist = {
    _songs: [],


    get songs(){
        return this._songs
    },


    set addSongs(song){
        if(typeof song === 'object' && song.title && song.artist && song.duration ){
            this._songs.push(song)
            console.log(`new song added: "${song.title}" by ${song.artist}`)
        }else{
            console.log(`Invalid song information`)
        }
        
    },


    set removeSong(title){
        const index = this._songs.findIndex(song => song.title === title)
        if(index > -1){
            const removeSong = this._songs.splice(index,1)[0]
            console.log(`Removed song: "${removeSong.title}" by ${removeSong.artist}`);
        }else {
            console.log('Song not found.');
          }
    },


    // shuffle playlist

    set shuffle(_){
        for(let i = this._songs.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1))
            [this._songs[i], this._songs[j]] = [this._songs[j], this._songs[i]]
        }
        console.log(`Playlist shuffled`)
    },


    set totalDuration(_){
        const total = this._songs.reduce((acc, song) => acc + song.duration, 0)
        console.log(`Total duration of songs: ${total} seconds`);
        },

}

// testing

musicPlaylist.addSongs = { title: 'Bohemian Rhapsody', artist: 'Queen', duration: 355 };
musicPlaylist.addSongs = { title: 'Hotel California', artist: 'Eagles', duration: 390 };
musicPlaylist.addSongs = { title: 'Imagine', artist: 'John Lennon', duration: 197 };
musicPlaylist.addSongs = { title: 'Billie Jean', artist: 'Michael Jackson', duration: 292 };
musicPlaylist.addSongs = { title: 'Hotel California', artist: 'Eagles', duration: 390 };
musicPlaylist.addSongs = { title: 'Shape of You', artist: 'Ed Sheeran', duration: 233 };


console.log("Playlist:", musicPlaylist.songs);


// shuffle song


musicPlaylist.removeSong = 'Bohemian Rhapsody';
console.log("Updated playlist:", musicPlaylist.songs);



musicPlaylist.totalDuration = true;