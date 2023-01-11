// const inputs = document.querySelectorAll("input")
// const arrows = document.querySelectorAll(".arrow")

// inputs,addEventListener("click", () => {
//     arrows.style.transform = 'rotate(180deg)';
// })

const inputs = document.querySelectorAll("input");
const arrows = document.querySelectorAll(".arrow");

inputs.forEach(input => {
    input.addEventListener("click", () => {
        arrows.forEach(arrow => {
            arrow.style.transform = 'rotate(180deg)';
        });
    });
});
