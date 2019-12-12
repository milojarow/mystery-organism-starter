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

let instancesToSurvive=[];
let j=0;
let count=0;
let object='object';
while(count<=30){
  var variable=object.concat(j);
  console.log(variable);
  variable=pAequorFactor(j,mockUpStrand());
  variable.willLikelySurvive()===true?instancesToSurvive.push(variable):instancesToSurvive=instancesToSurvive;
  console.log(variable);
  j++;
  count=instancesToSurvive.length+1;
};
console.log(instancesToSurvive);
