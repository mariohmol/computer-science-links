
// const questions = 'Implement somethign...  ';
// const result =  10;

// const userInput = 'let x=11; return x;'
// let input = `() => { ${userInput} }`;
// const userResult = eval(input)
// const passed = userResult() === result;

function func(a, b) {
  console.log(this, a, b);
}

// func(1,2);

// const newfunc = func.bind(123);

// newfunc(1,2);

// const newfunc2 = func.bind(this, 10);

// newfunc2(1);

const newfunc3 = func.bind({ name: 'mario' }, 10, 22);
newfunc3();

this.setCurrentFeedback = this.setCurrentFeedback.bind(this);
Game.setCurrentFeedback = Game.setCurrentFeedback.bind(Game);

// WITH BIND
this.setCurrentFeedback = this.setCurrentFeedback.bind(this);
setCurrentFeedback(){
  console.log(this); //console.log(Game)
}

// Without BIND
setCurrentFeedback(){
  console.log(this); //console.log(GuessForm)
}

// Class Game
const marioGame = new Game(); // this.setCurrentFeedback = this.setCurrentFeedback.bind(marioGame);
const RPGame = new Game(); // this.setCurrentFeedback = this.setCurrentFeedback.bind(RPGame);


// Counting lines
// 1 + 1 + n(1 + 1) + 1 + 1 = 2 + 2n + 2 =  2n + 4 = 2n = n
function abc(n){
  i = 10;              // 1
  i= 10 * i;           // 1
  for(j=0;j<n;j++){    // n
    i*=j;              // 1
    i+=2;              // 1
  }
  console.log(i);     // 1
  return i;           // 1
}

// n * (1 +1 + n ( 1 + 1)) = n2 n*n + 2 = n * n = n ^ 2
for(j=0;j<n;j++){    // n
  i*=j;              // 1
  i+=2;              // 1
  for(j=0;j<n;j++){    // n
    i*=j;              // 1
    i+=2;              // 1
  }
}

function checkParentesis(str) {
    const letters = str.split('')
    let close = 0;
    let open = 0;
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i]
        if(letter == '(') {
            open++
        }
        if(letter == ')' && open == 0) {
            return false;
        }
        if (letter == ')') {
            open--
        }
    }
    return open == 0;
}

checkParentesis('a + b*(a +1)') // true
checkParentesis('a + b*(a +1') // false
checkParentesis(')a + b*(a +1)(') // false
