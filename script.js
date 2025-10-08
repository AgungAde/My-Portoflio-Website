document.addEventListener('DOMContentLoaded', function() {
    const certificationImages = document.querySelectorAll('.certification-item img');
    
    certificationImages.forEach(function(image) {
        image.addEventListener('click', function() {
            const item = this.parentElement;
            const imgSrc = this.getAttribute('src');
            const certTitle = item.querySelector('.certification-title').textContent;
            const certDesc = item.querySelector('.certification-description').innerHTML;
            const modal = document.getElementById('certif-modal');
            
            modal.querySelector('#certif-modal-img').setAttribute('src', imgSrc);
            modal.querySelector('#certif-modal-title').textContent = certTitle;
            modal.querySelector('#certif-modal-desc').innerHTML = certDesc;
            
            modal.classList.add('active');
        });
    });

    const modal = document.getElementById('certif-modal');
    const closeModalButton = document.querySelector('.certif-modal-close');

    if (closeModalButton) {
        closeModalButton.onclick = function() {
            modal.classList.remove('active');
        };
    }

    if (modal) {
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        };
    }
});