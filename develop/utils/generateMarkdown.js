// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!licenseBadge) {
    return ''
  }

  return 'license badge goes here'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!licenseLink) {
    return ''
  }

  return 'license link goes here'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {
  console.log()
  return `# ${data.title}

`;
}
