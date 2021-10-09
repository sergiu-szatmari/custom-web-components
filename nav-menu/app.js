const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const list = $$('.list');
const navigation = $('.navigation');
const lockMenuBtn = $('.lock-menu-btn');
const lockBtnIcon = $('.lock-menu-btn a span ion-icon');

let menuLocked = false;

list.forEach(item =>
    item.addEventListener('click', function() {
        const active = $('.active');

        list.forEach(item => item.classList.remove('active'));
    
        // Adds "active" class to clicked <li>
        this.classList.add('active');

        if (item.classList.contains('lock-menu-btn')) {
            setTimeout(() => {
                list.forEach(item => item.classList.remove('active'));
                active.classList.add('active');
            }, 600);
        }

    })
);

lockMenuBtn.addEventListener('click', () => {
    menuLocked = !menuLocked;

    const ionIcon = menuLocked
        ? 'lock-closed-outline'
        : 'lock-open-outline';

    // // Toggling "tooltip" mode for title spans when menu is locked
    // $$('.title').forEach(
    //     menuLocked
    //         ? (titleSpan) => titleSpan.classList.add('tooltip')
    //         : (titleSpan) => titleSpan.classList.remove('tooltip')
    // );

    lockBtnIcon.setAttribute('name', ionIcon);
    navigation.classList.remove('hovered');
});

function onMouseOver(navigationDiv) {
    if (menuLocked) return;

    navigationDiv.classList.add('hovered');
}

function onMouseOut(navigationDiv) {
    if (menuLocked) return;

    navigationDiv.classList.remove('hovered');
}