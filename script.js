document.getElementById('generate').addEventListener('click', () => {

  let length = 0
  let lowercase = 0
  let uppercase = 0
  let numeric = 0
  let special = 0

  do {



    do {
      length = parseInt(prompt("Choose password length (8-128)"))
    } while (length < 8 || length > 128);


    do {
      lowercase = parseInt(prompt("Would you like to include lowercase charachters? (1 for yes, 0 for no)"))
    } while (lowercase < 0 || lowercase > 1);


    do {
      uppercase = parseInt(prompt("Would you like to include uppercase charachters? (1 for yes, 0 for no)"))
    } while (uppercase < 0 || uppercase > 1);

    do {
      numeric = parseInt(prompt("Would you like to include numbers? (1 for yes, 0 for no)"))
    } while (numeric < 0 || numeric > 1);


    do {
      special = parseInt(prompt("Would you like to include special characters? (1 for yes, 0 for no)"))
    } while (special < 0 || special > 1);
    if (lowercase == 0 && uppercase == 0 && numeric == 0 && special == 0) {
      alert('You must select at least one of the options!')
    }
  } while (lowercase == 0 && uppercase == 0 && numeric == 0 && special == 0);
  let choices = [lowercase, uppercase, numeric, special]
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let specChar = ["!", "@", "#", "$", "%", "&", "*"]
  let password = ''
  let index = 0
  let lowChar = ''
  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * 4)
    if (lowercase == 1 && char == 0) {
      index = Math.floor(Math.random() * alphabet.length)
      lowChar = alphabet[index]
      password += lowChar

    }
    else if (uppercase == 1 && char == 1) {
      index = Math.floor(Math.random() * alphabet.length)
      let upperChar = alphabet[index]
      password += upperChar.toUpperCase()

    } else if (numeric == 1 && char == 2) {
      index = Math.floor(Math.random() * numbers.length)
      let num = numbers[index]
      password += num
    }
    else if (special == 1 && char == 3) {
      index = Math.floor(Math.random() * specChar.length)
      let specialChar = specChar[index]
      password += specialChar
    }
    else {
      i--
    }
  }
  console.log(password)
  document.getElementById('password').innerText = password

})
