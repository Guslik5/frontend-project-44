import readlineSync from "readline-sync";
import pkg from "lodash/number.js";
import pkg2 from "lodash/string.js";
import pkg3 from "lodash/lang.js";
const {toString} = pkg3
const {parseInt} = pkg2
const {random} = pkg;

function generateProgression(){
    let first = random(0, 100)
    let step = random(0, 100)
    let arr = [first]
    let lengthProgression = random(5, 10);

    for (let i = 1; i < lengthProgression; i++){
        arr.push(arr[i-1] + step)
    }
    return arr
}

function playGameProgression(){
    console.log("What number is missing in the progression?")
    for (let i = 0; i < 3; i++) {
        let progression = generateProgression()
        let position = random(0, progression.length-1)
        let result = progression[position]
        let question = []
        for (let i = 0; i < progression.length; i++){
            if (progression[i] === result) {
                question.push("..")
                continue;
            }
            question.push(toString(progression[i]))
        }
        console.log(`Question: ${question.join(",")}`)
        let answerUser = parseInt(readlineSync.question('Your answer: '))
        if (result !== answerUser){
            console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again`)
            return
        }
        console.log("Correct!")
    }
    console.log("Congratulations")
}

export default playGameProgression