"use strict";

/* It may be easier, and work better, to have all these declared seperately. Lets start over
let me = {
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

// This one is off, come back to it
let i = me.lifeEvents;
for (let i = 0; i < 5; i++) {
  console.log(me.lifeEvents);
}

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
After this starts our newly attempted code following review in class */

const name = "Brandon Douglas";
let age = 26;
const birthday = "June 6";
let pineapplePizza = true;
const lifeEvents = [
  "I grew up in PNG",
  "I moved back the the US",
  "I attended Cornerstone University",
  "I started dating Brac",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currenlty ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
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

/* if(condition -- decision/ fork in the road) {
    if condition is true, code in this block is executed
} else if (another condition) {
  if the first condition is false, and this one is true, this code will be executed
} else {
  else's default condition is that all other chained conditions evaluate to false
}
} */

//extended challenge

let hours = 50;
let wage = 10;
let paycheck = 40 * wage;

if (hours > 40) {
  let overtimeHours = hours - 40;
  let overtimePay = overtimeHours * wage * 1.5;
  paycheck += overtimePay;
  // shorthand:
  // paycheck += (hours -40) * (wage *1.5);
}
console.log(paycheck);

let weeks = 0;
// Math.ceil() rounds up for us
weeks = Math.ceil(1000000 / paycheck);

console.log(`It would take ${weeks} weeks to earn one million bucks!`);
