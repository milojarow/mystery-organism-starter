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

const pAequorFactor=(specimenNum,dna)=>{
  return {
    specimenNum,
    dna,
    mutate(){
      const random=Math.floor(Math.random()*this.dna.length);
      const originalBase=this.dna[random];
      const dnaBases = ['A', 'T', 'C', 'G'];
      const index=dnaBases.indexOf(originalBase);
      if (index>-1) {dnaBases.splice(index,1)};
      return this.dna.splice(random,1,dnaBases[Math.floor(Math.random()*dnaBases.length)]);
    },
  }
};

const newObject=pAequorFactor(1,mockUpStrand());
console.log(newObject);
console.log(`the DNA before mutation ${newObject.dna}`)
console.log('\n');
newObject.mutate();
console.log(`Así queda el dna nuevo ${newObject.dna}`);
