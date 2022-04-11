
function renderLicenseBadge(license) {
  if(!licenseBadge) {
    return ''
  }

  return `
  [${license}]
  `
}

function renderLicenseLink(link) {
  if(!licenseLink) {
    return ''
  }

  return `
  ${link}
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
module.exports = mdData => {
  console.log(mdData)
  const { title, description, install, ...license } = mdData

  return `
  # ${mdData.title}

  ${mdData.description}

  ## License

  [${mdData.badge}](${mdData.license})

  ## Installation
  
  ${mdData.install}

  ## Usage

  ${mdData.usage}

  ## Contributing

  ${mdData.contribution}

  ## Testing

  ${mdData.test}

  ## Github Profile

  ${mdData.user}
  [Link to Profile](${mdData.profileLink})

  ## Contact

  You can reach me with further questions at [my email](${mdData.email}).

  ## Table of Contents

  1. [Title](#title)
  2. [License](#license)
  3. [Installation](#install)
  4. [Usage](#usage)
  5. [Constributing](#contri)
  6. [Testing](#test)
  7. [Profile](#profile)
`
}
