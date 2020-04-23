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
//constructor de specimens con su correspondiente cadena de dna cada uno
const pAequorFactor=(specimenNum,dna)=>{
  return { //next two lines are PROPERTIES inciso 2
    specimenNum,
    dna,
    mutate(){ //inciso 3: METHOD para representar mutaciones en el adn de cada specimen
      const random=Math.floor(Math.random()*this.dna.length); //goes random through dna[]
      const originalBase=this.dna[random]; //deposits one random element of dna[] into const originalBase
      const dnaBases = ['A', 'T', 'C', 'G']; //declares de dnaBases for the user to pick one
      const index=dnaBases.indexOf(originalBase); //matches the random element from dna[] with the one in dnaBases[]
      index>-1 && dnaBases.splice(index,1); // deletes de matching element so the program can replace it with one of the remainigs
      return this.dna.splice(random,1,dnaBases[Math.floor(Math.random()*dnaBases.length)]); // replaces the random element
    },
    compareDNA(previousObject){ //inciso 4: METHOD compara dos cadenas de adn del objeto actual y el objeto previo (al mandarlo llamar se aclaran tus dudas. Hazlo en tu mente)
      let i=0;
      let counter=0;
      while (i<this.dna.length){
        previousObject.dna[i]===this.dna[i]? counter+=1:counter=counter;
        i++;
      };
      const percentage=(counter/this.dna.length)*100;
      console.log(`Specimen #${previousObject.specimenNum} and specimen #${this.specimenNum} have ${percentage.toFixed(2)}% DNA in common`)
    },
    willLikelySurvive(){//inciso 5: METHOD return true if object.dna is made at least 60% 'c' o 'g'
      let i=0;
      let counter=0;
      while (i<this.dna.length){
        this.dna[i]==='C'||this.dna[i]==='G'?counter+=1:counter=counter;
        i++;
      };
      const percentage=(counter/this.dna.length)*100;
      return percentage>=60?true:false;
    },
    complementStrand(){ //inciso 8: METHOD imprime una cadena de adn[] complementaria
      let complementArray=[];
      for(let i=0;i<this.dna.length;i++){
        if      (this.dna[i]==='A'){complementArray.push('T')}
        else if (this.dna[i]==='T'){complementArray.push('A')}
        else if (this.dna[i]==='C'){complementArray.push('G')}
        else if (this.dna[i]==='G'){complementArray.push('C')}
        else {break;};
      };
      return complementArray;
    },
  }
};
//Main
let instancesToSurvive=[]; //inciso 6, en este array se depositan las 30 instancias a fabricar more likely to survive
let j=0; //esta j se unirá al string 'object' para así crear objetos en forma automática
let count=0;
let object='object';//esta es la parte string que se unirá a j para crear objetos en forma automática
while(count<=30){ //30 ciclos porque buscará 30 instancias .willLikelySurvive mayor a 60%
  var variable=object.concat(j); //aquí se une string 'object'+int j y se depositan en 'variable' para asignación automática
  console.log(variable);
  variable=pAequorFactor(j,mockUpStrand());//se inicia la fabricación automática
  variable.willLikelySurvive()===true?instancesToSurvive.push(variable):instancesToSurvive=instancesToSurvive;
  console.log(variable);
  j++; //incrementa int j para que ahora se asigne object1, en el sig ciclo object2 y así consecutivamente
  count=instancesToSurvive.length+1; //conforme arr[] instancesToSurvive incrementa se incrementa el counter para salir al 30
};
console.log(instancesToSurvive);
