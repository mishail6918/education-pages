document.addEventListener("DOMContentLoaded", function() {
    const teacherOptionBtn = document.querySelectorAll('.teacher-option');
    teacherOptionBtn.forEach(element => {
        element.addEventListener('click', function () {
            element.parentElement.querySelector('.teacher-option__window').classList.toggle('option-active');
        })
    });

    //select custom
    const selectSingle = document.querySelectorAll('.select');
    if (selectSingle) {
        selectSingle.forEach(element => {
            const selectSingle_title = element.querySelector('.select__title');
            const selectSingle_text = element.querySelector('.select__title-text');
            const selectSingle_labels = element.querySelectorAll('.select__label');
            selectSingle_title.addEventListener('click', () => {
                if ('active' === element.getAttribute('data-state')) {
                    element.setAttribute('data-state', '');
                } else {
                    element.setAttribute('data-state', 'active');
                }
            });
            for (let i = 0; i < selectSingle_labels.length; i++) {
                selectSingle_labels[i].addEventListener('click', (e) => {
                    selectSingle_text.textContent = e.target.textContent;
                    element.setAttribute('data-state', '');
                });
            }
        });
    }

    //schedule window edit
    const tableItems = document.querySelectorAll('.table-item');
    if (tableItems) {
        tableItems.forEach(element => {
            element.addEventListener('click', function () {
                const option = element.querySelector('.schedule-option');
                if (option) {
                    option.classList.toggle('schedule-option-active');
                }
            })
        })
    }

    //swiper init
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        freeMode: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
            },
            1380: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
