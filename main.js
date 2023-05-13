// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};
// console.log(returnRandBase());

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(mockUpStrand());

// function with two parameters that takes number and an array of 15 DNA bases
const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    // mutating randomly selected base
    mutate() {
      // randomly selected index number
      let randomIndex = Math.floor(Math.random * this.dna.length);
      // callback function to randomly choose a base
      let newBase = returnRandBase();
      // looping through dna array and randomly selecting a base from it
      while (this.dna[randomIndex] === newBase) {
        // it will keep looping until it finds a different base than newBase
        newBase = returnRandBase();
      }
      // when newBase is diffrent it changes the randomly selected base from dna array to newBase
      this.dna[randomIndex] = newBase;
      return this.dna;
    },

    // method to compare passed dna to a given dna
    compareDNA(pAequor) {
      // to count how many instances this.dna bases matches with pAequor bases
      let matchingBase = 0;
      // looping through the given dna
      for (let i = 0; i < pAequor.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          matchingBase++;
        }
      }
      // finding the percentage of dna that the two objects have in common
      let matchingPercentage = (100 * matchingBase) / pAequor.length;
      console.log(
        `Speciman #1 and Speciman #2 have ${matchingPercentage}% DNA in common`
      );
    },

    // method returns true if 60% of the dna strand is 'C' or "G"
    willLikelySurvive() {
      // to count how many times "C" or "G" occurs
      let matchingCorG = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          matchingCorG++;
        }
      }
      // finding the percentage of the occurence
      let matchingPercentageOfCorG = (matchingCorG * 100) / dna.length;
      // if the percentage above 60 returns true otherwise false
      if (matchingPercentageOfCorG >= 60) {
        return true;
      } else {
        return false;
      }
    },

    // method that returns complementary DNA strand of this.dna
    complementStrand() {
      let compDNAStrand = [];
      for (let base of this.dna) {
        switch (base) {
          case "A":
            compDNAStrand.push("T");
            break;
          case "T":
            compDNAStrand.push("A");
            break;
          case "C":
            compDNAStrand.push("G");
            break;
          case "G":
            compDNAStrand.push("C");
        }
      }
      return compDNAStrand;
    },
  };
};

// array to store 30 dna strand that will likely survive in the environment
let dnaSurvivors = [];
let num = 1;
while (dnaSurvivors.length < 30) {
  // num++;
  let dnaSample = pAequorFactory(num, mockUpStrand());
  if (dnaSample.willLikelySurvive() === true) {
    dnaSurvivors.push(dnaSample.dna);
    num++;
    console.log(`sample ${dnaSample.specimanNum}: ${dnaSample.dna}`);
  }
}
