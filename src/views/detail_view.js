const PubSub = require('../helpers/pub_sub.js')

const CountryDetailView = function(container){
this.container = container;
};


CountryDetailView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:country-ready', (event) => {
    const country = event.detail;
    this.render(country);
  })
}

CountryDetailView.prototype.render = function(country){

  this.container.innerHTML = '';

  const header = this.addElement('h2', country.name);

  const regionHeader = document.createElement('h3');
  regionHeader.textContent = `Region: ${country.region}`;
  this.container.appendChild(regionHeader);

  // const flagImage = document.createElement('img');
  // flagImage.src = country.flag;
  // flagImage.alt = `${country.name}'s flag'`;
  //
  // flagImage.id = 'flag';
  //
  // this.container.appendChild(flagImage);

  const list = document.createElement('ul');

  country.languages.forEach((language) => {
    const listItem = document.createElement('li')
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });

  this.container.appendChild(list)

}

CountryDetailView.prototype.addElement = function(type, text){
  const element = document.createElement(type);
  element.textContent = text;
  this.container.appendChild(element);
}





// CountryDetailView.prototype.createCountryDetail = function(country){
//   const countryDetail = document.createElement('div');
//   countryDetail.classList.add('country-detail');
//
//   const name = document.createElement('h3');
//   name.textContent = country.name;
//   countryDetail.appendChild(name);
//   // console.log('country detail created', countryDetail);
//
//   const detailsList = document.createElement('ul');
//
//   countryDetail.appendChild(detailsList);
//   return countryDetail;
//   console.log('country detail created', countryDetail);
//
// };
//
// CountryDetailView.prototype.createDetailListItem = function (label, property){
//   const element = document.createElement('li');
//   element.textContent = `${label}: ${property}`;
//   return element;
// }

module.exports = CountryDetailView;
