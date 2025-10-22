/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n The number to calculate the factorial of.
 * @returns {number} The factorial of n.
 */
function calculateFactorialValue(n) {
  // Check for non-negative integers
  if (n < 0 || !Number.isInteger(n)) {
    return NaN; // Not a number, indicates error
  }
  if (n === 0) {
    return 1;
  }

  let result = 1;
  // Use a for loop as suggested in the guidelines
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Main function to read input, calculate factorial, and display output.
 */
function calculateFactorial() {
  // Get the input element and value
  const inputElement = document.getElementById('inputNumber');
  const outputElement = document.getElementById('output');
  const inputVal = inputElement.value;
  const number = parseInt(inputVal);

  // Clear previous output and input, and set default styling
  outputElement.textContent = '';
  outputElement.classList.remove('error-output');
  outputElement.classList.remove('success-output');

  if (isNaN(number) || inputVal.trim() === '') {
    // Handle empty or non-numeric input
    outputElement.textContent = 'Please enter a valid non-negative integer.';
    outputElement.classList.add('error-output');
    return;
  }

  if (number < 0) {
    // Handle negative input
    outputElement.textContent = 'Factorial is not defined for negative numbers.';
    outputElement.classList.add('error-output');
    return;
  }

  const factorialResult = calculateFactorialValue(number);

  // Format the output as requested: 3! = 6
  outputElement.textContent = `${number}! = ${factorialResult}`;
  outputElement.classList.add('success-output');
}

/**
 * Logic for handling Bootstrap's light and dark mode toggling.
 * This is based on standard Bootstrap theme-toggling patterns.
 */
(function () {
  const storedTheme = localStorage.getItem('theme');
  const body = document.body;

  // Function to set the theme on the <body> tag and localStorage
  const setTheme = (theme) => {
    if (theme === 'dark' || theme === 'light') {
      body.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
    }
  };

  // Initialize theme from localStorage or default to 'dark'
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    // Default to 'dark' mode as per the visual example
    setTheme('dark');
  }

  // Add event listeners to the Dark and Light buttons
  document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-bs-theme-value');
      setTheme(theme);
    });
  });
})();