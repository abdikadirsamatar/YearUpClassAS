function generateIcebreaker() {
  const questions = [
    "What's your favorite way to unwind after a long day of coding?",
    "What hobby would you get into if time and money weren't an issue?",
    "What's the last book you read or movie you watched that you really enjoyed?",
    "If you could visit any country in the world, where would you go and why?",
    "What's one skill you'd like to develop or hobby you'd like to take up?",
    "What's the most memorable vacation you've ever had?",
    "If you could have dinner with any historical figure, who would it be and why?",
    "What's your favorite season of the year and why?",
    "What’s your favorite dish to cook or eat?",
    "If you could instantly become an expert in something, what would it be?",
    "What's one book you think everyone should read?",
    "What's a skill you learned when you were younger that you still use today?",
    "What’s the most interesting documentary you've ever seen?",
    "If you had to choose only one app on your phone, which one would it be?",
    "What’s your go-to karaoke song?",
    "If you could be any animal for a day, which one would you be and why?",
    "What's your favorite memory from childhood?",
    "What's something you've done that you're really proud of?",
    "What's one goal you have for the next year?",
    "What's a piece of advice you've received that has stuck with you?",
    "What fictional character do you wish you could meet in real life?",
    "What’s one city you’ve visited that surprised you the most?",
    "What’s your favorite way to spend a weekend?",
    "What's the best concert or live event you’ve ever attended?",
    "What’s one language you wish you could speak fluently?",
    "What’s the best gift you’ve ever received?",
    "What’s the last thing you created?",
    "What’s your favorite quote or saying?",
    "What’s one thing you’re excited about that’s coming up in 2023?",
    "If you could master one musical instrument, what would it be?",
    "What’s the funniest thing that happened to you recently?",
    "What’s your favorite tradition or holiday?",
    "If you could switch lives with one person for a day, who would it be?",
    "What’s something you used to do as a child that you miss?",
    "What’s the most daring experience you’ve ever had?",
    "If you could learn any skill in an instant, what would it be?",
    "What's something you've always wanted to try but haven't yet?",
    "What’s your favorite board game or card game?",
    "Who’s someone you really admire?",
    "What’s a common misconception about your job or hobby?",
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = questions[index];
}

function SayMyName(mysecretcode) {
  let myname = document.getElementById("myName").value;
  console.log(myname);
  alert(`Hi ${myname} - ${mysecretcode}`);
}
// Example usage:

// Define calculation functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return number1 / number2;
}

// Calculate result
function calculate(operation) {
  // Get input values
  let number1 = Number(document.getElementById("numberOne").value);
  let number2 = Number(document.getElementById("numberTwo").value);

  // Validate input
  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers");
    return;
  }

  let result;
  try {
    // Perform calculation based on selected operation
    switch (operation) {
      case "add":
        result = add(number1, number2);
        break;
      case "subtract":
        result = subtract(number1, number2);
        break;
      case "multiply":
        result = multiply(number1, number2);
        break;
      case "divide":
        result = divide(number1, number2);
        break;
      default:
        throw new Error("Invalid operation");
    }

    // Display result
    document.getElementById("result").innerHTML = result;
  } catch (error) {
    alert(error.message);
  }
}
