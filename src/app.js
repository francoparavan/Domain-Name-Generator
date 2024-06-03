/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  const domains = generateDomains();
  const domainsContainer = document.querySelector("#domains");
  domains.forEach(domain => {
    const domainElement = document.createElement("p");
    domainElement.innerText = domain;
    domainsContainer.appendChild(domainElement);
  });
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
