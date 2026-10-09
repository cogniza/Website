/**
 * Cogniza Highlights - Blog & Events Interactive Script
 */
document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. CATEGORY FILTERING & SEARCH
    // -------------------------------------------------------------
    const filterPills = document.querySelectorAll('.filter-pill');
    const updateCards = document.querySelectorAll('.update-card');
    const searchInput = document.getElementById('eventSearchInput');
    const noResultsBox = document.getElementById('noResultsBox');

    let currentCategory = 'all';
    let searchQuery = '';

    function updateCardVisibility() {
        let visibleCount = 0;

        updateCards.forEach(card => {
            const cardCategories = (card.getAttribute('data-category') || '').toLowerCase().split(' ');
            const cardTitle = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
            const cardDesc = (card.querySelector('.card-desc')?.textContent || '').toLowerCase();

            const matchesCategory = currentCategory === 'all' || cardCategories.includes(currentCategory.toLowerCase());
            const matchesSearch = !searchQuery || cardTitle.includes(searchQuery) || cardDesc.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        if (noResultsBox) {
            if (visibleCount === 0) {
                noResultsBox.classList.add('show');
            } else {
                noResultsBox.classList.remove('show');
            }
        }
    }

    // Filter pill click listener
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-filter') || 'all';
            updateCardVisibility();
        });
    });

    // Search input listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            updateCardVisibility();
        });
    }

    // -------------------------------------------------------------
    // 2. LIGHTBOX MODAL FOR GALLERY
    // -------------------------------------------------------------
    const galleryItems = document.querySelectorAll('.gallery-item, .post-gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentGalleryIndex = 0;
    const galleryData = [];

    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const title = item.getAttribute('data-title') || item.querySelector('.gallery-title')?.textContent || 'Cogniza Moments';
        const date = item.getAttribute('data-date') || item.querySelector('.gallery-date')?.textContent || '';
        const src = item.getAttribute('data-src') || img?.getAttribute('src') || '';

        galleryData.push({ src, title, date });

        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        if (!lightboxModal || !galleryData[index]) return;
        currentGalleryIndex = index;
        const data = galleryData[currentGalleryIndex];

        if (lightboxImg) lightboxImg.src = data.src;
        if (lightboxTitle) lightboxTitle.textContent = data.title;
        if (lightboxDesc) lightboxDesc.textContent = data.date;

        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrevImage() {
        if (galleryData.length === 0) return;
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
        openLightbox(currentGalleryIndex);
    }

    function showNextImage() {
        if (galleryData.length === 0) return;
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
        openLightbox(currentGalleryIndex);
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrevImage(); });
    if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); showNextImage(); });

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });

    // -------------------------------------------------------------
    // 3. SOCIAL SHARING & COPY LINK
    // -------------------------------------------------------------
    window.shareToWhatsApp = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, '_blank');
    };

    window.shareToLinkedIn = function() {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    };

    window.shareToTwitter = function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, '_blank');
    };

    window.copyPageLink = function() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        }).catch(() => {
            // Fallback
            prompt('Copy this link:', window.location.href);
        });
    };
});
