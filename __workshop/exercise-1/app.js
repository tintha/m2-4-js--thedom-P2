// Preset values
const FROGS = 3;

// Exercise 1.1 - Set up the track
for (let count = 1; count <= FROGS; count++) {
    // create a lane (<li>)
    let lane = document.createElement("li");
    // give lane an id
    lane.id = count;
    // create a <span>
    let laneNumber = document.createElement("span");
    // add the lane number to the span
    laneNumber.innerText = count;
    // append the span to the lane
    lane.appendChild(laneNumber);
    // append the lane to the track
    let track = document.getElementById("track");
    track.appendChild(lane);
    
  }

// Exercise 1.2 - Call in the frogs!
// declare a variable called racers and assign a value of: empty array

const racers = [];

// write a for loop
// push a frog from frogstable into racers array
for (let i = 0; i < FROGS; i++) {
  racers.push(frogstable[i]);
}

// console.log racers
//console.log(racers);

// Exercise 1.3 - Line 'em up!
racers.forEach(lineEmUp);

function lineEmUp(frog, index) {
  frog.lane = `lane-${index+1}`;
  document.getElementById(index+1).innerHTML += `<span style="background-color:${frog.color}" class="frog" id="${frog.lane}">(${frog.number})</span><span class="frog-name">${frog.name}</span>`;
  frog.progress = 0;
  
}

function racingFrog(racer) {
  // Calculate the hop distance (as a percentage of the `trackWidth`) with the following formula.
  const trackWidth = track.offsetWidth;
  const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);

  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    // add hopLength to progress
    racer.progress += hopLength;

    // add a console log to verify
    //console.log(racer.name + " is at " + racer.progress);
    document.querySelector(`#${racer.lane}.frog`).style.left = `${racer.progress}%`;

    // clearInterval when progress goes beyond 100
    if (racer.progress >= 100) {
      racer.progress = 100;
      clearInterval(hop);
      console.log(racer.name + " has finished!");
  }

  }, Math.random() * 1000);
  

 console.log("racingFrog() ", racer);
}


racers.forEach(racingFrog);
