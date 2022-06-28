import "./style.css";

window.onload = () => {
  document.querySelector("#new-excuse").addEventListener("click", () => {
    document.querySelector("#la-excusa").innerHTML = generateExcuse();
  });
};

let randomNumber = () => {
  let selector1 = Math.random() * 5;
  let selector2 = Math.floor(selector1);
  return selector2;
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird", "Your teacher"];
  let action = ["ate", "peed", "crushed", "broke", "burned"];
  let what = ["my homework", "the keys", "the car", "my mom", "the house"];
  let when = ["this morning", "the other day", "just then"];
  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    ".";

  return excuse;
};
