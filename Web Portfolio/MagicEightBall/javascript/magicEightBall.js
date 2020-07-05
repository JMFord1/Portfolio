function shake(){
  var roll = Math.floor(Math.random() * 6);
  var answers = ['ask again', 'believe me you don\'t want to know', 'maybe in another life, loser', 'definitely yes', 'definitely no', 'you\'re likely to be killed first']
  if(roll === 1){
    console.log(answers[0]);
  } else if(roll === 2){
    console.log(answers[1]);
  } else if(roll === 3){
    console.log(answers[2]);
  } else if(roll === 4){
    console.log(answers[3]);
  } else if(roll === 5){
    console.log(answers[4]);
  } else if(roll === 6){
    console.log(answers[5]);
  }
}


shake();