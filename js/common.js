// Theme Management
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
};

const currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

// Feedback Modal Logic
const feedbackModal = document.getElementById('feedbackModal');
const openFeedbackBtn = document.getElementById('openFeedback');
const closeFeedbackBtn = document.getElementById('closeFeedback');
const cancelFeedbackBtn = document.getElementById('cancelFeedback');
const feedbackForm = document.getElementById('feedbackForm');
const typePills = document.querySelectorAll('.type-pill');
let selectedFeedbackType = 'General';

const openFeedback = () => {
    if (feedbackModal) {
        feedbackModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }
};

const closeFeedback = () => {
    if (feedbackModal) {
        feedbackModal.classList.remove('active');
        document.body.style.overflow = '';
        if (feedbackForm) feedbackForm.reset();
        resetTypePills();
    }
};

if (openFeedbackBtn) {
    openFeedbackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openFeedback();
    });
}

if (closeFeedbackBtn) closeFeedbackBtn.onclick = closeFeedback;
if (cancelFeedbackBtn) cancelFeedbackBtn.onclick = closeFeedback;

window.addEventListener('click', (e) => {
    if (e.target === feedbackModal) closeFeedback();
});

const resetTypePills = () => {
    typePills.forEach(pill => pill.classList.remove('active'));
    const defaultPill = document.querySelector('.type-pill[data-type="General"]');
    if (defaultPill) defaultPill.classList.add('active');
    selectedFeedbackType = 'General';
};

typePills.forEach(pill => {
    pill.addEventListener('click', () => {
        typePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedFeedbackType = pill.getAttribute('data-type');
    });
});

if (feedbackForm) {
    feedbackForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('feedbackEmail').value;
        const message = document.getElementById('feedbackMessage').value;
        
        console.log('Feedback Submitted:', { type: selectedFeedbackType, email, message });
        
        // Success animation or message
        const submitBtn = feedbackForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sent Successfully!';
        submitBtn.style.background = 'var(--success)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            closeFeedback();
        }, 1500);
    };
}

// Hamburger Menu Logic
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
