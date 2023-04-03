// ## descrizione
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.
Utilizzate liberamente il tipo di ciclo che preferite (for, for in o for of)
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

//----Steps
/*
1. creare l'array con i membri del team
2. milestone 1
3. milestone 2
*/


//--------DATA---------
const teamContainer = document.querySelector('.mb-team-container');
const teamMembers   = [
  
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg' 
  },

  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg' 
  },

  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg' 
  },

  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg' 
  },

  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg' 
  },

  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg' 
  },
]

//2.
for (const member of teamMembers) {
  for(let key in member){
    const memberCard = member[key]
    console.log(memberCard);
    //3.
    teamContainer.innerHTML += `
      <p>${key} ${member[key]} </p>
    `
  }
}