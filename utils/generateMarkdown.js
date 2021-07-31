// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.badge == "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license.badge == "MPL-2.0"){
    return '[![License: MPL-2.0](https://img.shields.io/badge/License-MPL--2.0-red.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license.badge == "GNU GPLv3"){
    return '[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0.html)'
  }else if (license.badge == "Unlicense"){
    return '[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-lightgrey.svg)](https://opensource.org/licenses/unlicense)'
  }else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(license.badge)}
`;
}

module.exports = generateMarkdown;


// must include a sample READme
// table of contents 

// title
// description 
// installation 
// usage information 
// contribution guidlines
// test instructions
// github username with link functionality
// email address 