
//////////////// global vars /////////////////

//light
let night = false;

//animals
let crab = false;
let fish = false;
let jellyfish = false;
let fireflies = false;

//badges
let sunrise = false;
let sunset = false;
let rainbow = false;
let whale = false;

//pointer states
let regularCursor = true;
let waitCursor = false;
let blackCursor = false;

//game states
let loadingState = false;
let tutorialState = false;
let gameplayState = false;
let gameoverState = false;
let badgeState = false;
let gamewonState = false;

//video files
var v2 = "videos/test2.mov";


//////////////// run when html loads /////////////////

$(document).ready(function() {

  $( "#day-button" ).click(function() {
    dayButtonClicked();
  });

  $( "#earth-zone" ).click(function() {
    earthZoneClicked();
  });

  $( "#water-zone" ).click(function() {
    waterZoneClicked();
  });


});

//////////////// functions /////////////////

//click functions

function dayButtonClicked() {
  if (night == false) {
    night = true;
    nightIn();
    return;
  }
  if (night == true) {
    night = false;
    dayIn();
    return;
  }
}

function earthZoneClicked() {
  if (night == false) {
    //crab video
    if (crab == false) {
      playCrabInVideo();
      return;
    }
    if (crab == true) {
      playCrabOutVideo();
      return;
    }
  }
  if (night == true) {
    //fireflies video
    if (fireflies == false) {
      playFirefliesInVideo();
      return;
    }
    if (fireflies == true) {
      playFirefliesOutVideo();
      return;
    }
  }
}

function waterZoneClicked() {
  if (night == false) {
    //fish video
    if (fish == false) {
      playFishInVideo();
      return;
    }
    if (fish == true) {
      playFishOutVideo();
      return;
    }
  }
  if (night == true) {
    //jellyfish video
    if (jellyfish == false) {
      playJellyfishInVideo();
      return;
    }
    if (jellyfish == true) {
      playJellyfishOutVideo();
      return;
    }
  }
}

//swap and play video functions

function newGameVideo() {
  //light up the island for the first time
}

function gameOverVideo() {
  //sink island video day

  //sink island video night
}

function dayIn() {
  //island was alone in nighttime
  if (fireflies == false) {
    night = false;
    playDayInVideo();
    return;
  }
  //island was with fireflies in nighttime
  if (fireflies == true) {
    night = false;
    playFirefliesOutVideo();
    return;
  }
}

function playDayInVideo() {
  //island is alone
  if (jellyfish == false) {
    alert( "day in alone" );
    return;
  }
  //island with jellyfish
  if (jellyfish == true) {
    alert( "day in with jelly" );
    return;
  }
}

function nightIn() {
  //island was alone in daytime
  if (crab == false && fish == false) {
    night = true;
    playNightInVideo();
    return;
  }
  //island was with crabs in daytime
  if (crab == true) {
    night = true;
    playCrabOutVideo();
    return;
  }
  //island was with fish in daytime
  if (fish == true) {
    night = true;
    playFishOutVideo();
    return;
  }
}

function playNightInVideo() {
  //island is alone
  if (jellyfish == false) {
    alert( "night in alone");
    return;
  }
  //island with jellyfish
  if (jellyfish == true) {
    alert( "night in with jelly");
    return;
  }
}

function playCrabInVideo() {
  //crab in day
  if (crab == false && fish == false && jellyfish == false) {
    crab = true;
    alert( "crab in" );
    return;
  }
  //crab in with fish --> play sunset
  if (crab == false && fish == true) {
    crab = true;
    playSunsetVideo();
    return;
  }
  //crab in with jellyfish --> play rainbow
  if (crab == false && jellyfish == true) {
    crab = true;
    playRainbowVideo();
    return;
  }
  alert("no if ran crab in");
}

function playCrabOutVideo() {
  //crab out, day stay
  if (crab == true && night == false) {
    crab = false;
    alert( "crab out" );
    return;
  }
  //crab out, night in
  if (crab == true && night == true) {
    crab = false;
    alert( "crab out night video" );
    //play night in video with delay;
    return;
  }
  alert("no if ran crab out");
}

function playFishInVideo() {
  //fish in day
  if (fish == false && crab == false && jellyfish == false) {
    fish = true;
    alert( "fish in" );
    return;
  }
  //fish in with crab --> play sunset
  if (fish == false && crab == true) {
    fish = true;
    playSunsetVideo();
    return;
  }
  //fish in with jellyfish --> play whale
  if (fish == false && jellyfish == true) {
    fish = true;
    playWhaleVideo();
    return;
  }
  alert("no if ran fish in");
}

function playFishOutVideo() {
  //fish out, day stay
  if (fish == true && night == false) {
    fish = false;
    alert( "fish out" );
    return;
  }
  //fish out night
  if (fish == true && night == true) {
    fish = false;
    alert( "fish out night in video" );
    //play night in video with delay;
    return;
  }
  alert("no if ran fish out");
}

function playJellyfishInVideo() {
  //jellyfish in, night stay
  if (jellyfish == false && fireflies == false) {
    jellyfish = true;
    alert( "jellyfish in" );
    return;
  }
  //jellyfish in night with fireflies --> play sunrise
  if (jellyfish == false && fireflies == true) {
    jellyfish = true;
    playSunriseVideo();
    return;
  }
  alert("no if ran, jelly in");
}

function playJellyfishOutVideo() {
  //jellyfish out, night stay
  if (jellyfish == true && night == true) {
    jellyfish = false;
    alert( "jelly out" );
    return;
  }
  alert("no if ran, jelly out");
}

function playFirefliesInVideo() {
  //fireflies in, night stay
  if (fireflies == false && jellyfish == false) {
    fireflies = true;
    alert( "fireflies in" );
    return;
  }
  //fireflies in with jellyfish --> play sunrise
  if (fireflies == false && jellyfish == true) {
    fireflies = true;
    playSunriseVideo();
    return;
  }
  alert("no if ran, fireflies in");
}

function playFirefliesOutVideo() {
  //fireflies out, night stay
  if (fireflies == true && night == true) {
    fireflies = false;
    alert( "fireflies out" );
    return;
  }
  //fireflies out, day in
  if (fireflies == true && night == false) {
    fireflies = false;
    alert( "fireflies out, day in video" );
    //play day in video with delay;
    return;
  }
  alert("no if ran fireflies out");
}

function playSunriseVideo() {
  alert( "sunrise" );
  loadAndPlayVideo(v2);
}

function playSunsetVideo() {
  alert( "sunset" );
}

function playRainbowVideo() {
  alert( "rainbow" );
}

function playWhaleVideo() {
  alert( "whale" );
}

function loadAndPlayVideo(videoVar) {
  var video = $("#v1");
  video.find("source").attr("src", videoVar);
  video.get(0).load();
  video.get(0).play();
}
