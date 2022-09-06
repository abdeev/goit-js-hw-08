import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

player.on('timeupdate', function(data) {
    // iframe.setAttribute.dataset.jsTime = data.seconds;
    const throttledVideoPlaying = _.throttle(console.log, 1000);

iframe.addEventListener('play', throttledVideoPlaying);
    console.log(data.seconds);
});


// player.setCurrentTime(videoplayerCurrentTime).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });