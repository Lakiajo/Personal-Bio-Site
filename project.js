console.log('Lakia Jones');
const projects = [
    {
        title: "Lakia's Cake of Cups", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "Product Cards", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Dummy1", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Dummy2", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
    let domstring = '';
    for(let l = 0; l < projects.length; l++){
        domstring += `<div class= "projectsPage">`
        domstring += `<h3>${projects[l].title}</h3>`;
        domstring += `<p>${projects[l].screenshot}</p>`;
        domstring += `<p>${projects[l].description}</p>`;
        domstring += `<p>${projects[l].technologiesUsed}</p>`;
        domstring += `<p>${projects[l].available}</p>`;
        domstring += `<p>${projects[l].url}</p>`;
        domstring += `<p>${projects[l].githubUrl}</p>`;
        domstring += `</div>`
    }
    printToDom('projectsPage', domstring);
    };
    
    
    const init = () => {
    createProjectCards();
    };
    
    init();