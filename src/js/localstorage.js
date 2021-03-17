const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const switchRef = document.querySelector('#theme-switch-toggle');


switchRef.addEventListener('change', handleChange);



function handleChange() {
    if (switchRef.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('themeColor', Theme.DARK);

    } else {
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
        localStorage.setItem('themeColor', Theme.LIGHT);
    }
}



const savedTheme = localStorage.getItem('themeColor');

if (savedTheme) {
    document.body.classList.add(savedTheme);
} else {
    document.body.classList.add(Theme.LIGHT);
}


if (savedTheme === Theme.DARK) {
    switchRef.checked = true;
} else {
    switchRef.checked = false;
}
