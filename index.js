// function to generate a random number(used to get a random index from inspirations array)

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num);
};


// an array full of random inspirations
const inspiration ={
    firstComp: ['cool', 'handsome', 'pretty', 'strong'],
    futureOutcome: ['be the best ', 'succeed', 'overcome your problems', 'be fulfilled'],
    lastComp: ['a hero', 'a legend', 'a godly', 'powerful']}


// to store a single value from each key of inspirations
let personalInspiration = [];

// iterating over inspirations and storing a random value to be used later
for (let comp in inspiration){
   let randomComp = generateRandomNumber(inspiration[comp].length);

   //to customize a message for each value from inspirations 

   switch(comp) {
    case 'firstComp':
        personalInspiration.push(`you are very ${inspiration[comp][randomComp]}`)
        break
    case 'futureOutcome':
        personalInspiration.push(`One day you will ${inspiration[comp][randomComp]}`)
        break
    case 'lastComp':
        personalInspiration.push(`and be known as ${inspiration[comp][randomComp]}`)
        break
    default :
        personalInspiration.push("There isnt enough info")

   }

}


const formatInspiration = arr => {
    const formatted = personalInspiration.join('\n')
    console.log(formatted)
}

formatInspiration(personalInspiration);