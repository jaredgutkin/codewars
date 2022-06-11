// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    let name = str.split(" ")
    return [name[1], name[0]].join(" ")
  }

  //alt solution
  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }