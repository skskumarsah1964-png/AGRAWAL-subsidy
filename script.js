// Simple dropdown on mobile (optional)
document.querySelectorAll('.dropdown').forEach(d => {
    d.addEventListener('click', function(e){
        if(window.innerWidth <= 768){
            this.querySelector('.dropdown-menu').classList.toggle('show');
            e.preventDefault();
        }
    });
});