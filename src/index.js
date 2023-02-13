module.exports = function reverse (n) {
  let newN = n;  
  if(n < 0) {
    newN = n * (-1);
  } else if(n % 10 == 0) {
    newN = n / 10;
  }
  let arr = (String(newN)).split('');
  return arr.reverse().join('');
}
