const tutorials = [];

function addTutorial(tutorial) {
  tutorials.push(tutorial);
  return tutorials;
}

function getTutorials() {
  return tutorials;
}

module.exports = { addTutorial, getTutorials };