
function generateMarkdown(data) {
  let license = "";
  
  if (data.license === "MIT") {
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   
  } else if (data.license === "Apache 2.0") {
    license = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    
  } else if (data.license === "GPL 3") {
    license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

  } else if (data.license === "BSD 3-Clause") {
    license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
   
  } else if (data.license === 'Unlicense') {
    license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"

  };

  return `
# ${data.title}
${license}
## Description
${data.description} 
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Testing](#tests)
  * [Questions](#questions)
  * [License](#license)
  * [Contact](#contact)
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
If you have questions: 
GitHub: [${data.github}] (https://github.com/ndelaire)
Email: ${data.email} 
  `;
};
module.exports = generateMarkdown;