
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

`;
}
