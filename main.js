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
      index>-1 && dnaBases.splice(index,1);
      return this.dna.splice(random,1,dnaBases[Math.floor(Math.random()*dnaBases.length)]);
    },
    compareDNA(previousObject){
      let i=0;
      let counter=0;
      while (i<this.dna.length){
        previousObject.dna[i]===this.dna[i]? counter+=1:counter=counter;
        i++;
      };
      const percentage=(counter/this.dna.length)*100;
      console.log(`Specimen #${previousObject.specimenNum} and specimen #${this.specimenNum} have ${percentage.toFixed(2)}% DNA in common`)
    },
    willLikelySurvive(){
      let i=0;
      let counter=0;
      while (i<this.dna.length){
        this.dna[i]==='C'||this.dna[i]==='G'?counter+=1:counter=counter;
        i++;
      };
      const percentage=(counter/this.dna.length)*100;
      return percentage>=60?true:false;
    },
  }
};

const object1=pAequorFactor(1,mockUpStrand());
console.log(object1);
const object2=pAequorFactor(2,mockUpStrand());
console.log(object2);
console.log(object1.willLikelySurvive());
console.log(object2.willLikelySurvive());
