import chapters from 'js/chapters.js'

//make first letter capital
function capital(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function listChapters(personArray) {
  let chaptersList = document.querySelector("#chapters_list");
  //console.log(chaptersList);

  for (let chapter of chapters) {
    let newChapters = document.createElement("div");
    
//Create Text Nodes
    let chaptersName = document.createTextNode(`${capital(chapters.chapter_name)} `);
    let schoolName = document.createTextNode(`${chapters.school} `)
    let schoolWebsite = document.createTextNode(`Website: ${chapters.website} `)
    let chaptersIG = document.createTextNode(`Instagram: ${chapters.ig}`);
    // let chaptersEmail = document.createElement("email");
    //chaptersEmail.src = `${chapters.email}`;

//create paragraphs; it will NOT run when I put them further down in the code
    let cName = document.createElement("p");
    let sName = document.createElement("p");
    // let address = document.createElement("p");
    // let cCS = document.createElement("P");
    // let bday = document.createElement("p");     

    // address.classList.add("address", "measure", "lh-copy");
    cName.classList.add("display");
    address.append(schoolName, cCityState);
 
  //create appendChild
    cName.appendChild(chaptersName);
    sName.appendChild(schoolName);
    // address.appendChild(schoolName);
    // cCS.appendChild(cCityState);
    // bday.appendChild(cDOB);

    newChapters.append(cName, sName);

//image
    let chaptersImage = document.createElement("img");
    //br-100 makes picture a circle
    chaptersImage.classList.add("br-100","h4","w3","dib","ba","b--black-05", "pa2");
    
    chaptersImage.src = `${chapters.picture.medium}`;
     //prepend allowed the image to show
    newChapters.prepend(chaptersImage);
    newChapters.classList.add("ph3", "pv3", "bb");

//Name
    //prints EVERYTHING
    chaptersList.append(newChapters);

  };
  
};

listChapters(chapters);