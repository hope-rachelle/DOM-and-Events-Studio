// Write your JavaScript code here.
// Remember to pay attention to page loading!
function initilize(){
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let status = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketPosition = document.getElementById("rocket");
    let rocketPositionTop = document.getElementById("rocket");
    rocketPositionTop.style.top = "90px";
    let rocketPositionLeft = document.getElementById("rocket");
    rocketPositionLeft.style.left = "0px";
    
    function takeOff(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response == true){
            status.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            rocketPosition.style.top = "0px";
        }
    }
    function landing(){
        alert("The shuttle is landing. Landing gear engaged.");
            status.innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocketPosition.style.top = "200px"; 
    }
    function abort(){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response == true){
            status.innerHTML = "Mission Aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocketPosition.style.top = "90px"; 
        }
        if (response == false){
            status.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            rocketPosition.style.top = "0px";
        }
    } 
    
    function moveUp() {
        if(rocketPosition.style.top > "0px"){
        let move = parseInt(rocketPosition.style.top) -10 + "px";
        rocketPosition.style.top = move;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;}
    }
    function moveDown(){ 
        let move = parseInt(rocketPosition.style.top) +10 + "px";
        rocketPosition.style.top = move;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    }
    function moveRight(){  
        let move = parseInt(rocketPosition.style.left) +10 + "px";
        rocketPosition.style.left = move;
    }
    function moveLeft(){    
        let move = parseInt(rocketPosition.style.left) -10 + "px";
        rocketPosition.style.left = move;
    }
        

    takeOffButton.addEventListener('click', takeOff);
    landButton.addEventListener('click', landing);
    abortButton.addEventListener('click', abort);
    document.getElementById("up").addEventListener('click', moveUp);
    document.getElementById("down").addEventListener('click', moveDown);
    document.getElementById("right").addEventListener('click', moveRight);
    document.getElementById("left").addEventListener('click', moveLeft);
    
}


window.addEventListener("load", initilize);