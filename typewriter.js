// typewriter.js
// Graeme Nickerson
// September 24, 2019

const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence, delay) {
  if (sentence[0]) {
    setTimeout(() => {
      process.stdout.write(sentence[0]);
      typewriter(sentence.slice(1), delay);
    }, delay);
  } else {
    console.log();
  }
};

typewriter(sentence, 50);
