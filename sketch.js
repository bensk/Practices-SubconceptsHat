var sub_concepts = [
    "Decomposition",
    "Pattern Recognition",
    "Generalization and Detail Removal",
    "Modularity",
    "Interfaces",
    "Algorithm Design",
    "Control Flow",
    "Inputs, Variables and Outputs",
    "Application",
    "Languages",
    "Syntax",
    "Development Environments",
    "Collaboration",
    "Sensors and Datasets",
    "Data Abstraction and Storage",
    "Transformation and Visualization",
    "Feedback Loops and Automation",
    "Trust",
    "Protocols",
    "Physical Internet",
    "Markup",
]
var practices = [
    'prototype',
    'analyze',
    'communicate'
]



function setup() {
    createCanvas(windowWidth, windowHeight);
    hat = createP("🎩")
  
    hat.position(windowWidth/2-63, 0)
    hat.mousePressed(pickFromHat)
}

function draw() {

    textAlign(CENTER)
    textSize(32)
    text("Practices & Subconcepts", width / 2, 32);

}

function pickFromHat() {
    // console.log("hello")
    textAlign(CENTER)
    background("white");
    text(String(sub_concepts[floor(random(sub_concepts.length))]), windowWidth / 2, windowHeight / 2);
    text(String(practices[floor(random(practices.length))]), windowWidth / 2, windowHeight / 2 - 32);

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

// text(String(sub_concepts[floor(random(sub_concepts.length))]), windowWidth / 2, windowHeight / 2);