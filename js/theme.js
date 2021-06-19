// function to set a given theme/color-scheme
let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style !== null) {
  console.log(style);
  setTheme('normal');
} else {
  setTheme(style);
  console.log(style);
}

for (let i of switches) {
  console.log(i);
  i.addEventListener('click', function() {
    let theme = this.dataset.theme;
    setTheme(theme);
    console.log(theme);
  });
}

function setTheme(theme) {
  if (theme === 'light') {
    document.getElementById('switcher-id').href = './css/themes/light.css';
  } else if (theme === 'sky') {
    document.getElementById('switcher-id').href = './css/themes/sky.css';
  } else if (theme === 'purple') {
    document.getElementById('switcher-id').href = './css/themes/purple.css';
  } else if (theme === 'dark') {
    document.getElementById('switcher-id').href = './css/themes/dark.css';
  } else {
    document.getElementById('switcher-id').href = '';
  }
  localStorage.setItem('style', theme);
}