const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryDetailView = require('./views/detail_view.js');
// const CountryListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');


  // const listContainer = document.querySelector('#country-list');
  // const countryListView = new CountryListView(listContainer);
  // countryListView.bindEvents();


  const selectElement = document.querySelector('#country-list');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const container = document.querySelector('#country');
  const countrydetailView = new CountryDetailView(container);
  countrydetailView.bindEvents();

  const countries = new Countries;
  countries.bindEvents();
  countries.getData();

  const img = document.createElement('img');
  // img.source = country.flag;

  const canvas = document.querySelector('#main-canvas');
  console.log('canvas', canvas);
  const context = canvas.getContext('2d');
  console.log('context', context);

  const drawPoo = function(x, y){
  img.source = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059'
  };

  canvas.addEventListener('mousemove', (event) => {
    console.log('clicked', event);
    drawPoo(event.x, event.y);
  });

  const flagBackground = function(){
    img.source = country.flag;
    context.drawImage(img, 0, 0, 600, 500)
  }

  img.addEventListener('load', flagBackground);


});
