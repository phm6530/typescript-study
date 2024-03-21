const view = document.getElementById("view");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

if (!view || !increment || !decrement) {
  throw new Error("One or more elements are missing.");
}

const func = () => {
  let num = 0;

  const updateView = () => {
    view.textContent = num.toString();
  };

  updateView();

  return {
    increment: () => {
      ++num;
      updateView();
    },
    decrement: () => {
      --num;
      updateView();
    },
  };
};

const count = func();

increment.addEventListener("click", count.increment);
decrement.addEventListener("click", count.decrement);
