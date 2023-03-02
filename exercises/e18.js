import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const greatestAsteroid = data.asteroids.reduce((acc, value) => {
    acc[value.discoveryYear] = (acc[value.discoveryYear] || 0) + 1;
    return acc;
  }, {});

  let year = "";
  let maxValue = 0;
  for (let [key, val] of Object.entries(greatestAsteroid)) {
    if (val > maxValue) {
      maxValue = val;
      year = key;
    }
  }
  return parseInt(year);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
