// https://www.codewars.com/kata/the-hashtag-generator
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    let hashtag = str.split(" ").map((word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    hashtag = hashtag.join("")
    return hashtag.length >= 140 || hashtag.length === 0 ? false : `#${hashtag}`
}