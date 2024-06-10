/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  const domainsContainer = document.querySelector("#domains");
  const button = document.querySelector("#randomizeButton");
  function displayRandomDomain() {
    const domains = generateDomains();
    const randomIndex = Math.floor(Math.random() * domains.length);
    domainsContainer.innerText = domains[randomIndex];
  }
  button.addEventListener("click", displayRandomDomain);
  displayRandomDomain();
};
function generateDomains() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domains.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return domains;
}
