/**
 * Used to expand project tiles when tile styles are enabled;
 * @param {object} e 
 */

function expandProject(e) {
  const element = document.getElementById(e.target.alt)
  element.classList.toggle('expand')
}