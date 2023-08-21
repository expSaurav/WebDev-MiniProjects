const songs = 
['baller','cheque','elevated','her','nolove','stillrollin'];

songs.forEach(song => {
    const btn = document.createElement('button');
    
    btn.classList.add('btn');


    btn.innerText = song;

    btn.addEventListener('click', () => {
       
        stopSongs();

        document.getElementById(song).play();

        
        
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopSongs(){
    songs.forEach(song => {
        
        const sound = document.getElementById(song);
        sound.pause();

        sound.currentTime = 0;
        
    })
}