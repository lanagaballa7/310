var player,
    time_update_interval = 0;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'mfxQy5A_tHs',
        playerVars: {
            color: 'white',
            playlist: 'TWDb5MhjyoE,S_dfq9rFWAE,AXAT3ZD3e5k,HFIEwpbOWak,rUg_K15tumI,4Ot0T4iCXfM'
        },
        events: {
            onReady: initialize
        }
    });
}


function initialize() {
    
    updateTimerDisplay();
    updateProgressBar();

    
    clearInterval(time_update_interval);

  
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000);


    $('#volume-input').val(Math.round(player.getVolume()));
}



function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time').text(formatTime( player.getCurrentTime() ));
    $('#duration').text(formatTime( player.getDuration() ));
}



function updateProgressBar(){
    
    $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100);
}


// Progress bar

$('#progress-bar').on('mouseup touchend', function (e) {

   
    var newTime = player.getDuration() * (e.target.value / 100);

    
    player.seekTo(newTime);

});


// Playback

$('#play').on('click', function () {
    player.playVideo();
});


$('#pause').on('click', function () {
    player.pauseVideo();
});


// Sound volume


$('#mute-toggle').on('click', function() {
    var mute_toggle = $(this);

    if(player.isMuted()){
        player.unMute();
        mute_toggle.text('volume_up');
    }
    else{
        player.mute();
        mute_toggle.text('volume_off');
    }
});

$('#volume-input').on('change', function () {
    player.setVolume($(this).val());
});


// speed


$('#speed').on('change', function () {
    player.setPlaybackRate($(this).val());
});
// quality 
$('#quality').on('change', function () {
    player.setPlaybackQuality($(this).val());
});


// Playlist

//$('#next').on('click', function () {
//    player.nextVideo()
//});
//
//$('#prev').on('click', function () {
//    player.previousVideo()
//});


// Load video

$('.thumbnail').on('click', function () {

    var url = $(this).attr('data-video-id');

    player.cueVideoById(url);

});


// Helper Functions

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}
 //google maps
function initMap() {
	var egypt = {lat: 26.9060999, lng:30.8768375};
    var america ={lat: 37.6,lng:-95.665}
    var thailand ={lat:13.0390905,lng:101.490104}
    var russia={lat:61.5240, lng:105.3188}
    var australia={lat:-25.2744,lng:133.7751}
    var switzerland={lat:46.8182,lng:8.2275}
    var brazil = {lat:-14.2350,lng:-51.9253}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 1,
		center: switzerland
	});
    
    var marker = new google.maps.Marker({
	position: egypt,
	map: map,
	title: "EGYPT"
        
      
});
    

     var pin = new google.maps.Marker({
	position: america,
	map: map,
	title: "America"
});
     var thailand = new google.maps.Marker({
	position: thailand,
	map: map,
	title: "THAILAND"
});
       var russia = new google.maps.Marker({
	position: russia,
	map: map,
	title: "RUSSIA"
});
      var australia = new google.maps.Marker({
	position: australia,
	map: map,
	title: "australia"
});
    var switzerland = new google.maps.Marker({
	position: switzerland,
	map: map,
	title: "switzerland"
});
    var brazil = new google.maps.Marker({
	position: brazil,
	map: map,
	title: "brazil"
});
    //egypt
    marker.addListener("click", function() {
        player.cueVideoById('mfxQy5A_tHs')
        player.playVideo();
	map.setZoom(4);
    
	map.setCenter(marker.getPosition());
});
     
    //usa
    pin.addListener("click", function() {
	map.setZoom(3);
    player.cueVideoById('4Ot0T4iCXfM')
    player.playVideo();
	map.setCenter(pin.getPosition());
        
});
//russia
    russia.addListener("click", function() {
	map.setZoom(3);
    player.cueVideoById('S_dfq9rFWAE')
    player.playVideo();
	map.setCenter(russia.getPosition());
        
    });
    
    //swiss
     switzerland.addListener("click", function() {
	map.setZoom(5);
    player.cueVideoById('TWDb5MhjyoE')
    player.playVideo();
	map.setCenter(switzerland.getPosition());
        
});
    //thailand
      thailand.addListener("click", function() {
	map.setZoom(5);
    player.cueVideoById('AXAT3ZD3e5k')
    player.playVideo();
	map.setCenter(thailand.getPosition());
        
});
    
//australia
     australia.addListener("click", function() {
	map.setZoom(3);
    player.cueVideoById('HFIEwpbOWak')
    player.playVideo();
	map.setCenter(australia.getPosition());
        
});
    
//    //brazil
    brazil.addListener("click", function() {
	map.setZoom(4);
    player.cueVideoById('rUg_K15tumI')
    player.playVideo();
	map.setCenter(brazil.getPosition());
        
});
    map.addListener('click', function(event) {
	console.log(event);
	console.log(event.latLng.lat());
	console.log(event.latLng.lng());
});
    
//    map.addListener("click",function(){
//        player.playVideo();
//    });
}

