// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, bases) => {
  return {
    specimenNum: num,
    dna: bases,
    mutate() {
      // randomly selecting a base in object's dna property
      let i = Math.floor(Math.random() * this.dna.length);

      // saving the selcted base to a variable
      let currentBase = this.dna[i];
      let altBases = ['A', 'T', 'C', 'G'];
      altBases.splice(altBases.indexOf(currentBase), 1); // find and remove current base
      let mutatedBases = altBases[Math.floor(Math.random() * 3)]; // randomly selecting from remainging bases

      return this.dna.splice(i, 1, mutatedBases);
    },
    compareDNA(otherpAequor) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherpAequor.dna[i]) {
          count +=1;
        } // iterate through both arrays and add count for every element that's the same
      }
        count = Math.floor((count / this.dna.length) * 100); //calculates percentage of identical bases
        console.log(`specimen #1 ${this.specimenNum} and specimen #2 ${otherpAequor.specimenNum} have ${count}% DNA in common`);
      },
      willLikelySurvive() {
      const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');

      if (cAndG.length/this.dna.length > 0.6) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let smaple = [];
let instance = 0;
while (smaple.length <= 30) {
  let temp = pAequorFactory(instance, mockUpStrand());
  if (temp.willLikelySurvive() === true) {
    smaple.push(temp);
    instance +=1;
  }
};



      
