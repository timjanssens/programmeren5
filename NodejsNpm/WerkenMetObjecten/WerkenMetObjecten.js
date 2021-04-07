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

function showOverview() {
    return `Overzicht rapport (met een named function):
    Naam: ${this.name.toUpperCase()}
    Klasgroep: ${this.classGroup}
    Leeftijd: ${this.age}
    Punten
        Communicatie: ${this.markCommunication}
        PP: ${this.markProgrammingPrinciples}
        WebTechnolgy: ${this.markWebTechnology}
        Gemiddelde: ${this.overallMark()}`;
}

function overallMark() {
return (this.markCommunication +
    this.markProgrammingPrinciples +
    this.markWebTechnology) / 3;
}

 let student1 = {
    name: 'Bob Dylan',
    age: 54,
    classGroup: classGroups.EA2,
    markCommunication: 18,
    markProgrammingPrinciples: 16,
    markWebTechnology: 12,
    overallMark: function() {return (this.markCommunication +
          this.markProgrammingPrinciples +
          this.markWebTechnology) / 3;},
    showOverview: function () {
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
 console.log(student1.showOverview());

 let student2 = {
    name: 'Sareh El Farisi',
    age: 54,
    classGroup: classGroups.EA2,
    markCommunication: 18,
    markProgrammingPrinciples: 20,
    markWebTechnology: 19,
    overallMark: function() {return (this.markCommunication +
          this.markProgrammingPrinciples +
          this.markWebTechnology) / 3;},
    showOverview: function () {
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
 console.log(student2.showOverview());

// we kunnen een eigenschap met een nieuwe waarde overschrijven
// hier overschrijven we de anonieme functie met een functie met een naam
student1.overallMark = overallMark;
student1.showOverview = showOverview;
console.log(student1.showOverview())

student2.overallMark = overallMark;
student2.showOverview = showOverview;
console.log(student2.showOverview())