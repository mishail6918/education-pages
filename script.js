document.addEventListener("DOMContentLoaded", function() {
    const teacherOptionBtn = document.querySelectorAll('.teacher-option');
    teacherOptionBtn.forEach(element => {
        element.addEventListener('click', function () {
            element.parentElement.querySelector('.teacher-option__window').classList.toggle('option-active');
        })
    });

    const selectSingle = document.querySelector('.select');
    const selectSingle_title = selectSingle.querySelector('.select__title');
    const selectSingle_text = selectSingle.querySelector('.select__title-text');
    const selectSingle_labels = selectSingle.querySelectorAll('.select__label');
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (e) => {
            selectSingle_text.textContent = e.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }
});
