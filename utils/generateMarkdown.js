function renderLicenseBadge(data) {
  if (data.badge == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.badge == "MPL-2.0") {
    return "[![License: MPL-2.0](https://img.shields.io/badge/License-MPL--2.0-red.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (data.badge == "GNU GPLv3") {
    return "[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0.html)";
  } else if (data.badge == "Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-lightgrey.svg)](https://opensource.org/licenses/unlicense)";
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.badge)}

## Description

  ${data.description}

## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Testing](#Testing)
  * [Contacts](#Contacts)

<a name="Installation"></a>
## Installation

  To install the dependencies for the application use the following:

  \`\`\`
  ${data.install}
  \`\`\`

<a name="Usage"></a>
## Usage

  \`\`\`
  ${data.usage}
  \`\`\`

<a name="Contribution"></a>
## Contribution

  \`\`\`
  ${data.contribute}
  \`\`\`

<a name="Testing"></a>
## Testing

  To test the application:

  \`\`\`
  ${data.test}
  \`\`\`

<a name="contacts"></a>
# Contacts

  You can find my other repositories at: https://github.com/${data.username}

  or email me at: ${data.email}


`;
}

module.exports = generateMarkdown;
