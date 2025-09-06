const events = [];

function addEvent(event) {
  events.push(event);
  return events;
}

function getEvents() {
  return events;
}

module.exports = { addEvent, getEvents };