function generateMarkdown(data) {
    return `# ${data.title}
     ## ${data.description} 
     ## ${data.contents}
      ## ${data.install} 
      ## ${data.usage} 
      ## ${data.credits} 
      ## ${data.license}
  
  `;
  }
  
  module.exports = generateMarkdown;
  