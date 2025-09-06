const tutorials = [];

function addTutorial(tutorial) {
  tutorials.push(tutorial);
  return `Tutorial '${tutorial}' has been added.`;
}

function getTutorials() {
  return tutorials;
}

module.exports = { addTutorial, getTutorials };