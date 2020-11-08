function generateMarkdown(data) {
  return `
    # ${data.title}

     ## Description
     
     ${data.description} 

     ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [Testing](#tests)
        * [Questions](#questions)
        * [License](#license)
        * [Contact] (#contact)
        * [Badges](#badges)

    ## Installation
    
    To install, use the following: 
    
    ${data.install} 

    ## Usage
    
    ${data.usage}     

    ## Credits/Contributions
    
    ${data.credits} 

    ## Testing
    
    To run a test, use ${data.tests}

    ## License 
      
    ${data.license}

    ## Questions
        Contact Me: 
        GitHub: [${data.github}] (https://github.com/ndelaire)
        Email: ${data.email} 
  `;
};

module.exports = generateMarkdown;