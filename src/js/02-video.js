import Player from '@vimeo/player';
const throttle = require('lodash.throttle')
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


// прибираю звук від відео для розробки

player.setVolume(0)
// __________________

const setStartTime = localStorage.getItem('videoplayer-current-time');

if (setStartTime) {
    player.setCurrentTime(setStartTime);
}


const onAirTime = (data) => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.on('timeupdate', throttle(onAirTime, 2000));