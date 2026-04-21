const btn = document.getElementById('btn');
const quoteText = document.querySelector('div p')

const quotes = [
  "One should as a rule respect public opinion in so far as is necessary to avoid starvation and to keep out of prison, but anything that goes beyond this is voluntary submission to an unnecessary tyranny, and is likely to interfere with happiness in all kinds of ways.",
  "No problem is too small or too trivial if we can really do something about it.",
  "If the facts don't fit the theory, change the facts.",
  "The reward for conformity was that everyone liked you except yourself.",
  "Skiing combines outdoor fun with knocking down trees with your face.",
  "The past is not dead. In fact, it's not even past.",
  "God, I don’t have great faith, but I can be faithful. My belief in you may be seasonal, but my faithfulness will not. I will follow in the way of Christ. I will act as though my life and the lives of others matter. I will love. I have no greater gift to offer than my life. Take it.",
  "Readers are plentiful; thinkers are rare.",
  "We inherit from our ancestors gifts so often taken for granted... Each of us contains within... this inheritance of soul. We are links between the ages, containing past and present expectations, sacred memories and future promise.",
  "It is difficult to produce a television documentary that is both incisive and probing when every twelve minutes one is interrupted by twelve dancing rabbits singing about toilet paper.",
  "I wrote myself a check for ten million dollars for acting services rendered and dated it Thanksgiving 1995. I put it in my wallet and it deteriorated. And then, just before Thanksgiving 1995, I found out I was going to make ten million dollars for Dumb & Dumber. I put that check in the casket with my father because it was our dream together.",
  "Anger makes you smaller, while forgiveness forces you to grow beyond what you were.",
  "The man who reads nothing at all is better educated than the man who reads nothing but newspapers.",
  "I'm not going to quit. Why should I quit? This country is worth fighting for.",
  "You can't wait for inspiration. You have to go after it with a club.",
  "Don't believe in imagining things different from what they really are. When the Lord puts us in certain circumstances He doesn't mean for us to imagine them away.",
  "Things could always be worse; for instance, you could be ugly and work in the Post Office.",
  "It is the unknown we fear when we look upon death and darkness, nothing more.",
  "He deserves Paradise who makes his companions laugh.",
  "Traditions are the guideposts driven deep in our subconscious minds. The most powerful ones are those we can't even describe, aren't even aware of."
];

const quotesObj = {
  "Bertrand Russell": "One should as a rule respect public opinion in so far as is necessary to avoid starvation and to keep out of prison, but anything that goes beyond this is voluntary submission to an unnecessary tyranny, and is likely to interfere with happiness in all kinds of ways.",
  "Richard Feynman": "No problem is too small or too trivial if we can really do something about it.",
  "Albert Einstein": "If the facts don't fit the theory, change the facts.",
  "Rita Mae Brown": "The reward for conformity was that everyone liked you except yourself.",
  "Dave Barry": "Skiing combines outdoor fun with knocking down trees with your face.",
  "William Faulkner": "The past is not dead. In fact, it's not even past.",
  "Gordon Atkinson": "God, I don’t have great faith, but I can be faithful. My belief in you may be seasonal, but my faithfulness will not. I will follow in the way of Christ. I will act as though my life and the lives of others matter. I will love. I have no greater gift to offer than my life. Take it.",
  "Harriet Martineau": "Readers are plentiful; thinkers are rare.",
  "Edward Sellner": "We inherit from our ancestors gifts so often taken for granted... Each of us contains within... this inheritance of soul. We are links between the ages, containing past and present expectations, sacred memories and future promise.",
  "Rod Serling": "It is difficult to produce a television documentary that is both incisive and probing when every twelve minutes one is interrupted by twelve dancing rabbits singing about toilet paper.",
  "Jim Carrey": "I wrote myself a check for ten million dollars for acting services rendered and dated it Thanksgiving 1995. I put it in my wallet and it deteriorated. And then, just before Thanksgiving 1995, I found out I was going to make ten million dollars for Dumb & Dumber. I put that check in the casket with my father because it was our dream together.",
  "Cherie Carter-Scott": "Anger makes you smaller, while forgiveness forces you to grow beyond what you were.",
  "Thomas Jefferson": "The man who reads nothing at all is better educated than the man who reads nothing but newspapers.",
  "Hillary Rodham Clinton": "I'm not going to quit. Why should I quit? This country is worth fighting for.",
  "Jack London": "You can't wait for inspiration. You have to go after it with a club.",
  "L. M. Montgomery": "Don't believe in imagining things different from what they really are. When the Lord puts us in certain circumstances He doesn't mean for us to imagine them away.",
  "Adrienne E. Gusoff": "Things could always be worse; for instance, you could be ugly and work in the Post Office.",
  "J. K. Rowling": "It is the unknown we fear when we look upon death and darkness, nothing more.",
  "Anonymous": "He deserves Paradise who makes his companions laugh.",
  "Ellen Goodman": "Traditions are the guideposts driven deep in our subconscious minds. The most powerful ones are those we can't even describe, aren't even aware of."
};


// btn.addEventListener('click', () => {
//     let randomNum = Math.trunc(Math.random() * quotes.length)
//     // console.log(randomNum);
    
//     quoteText.textContent = quotes[randomNum]
// })

btn.addEventListener('click', () => {
  fetchDadJoke()

})

async function fetchDadJoke() {
  quoteText.textContent = '...Loading';
  const url = 'https://icanhazdadjoke.com/'
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    })
    if(!response.ok) return `Errorr`;
    const data = await response.json()
    quoteText.textContent = data.joke;
  } catch (error) {
    console.log(error)
    quoteText.textContent = 'There was an error...';
  }
}