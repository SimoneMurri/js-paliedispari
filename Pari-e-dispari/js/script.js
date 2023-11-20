
function genratorRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return (randomNumber);
  }

  function evenOdd(sum) {
    return sum % 2 === 0 ? 'even' : 'odd'; 
  }
  

function evenOddGame(userSelect, userNumber) {
    if (userNumber < 1 || userNumber > 5) {
      return 'Choose a number between 1 and 5';
    }

    const computerNumber = genratorRandomNumber();
    console.log("The computer chose", (computerNumber));
  
    const sum = userNumber + computerNumber;
    console.log("The sum of the number is", (sum));
  
    const result = evenOdd(sum);
    console.log("The result of the sum is", (result));
  
    if (result === userSelect) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
}
const userSelect = 'even'; 
const userNumber = 3;

const gameResult = evenOddGame(userSelect, userNumber);
console.log(gameResult);