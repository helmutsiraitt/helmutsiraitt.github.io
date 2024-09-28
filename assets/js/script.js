// navigation
const nav = document.getElementsByTagName('nav')[0];
const hamBtn = nav.getElementsByClassName('hamburger-btn')[0];
const links = document.querySelectorAll('.nav-link');
const navUl = document.querySelector('nav ul');
const sections = document.querySelectorAll('section');

hamBtn.addEventListener('click', function() {
        hamBtn.classList.toggle('active');
        hamBtn.previousElementSibling.classList.toggle('active');
        document.body.classList.toggle('active');
});

// change background menu to scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// smoothscrolling when click the link 
const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - nav.clientHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        links.forEach(each => {
            each.addEventListener('click', function (e) {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
                navUl.classList.remove('active');
                document.body.classList.remove('active'); 
                hamBtn.classList.remove('active'); 
            });
        });
    
    };
    scrollTo();


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            links.forEach(event => {
                event.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};