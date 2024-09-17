// navigation
const nav = document.getElementsByTagName('nav')[0];
// nav.addEventListener('click', function(e) {
//       if(e.target.tagName == 'svg'){
//            e.target.classList.toggle('active');
//            e.preventDefault();
//       }

// });

const svg = nav.getElementsByTagName('svg')[0];
svg.addEventListener('click', function() {
    svg.classList.toggle('active');
});