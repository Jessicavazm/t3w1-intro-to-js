function breakWhenPrivate(array) {
  for (let word of array ) {
    if (word === "PRIVATE") {
      break
    }
    console.log(word)
  }
}

breakWhenPrivate(["cat", "dog", "PRIVATE", "fish", "elephant"])
