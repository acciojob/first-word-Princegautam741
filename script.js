function firstWord(s) {
  if (typeof s !== 'string' || s.length === 0) {
    return s; // Return the entire string for empty or non-string inputs
  }

  // Trim leading and trailing spaces
  s = s.trim();

  // Find the index of the first space
  const spaceIndex = s.indexOf(' ');

  if (spaceIndex === -1) {
    return s; // Return the entire string if there's no space
  }

  // Extract and return the first word
  return s.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
