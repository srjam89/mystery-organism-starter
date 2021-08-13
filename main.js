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
    }
  }
}



};









