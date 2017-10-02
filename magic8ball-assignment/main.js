
var answers = [
  'There is a good chance.', 'Quite likely.', 'I think so.', 'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
  'Sorry, bucko.', 'I would rather not say.', 'Who cares?',
  'Possibly.', 'Never, ever, ever.','Hell, yes.', 'Hell to the no.', 'The future is bleak.',
  'The future is uncertain.', 'There is a small chance.', 'Yes!'];

document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};
