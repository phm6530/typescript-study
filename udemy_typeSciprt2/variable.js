var view = document.getElementById("view");
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
if (!view || !increment || !decrement) {
    throw new Error("One or more elements are missing.");
}
var func = function () {
    var num = 0;
    var updateView = function () {
        view.textContent = num.toString();
    };
    updateView();
    return {
        increment: function () {
            ++num;
            updateView();
        },
        decrement: function () {
            --num;
            updateView();
        },
    };
};
var count = func();
increment.addEventListener("click", count.increment);
decrement.addEventListener("click", count.decrement);
