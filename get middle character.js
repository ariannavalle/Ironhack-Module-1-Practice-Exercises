// https://www.codewars.com/kata/56747fd5cb988479af000028
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s)
{
  for (let i =0; i < s.length; i++) {
    if (s.length % 2 === 0) return s[s.length/2-1] + s[s.length/2]
    else return s[s.length/2-.5]
  } 
}

/* best practice 
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
*/
