function updateProblem(id) {
    let button = id.split(/(?=[A-Z])/);
    let expandId = '.expand' + button[1];
    let collapseId = '.collapse' + button[1];
    let expand = document.querySelector(expandId);
    let collapse = document.querySelector(collapseId);

    const buttonElement = document.getElementById(id);
    const target = buttonElement.getAttribute('aria-controls');
    const targetElement = document.getElementById(target);
    const isTargetVisible = Array.from(targetElement.classList).includes(
        'show'
    );

    if (isTargetVisible) {
        targetElement.classList.remove('show');
        targetElement.style.visibility = 'collapse';
        collapse.style.display = 'none';
        expand.style.display = 'block';
    } else {
        targetElement.classList.add('show');
        targetElement.style.visibility = 'visible';
        collapse.style.display = 'block';
        expand.style.display = 'none';
    }

    if (document.getElementById(id).getAttribute('aria-expanded') !== 'true') {
    } else {
    }
}

function initClassName() {
    const removeExtraIconInCollapse =
        document.getElementsByClassName('collapse-icon-d');

    for (let index = 0; index < removeExtraIconInCollapse.length; index++) {
        const element = removeExtraIconInCollapse[index];
        element.style.display = 'none';
    }
}

initClassName();
