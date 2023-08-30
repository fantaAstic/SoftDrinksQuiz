console.log("script running");

let pictures = document.querySelectorAll(".card-image");

let quiz = {
  color: ["Tropical", "Lemonade", "Tropical", "Lemonade"], //Question 1 -- each characteristic relates to a choice
  vacation: ["Orange", "Berries", "Orange", "Berries"], //Question 2
  pizza: ["Lemonade", "Tropical", "Lemonade", "Tropical"], //Question 3
  house: ["Berries", "Orange", "Berries", "Orange"], //Question 4
  fruit: ["Tropical", "Lemonade", "Tropical", "Lemonade"], //Question 5
  activity: ["Orange", "Berries", "Orange", "Berries"], //Question 6
};

let quizTaker = {
  Tropical: 0,
  Lemonade: 0,
  Orange: 0,
  Berries: 0,
};

pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    let choice = picture.id.split("-");
    console.log(choice);

    picture.classList.toggle("has-background-light");
    picture.classList.toggle("has-background-warning");

    let answer = quiz[choice[0]][choice[1]];
    quizTaker[answer]++;

    if (choice[0] === "activity") {
      let resultID;

      if (quizTaker.Tropical > quizTaker.Lemonade) {
        resultID = "#Tropical-";
      } else {
        resultID = "#Lemonade-";
      }

      if (quizTaker.Berries > quizTaker.Orange) {
        resultID += "Berries";
      } else {
        resultID += "Orange";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
    }
  });
});
