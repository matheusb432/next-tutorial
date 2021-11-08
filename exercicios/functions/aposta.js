// ? adapted function to get array of digits size with each item being a number of 1 or 2 digits
export function getAposta(digits) {
  const joinedBet = [];
  let currentBet = '';
  const betLength = 2;

  do {
    const randomNum = Math.random();

    const currentDigits = Math.min(digits, betLength);

    const mult = Math.pow(10, currentDigits);

    currentBet = `${Math.floor(randomNum * mult)}`;

    joinedBet.push(currentBet);

    digits -= 1;
  } while (digits > 0);

  return joinedBet;
}

/**
 * * Gets 14 by 14 random digits to join a huge string, this method allows for generating random
 * * numbers that are bigger than JS's Infinity limit.
 * @param digits the number of digits that the generated random number string will have
 * @returns the joined bet with a string of random numbers with 'digits' length
 */
export function getApostaString(digits) {
  let joinedBet = '';
  let currentBet = '';
  const betLength = 14;

  do {
    const randomNum = Math.random();

    const currentDigits = Math.min(digits, betLength);

    const mult = Math.pow(10, currentDigits + getZeroCount(randomNum));

    currentBet = `${Math.floor(randomNum * mult)}`;

    joinedBet += currentBet;

    digits -= currentDigits;
  } while (digits > 0);

  return joinedBet;
}

function getZeroCount(num) {
  let count = 0;
  let i = 2;
  const str = `${num}`;

  while (str[i] === '0') {
    count++;

    i++;
  }
  return count;
}
