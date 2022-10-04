"use strict";

const me = {
  name: "Brandon Douglas",
  age: 26,
  birthday: "June 16",
  pineapplePizza: true,
  lifeEvents: [
    "I grew up in PNG",
    "I moved back the the US",
    "I attended Cornerstone University",
    "I started dating Brac",
  ],
};

if (me.pineapplePizza === true) {
  console.log(
    `My name is ${me.name} and I like pineapples on pizza. I am currently ${me.age} years old and my birthday is on ${me.birthday}.`
  );
} else {
  console.log(
    `My name is ${me.name} and I'm not into pineapples on pizza. I am currenlty ${me.age} years old and my birthday is on ${me.birthday}.`
  );
}

/* This one is off, come back to it
let i = me.lifeEvents;
for (let i = 0; i < 5; i++) {
  console.log(me.lifeEvents);
}
*/

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
