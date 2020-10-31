const body = document.querySelector('body');
const coralReef = document.querySelector('.coral-reef');
const redSunset = document.querySelector('.red-sunset');
const colorScheme = document.querySelector('.color-scheme');
const purpleSunset = document.querySelector('.purple-sunset');
const northernLights = document.querySelector('.northern-lights');
let theme = 'coral-reef';

coralReef.addEventListener('click', () => {
  colorScheme.placeholder = 'Color Scheme: Coral Reef (Default)';
  body.className = 'coral-reef';
  theme = 'coral-reef';
});

redSunset.addEventListener('click', () => {
  colorScheme.placeholder = 'Color Scheme: Red Sunset';
  body.className = 'red-sunset';
  theme = 'red-sunset';
});

purpleSunset.addEventListener('click', () => {
  colorScheme.placeholder = 'Color Scheme: Purple Sunset';
  body.className = 'purple-sunset';
  theme = 'purple-sunset';
});

northernLights.addEventListener('click', () => {
  colorScheme.placeholder = 'Color Scheme: Northern Lights';
  body.className = 'northern-lights';
  theme = 'northern-lights';
});
