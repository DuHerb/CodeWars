// Convert number to reversed array of digits
// Given a random number, you have to return the digits
// of the number within an array in reverse order
// Example:
// 34567 => [7,6,5,4,3]

export function digitize(n) {
  return n.toString().split('').reverse().map(num=>parseInt(num));
}