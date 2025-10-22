function calculateFactorial() {
  const num = parseInt(document.getElementById("number").value);
  const output = document.getElementById("output");

  if (isNaN(num) || num < 0) {
    output.innerHTML = "Please enter a non-negative number.";
    return;
  }

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  output.innerHTML = `${num}! = ${result}`;
}

// Dark/Light mode toggle
document.querySelectorAll("[data-bs-theme-value]").forEach(button => {
  button.addEventListener("click", e => {
    const theme = e.target.getAttribute("data-bs-theme-value");
    document.body.setAttribute("data-bs-theme", theme);
  });
});
