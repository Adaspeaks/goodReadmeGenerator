function renderLicenseBadge(data) {
  if (data.badge == "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (data.badge == "MPL-2.0"){
    return '[![License: MPL-2.0](https://img.shields.io/badge/License-MPL--2.0-red.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (data.badge == "GNU GPLv3"){
    return '[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0.html)'
  }else if (data.badge == "Unlicense"){
    return '[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-lightgrey.svg)](https://opensource.org/licenses/unlicense)'
  }else {
    return ''
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.badge)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [How to install](#Installation)
  * [How to use](#Usage)
  * [How to Contribute](#Contribution Guidelines)
  * [Testing Instructions](#Testing)
  * [Contact Info](#Contacts)

## Installation

  To install the dependencies for the application use the following:

  \`\`\`
  ${data.install}
  \`\`\`

## Usage

  \`\`\`
  ${data.usage}
  \`\`\`

## Contribution

  \`\`\`
  ${data.contribute}
  \`\`\`

## Testing
  To test the application:

  \`\`\`
  ${data.test}
  \`\`\`


# Contacts

  You can find my other repositories at: https://github.com/${data.username}

  or email me at: ${data.email}


`;
}

module.exports = generateMarkdown;