console.log('Lakia Jones');
const projects = [
    {
        title: 'Lakias Cake of Cups', 
        screenshot: 'https://github.com/Lakiajo/Product-Cards/blob/master/Images/Screen%20Shot%202019-03-16%20at%2011.38.26%20AM.png', 
        description: "Product Cards", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: 'https://github.com/Lakiajo/Product-Cards', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: 'https://github.com/Lakiajo/Product-Cards',
      },
      {
        title: 'Lakias Cake of Cups', 
        screenshot: 'https://github.com/Lakiajo/Product-Cards/blob/master/Images/Screen%20Shot%202019-03-16%20at%2011.38.26%20AM.png', 
        description: "Product Cards", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: 'https://github.com/Lakiajo/Product-Cards', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: 'https://github.com/Lakiajo/Product-Cards',
      },
      {
        title: 'Lakias Cake of Cups', 
        screenshot: 'https://github.com/Lakiajo/Product-Cards/blob/master/Images/Screen%20Shot%202019-03-16%20at%2011.38.26%20AM.png', 
        description: "Product Cards", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: 'https://github.com/Lakiajo/Product-Cards', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: 'https://github.com/Lakiajo/Product-Cards',
      }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
    let domstring = '';
    for(let l = 0; l < projects.length; l++){
        domstring += `<div class= "projectsPage col-4">`
        domstring += `<h3>${projects[l].title}</h3>`;
        domstring += `<img src=${projects[l].screenshot} class="img"></img>`;
        domstring += `<p>${projects[l].description}</p>`;
        domstring += `<p>${projects[l].technologiesUsed}</p>`;
        domstring += `<p>${projects[l].available}</p>`;
        domstring += `<p>${projects[l].githubUrl}</p>`;
        domstring += `</div>`
    }
    printToDom('projectsPage', domstring);
    };
    
  const hideBio = () => {
      document.getElementById('bioPage').style.display = 'none';
      };
  
  const hideTech = () => {
      document.getElementById('technologiesPage').style.display = 'none';
      };
  
  const hideProject = () => {
      document.getElementById('projectsPage').style.display = 'none';
      };   
  
  const showBio = (e) => {
      if (bioPage.style.display === "none") {
          bioPage.style.display = "block";
        } else {
          bioPage.style.display = "none";
        }
   };
  
  const showTech = (e) => {
      if (technologiesPage.style.display === "none") {
          technologiesPage.style.display = "block";
        } else {
          technologiesPage.style.display = "none";
        }
  };
  
  const showProject = (e) => {
      if (projectsPage.style.display === "none") {
        projectsPage.style.display = "block";
        } else {
          projectsPage.style.display = "none";
        }
  };
  
  const eventListener = () => {
      document.getElementById('navToBio').addEventListener('click',showBio);
      document.getElementById('navToTechnologies').addEventListener('click',showTech);
      document.getElementById('navToProjects').addEventListener('click',showProject);
  };
  
  const init = () => {
      hideBio();
      hideProject();
      eventListener();
      createProjectCards();
  };

  init();