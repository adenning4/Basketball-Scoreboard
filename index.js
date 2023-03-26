//aiming to use one function for score changes, the html passes in arguments to the function
function addScore(num, party) {
  //grab the object by concatenating the party name with "score"
  let ScoreObj = document.getElementById(party + "Score");
  //pull the number out
  let score = Number(ScoreObj.textContent);
  //increment the number by the first argument
  let newScore = score + num;
  //update the text content
  ScoreObj.textContent = newScore;
}
