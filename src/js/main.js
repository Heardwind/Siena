/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */


function init() {

    let toggleNavButton = document.querySelector('.toggle_nav');
    let overlay = document.querySelector('.overlay');
    let typingElem = document.querySelectorAll('.typing');
    let tabNavs = document.querySelectorAll('.tab_navs > *');
    let tabContent = document.querySelectorAll('.tab_content > *');
    // let moreButtons = document.querySelectorAll('.more');
    let modalTriggers = document.querySelectorAll('[data-modal]');
    let closeModalButton = document.querySelectorAll('.close_modal');
    let fileInputs = document.querySelectorAll('input[type="file"]');
    let activeModalElem = null;


    if(fileInputs.length) {
        const getFileNameWithExt = function (event) {

            if (!event || !event.target || !event.target.files || event.target.files.length === 0) {
                return;
            }

            const name = event.target.files[0].name;
            const lastDot = name.lastIndexOf('.');

            const fileName = name.substring(0, lastDot);
            const ext = name.substring(lastDot + 1);

            const inputId = event.target.id;
            if(inputId) {
                const label = document.querySelector(`label[for="${inputId}"]`);
                label.textContent = fileName+'.'+ext;
            }

        }
        Array.from(fileInputs).map((elem,index) => {
            elem.addEventListener('change', getFileNameWithExt);
        });
    }


    const closeModal = function () {
        if(activeModalElem) {
            document.querySelector('body').classList.remove('modal_open');
            activeModalElem.style.display = 'none';
            activeModalElem.style.opacity = '0';
        }
    }

    if(closeModalButton.length) {
        Array.from(closeModalButton).map((elem,index) => {
            elem.addEventListener('click', closeModal);
        });
    }

    if(modalTriggers.length) {
        const modalHandler = function () {
            const modalId = this.dataset.modal;
            activeModalElem = document.getElementById(modalId);
            if(activeModalElem) {
                document.querySelector('body').classList.toggle('modal_open');
                activeModalElem.style.display = 'block';
                activeModalElem.style.opacity = '1';
            }
        }
        Array.from(modalTriggers).map((elem,index) => {
            elem.addEventListener('click', modalHandler);
        });
    }


    if(toggleNavButton) {
        const toggleNavHandler = function (e) {
            e.preventDefault();
            document.querySelector('body').classList.toggle('nav_open');
        }
        const closeAll = function (e) {
            e.preventDefault();
            document.querySelector('body').classList.remove('nav_open');
            document.querySelector('body').classList.remove('modal_open');
            closeModal();
        }
        toggleNavButton.addEventListener('click', toggleNavHandler);
        overlay.addEventListener('click', closeAll);

    }

    if(typingElem.length) {
        const typingHandler = (elem,arr) => {
            let instance = new TypeIt(elem, {
                loop: true,
            });
            arr.map(str => {
                instance.type(str).pause(1000).delete();
            });
            instance.go()
        }

        Array.from(typingElem).map(elem => {
            const {str} = elem.dataset;
            if(!str) return false;
            typingHandler(elem,str.split(','));
        });
    }

    if(tabNavs.length&&tabContent.length) {
        let navs = Array.from(tabNavs);
        let tabs = Array.from(tabContent);
        let activeIndex = 0;
        const tabHandler = function () {
            const newIndex = navs.indexOf(this);
            navs[activeIndex].classList.remove('active');
            tabs[activeIndex].style.display = 'none';
            navs[newIndex].classList.add('active');
            tabs[newIndex].style.display = 'block';
            activeIndex = newIndex;
        }
        navs.map((elem,index) => {
            elem.addEventListener('click', tabHandler);
        });

        if(window.location.href.includes('#')) {
            const tabId = window.location.href.split('#')[1];
            const matchId = function (elem, i) {
                if (elem.id == tabId) {
                    return i;
                }
                return false;
            }
            let el = navs.find(matchId);
            if(el) {
                el.click();
            }
        }
    }

    // if(moreButtons.length) {
    //     const showMoreHandler = function (e) {
    //         e.preventDefault();
    //         const prevEl = this.previousElementSibling;
    //         prevEl.style.webkitLineClamp = 13;
    //         this.remove();
    //     }
    //     Array.from(moreButtons).map(elem => {
    //         elem.addEventListener('click',showMoreHandler);
    //     })
    // }


}

document.addEventListener("DOMContentLoaded", init);