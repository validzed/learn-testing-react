function detectTriangle(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Input must be a number');
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Input must be a positive number');
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error('Input is triangle inequality violation');
  }
}

module.exports = detectTriangle;
