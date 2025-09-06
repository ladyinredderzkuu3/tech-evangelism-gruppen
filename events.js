const events = [];

function addEvent(event) {
  if (!event || typeof event !== 'object') {
    throw new Error('Invalid event.');
  }
  events.push(event);
  return events;
}

function getEvents() {
  return events;
}

module.exports = { addEvent, getEvents };