## Secret Messages

A secret government agencies communication has just been compromised. They have asked you to create a new encryption algorithm to ensure their communication stays secret.

### Objective

Create a algorithm to encode/decode messages using your knowledge of functions, conditionals, and loops.

### Prerequesites

- Bascic knowledge of functions
- Basic knowledge of conditionals
- Basic knowledge of for-loops
### Requirements

- Sublime Text

### Upon completing this project, students should understand:

- Functions
- If-else conditionals
- For-loops
- Function invokation

### Get started:

- Fork and Clone this repository
- Create the following files: secret_messages.js

#### Part 1: The encryption algorithm
- Use the following encryption algorithm below
```
a = 4
e = 3
i = 1
o = 0
```

#### Step 1 - Encoding function
- Declare a function called "encodeMsg" that takes in one parameter "message".
- Inside your function declare a variable called "encryptedMsg" and set it's value to an empty string. 
- Create a basic for-loop that will loop through the message being passed into your function.
- Inside your for-loop, write conditional statements that will compare the letters of the message to the encoding algorithm above. If the statement is truthy, it should add the corresponding numeric value for that letter to your encrytedMsg variable, otherwise if falsy, it should add the letter to your variable with no encryption.
##### Test your function
- Console.log your variable outside your for-loop.
- Invoke your function passing through this message "Javascript is amazing"
- run node secret_message.js in your terminal. If you wrote your conditionals correct, your output should be "J4v4scr1pt 1s Am4z1ng"

 #### Step 2 - Decoding function
- Following the pattern from your encodeMsg function, create a function called "decodeMsg" that takes in one parameter "message". This function should decrypt an encoded message. *** Think of how to reverse engineer your previous function you created.
##### Test your function
- Console.log your variable outside your for-loop.
- Invoke your function passing through this message "J4v4scr1pt 1s Am4z1ng"
- run node secret_message.js in your terminal. If you wrote your conditionals correct, your output should be "Javascript is Amazing"

### Stretch Goals
- Modify the encryption algorithm for every letter of the alphabet and rewrite your functions so your messages are encrypted even further.
