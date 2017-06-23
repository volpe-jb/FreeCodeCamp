quotes = ['When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt',
'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. - Henry James',
'Learning never enhausts the mind. - Leonardo da Vinci', 
'No act of kindness, no matter how small, is ever wasted. - Aesop', 
'If you cannot do great things, do small things in a great way. - Napoleon Hill', 
'Independence is happiness. - Susan B. Anthony', 
'Love has no age, no limit; and no death. - John Galsworthy', 
'There are two ways of spreading light: to be the candle or the mirror that reflects it. - Edith Wharton', 
'Whoever is happy will make others happy too. - Anne Frank', 
'A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell', 
'If your actions inspire others to dream more, learn more, do more and become more, you are a leader. - John Quincy Adams', 
'It\'s not what you look at that matters, it\'s what you see. - Henry David Thoreau', 
'Everything has beauty, but not everyone sees it. - Confucius', 
'How do you spell \'love\'? asks Piglet. You don\'t spell it...you feel it says Pooh',
'Promise me you\'ll always remember: You\'re braver than you believe, and stronger than you seem, and smarter than you think. - Pooh', 
'Sometimes, said Pooh, the smallest things take up the most room in your heart.', 
'Unless someone like you cares a whole awful lot, nothing is going to get better. It\'s not. - Dr. Seuss', 
'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss', 
'If you never did you should. These things are fun. And fun is good. - Dr. Seuss', 
'The more that you read, the more things you will know. The more that you learn, the more places you\'ll go. - Dr. Seuss', 
'There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind. - Fred Rogers', 
'If you could only sense how important you are to the lives of those you meet; how important you can be to the people you may never even dream of. There is something of yourself that you leave at every meeting with another person. - Fred Rogers'];

function newQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length); 
  
  var container = document.getElementById("quote");
  container.innerHTML = quotes[randomNum];

  var tweetQuote = quotes[randomNum].split(' ');
  $('.twitter-share-button').attr('data-text', tweetQuote);
  twttr.widgets.load()
}
