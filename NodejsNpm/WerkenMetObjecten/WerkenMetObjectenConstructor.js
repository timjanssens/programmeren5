// in JavaScript bestaan er geen enums.
// we gaan een enum nabootsen door gebruik
// te maken van een object
// vermits we dat object nooit gaan wijzigen
// declareren we het als een const

const classGroups = {
    EA1: 'EA1',
    EA2: "EA2",
    EA3: "EA3"
 
 };



 function Student(name, age, classGroup, markCommunication, markProgrammingPrinciples, markWebTechnology) {
    this.name  = name;
    this.age = age
    this.classGroup = classGroup,
    this.markCommunication = markCommunication,
    this.markProgrammingPrinciples =  markProgrammingPrinciples,
    this.markWebTechnology = markWebTechnology,
    this.overallMark = function() {return (this.markCommunication +
          this.markProgrammingPrinciples +
          this.markWebTechnology) / 3;},
    this.showOverview =  function () {
       return `Overzicht rapport:
          Naam: ${this.name}
          Klasgroep: ${this.classGroup}
          Leeftijd: ${this.age}
          Punten
             Communicatie: ${this.markCommunication}
             PP: ${this.markProgrammingPrinciples}
             WebTechnolgy: ${this.markWebTechnology}
             Gemiddelde: ${this.overallMark()}`;
    }
 };
 

let student1 = new Student("Tim", 40, 'classGroup.EA2' , 15, 15, 15);

// we kunnen een eigenschap met een nieuwe waarde overschrijven
// hier overschrijven we de anonieme functie met een functie met een naam
// student1.overallMark = overallMark;
// student1.showOverview = showOverview;
console.log(student1.showOverview())

// student2.overallMark = overallMark;
// student2.showOverview = showOverview;
// console.log(student2.showOverview())