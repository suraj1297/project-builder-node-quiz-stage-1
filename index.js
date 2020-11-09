const fs = require("fs")
const question = require('./questions')


// creating a json in question.json which has empty array
fs.writeFileSync("questions.json", JSON.stringify({ questions: [] }))

// reading question.json file
const questionsJson = JSON.parse(fs.readFileSync("questions.json"))

// calling qustion() which retuns object of question, options and answer and is appended to questions array 
questionsJson.questions.push(question())

// updating the json file after adding new question into array
fs.writeFileSync("questions.json", JSON.stringify(questionsJson))
