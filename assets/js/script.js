// navigation
const nav = document.getElementsByTagName('nav')[0];
// nav.addEventListener('click', function(e) {
//       if(e.target.tagName == 'svg'){
//            e.target.classList.toggle('active');
//            e.preventDefault();
//       }
// });
const svg = nav.getElementsByTagName('svg')[0];
const navUl = nav.querySelector('nav ul');
svg.addEventListener('click', function(e) {
    e.target.classList.toggle('active');
    e.target.previousElementSibling.classList.toggle("active");
});



