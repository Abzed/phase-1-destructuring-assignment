const farmAnimals = 'cow horse sheep pig chicken';

let animalArr = farmAnimals.split(' ')

const moo = animalArr[0]
const neigh = animalArr[1]
const baa = animalArr[2]
const oink = animalArr[3]
const cluck = animalArr[4]

const newAnArr = {...animalArr}

const bessie = animalArr[0]
const dolly = animalArr[2]
const babe = animalArr[3]
const little = animalArr[4]

const colorAnArr = {...newAnArr}

const blackAndWhite = colorAnArr[0]
const black = colorAnArr[2]
const pink = colorAnArr[3]


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors

const colorInit = {...colors}

const r = colorInit[0]
const o = colorInit[1]
const y = colorInit[2]
const g = colorInit[3]
const b = colorInit[4]
const v = colorInit[6]
const indg = colorInit[5]

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const {muppetName, color, song, job, partner} = muppet

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const newMappet = {...muppet}

newMappet.job = "Host of The Muppet Show"
const nestedJob = newMappet.job

newMappet.partner = "Miss Piggy"
const nestedPartner = newMappet.partner 

const newObj = {...nestedMuppet, ...newMappet}

const song2 = newObj.album.theMuppetMovie.song2
const song4 = newObj.album.theMuppetMovie.song4


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner