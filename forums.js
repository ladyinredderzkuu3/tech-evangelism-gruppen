const discussions = [];

function addDiscussion(discussion) {
  discussions.push(discussion);
  return discussions;
}

function getDiscussions() {
  return discussions;
}

module.exports = { addDiscussion, getDiscussions };