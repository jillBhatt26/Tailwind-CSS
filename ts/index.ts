const menu = document.querySelector('#menu') as HTMLDivElement;
const burger = document.querySelector('#burger') as HTMLUListElement;

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
