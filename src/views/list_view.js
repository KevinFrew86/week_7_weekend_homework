// const PubSub = require('../helpers/pub_sub.js')
// const CountryDetailView = require('./detail_view.js');
//
// const CountryListView = function (container){
//   this.container = container;
// };
//
// CountryListView.prototype.bindEvents = function(){
//   PubSub.subscribe('Country:country-ready', (event) => {
//     this.renderCountryDetailViews(event.detail);
//   });
// };
//
// // PokemonListView.prototype.renderPokemonDetailViews = function(pokemons){
// //   pokemons.forEach((pokemon) => {
// //     const pokemonItem = this.createPokemonListItem(pokemon);
// //     this.container.appendChild(pokemonItem);
// //   });
// // };
//
// CountryListView.prototype.renderCountryDetailViews = function (countries) {
//   console.log('countries', countries);
//   countries.forEach((country) => {
//     const countryItem = this.createCountryListItem(country);
//     console.log('country item', countryItem);
//     this.container.appendChild(countryItem);
//   });
// };
//
// CountryListView.prototype.createCountryListItem = function(country){
//   const countryDetailView = new CountryDetailView();
//   const countryDetail = countryDetailView.createCountryDetail(country);
//   console.log('country detail', countryDetail);
//   return countryDetail;
// };
//
// module.exports = CountryListView;
