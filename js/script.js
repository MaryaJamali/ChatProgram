// Set possible answers
const answerArray = [
    "Maybe maybe not", "Probably Not", "I Don't Know", "It's hard to say", "It's possible", "Likely not",
    "It's uncertain", "It's unlikely", "It's probable", "There's a chance", "It's doubtful", "It depends", "Possibly",
    "Not necessarily", "I'm not sure", "There's a slim chance", "There's no clear answer", "I'm uncertain", "It will work",
];
// Find page elements
const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");
// Add event to button
button.addEventListener("click", function () {
    let response = Math.floor(Math.random() * answerArray.length);
    message.innerHTML = "<p> You : " + question.value + "</p><br/>" + "<p> ChatProgram : " + answerArray[response] + " .... " + "</p>";
    // After finishing the question, the question box should be empty
    question.value = "";
});
