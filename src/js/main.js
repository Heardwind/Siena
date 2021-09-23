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
    let tabCards = document.querySelectorAll('.services_card');
    let tabContent = document.querySelectorAll('.services_content > div');
    let moreButtons = document.querySelectorAll('.more');


    if(toggleNavButton) {
        const toggleNavHandler = function (e) {
            e.preventDefault();
            document.querySelector('body').classList.toggle('nav_open');
        }
        const closeAll = function (e) {
            e.preventDefault();
            document.querySelector('body').classList.remove('nav_open');
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

    if(tabCards.length&&tabContent.length) {
        let cards = Array.from(tabCards);
        let tabs = Array.from(tabContent);
        let activeIndex = 0;
        const tabHandler = function () {
            const newIndex = cards.indexOf(this);
            cards[activeIndex].classList.remove('active');
            tabs[activeIndex].style.display = 'none';
            cards[newIndex].classList.add('active');
            tabs[newIndex].style.display = 'block';
            activeIndex = newIndex;
        }
        cards.map((elem,index) => {
            elem.addEventListener('click', tabHandler);
        });
    }

    if(moreButtons.length) {
        const showMoreHandler = function (e) {
            e.preventDefault();
            const prevEl = this.previousElementSibling;
            prevEl.style.webkitLineClamp = 13;
            this.remove();
        }
        Array.from(moreButtons).map(elem => {
            elem.addEventListener('click',showMoreHandler);
        })
    }


}

document.addEventListener("DOMContentLoaded", init);