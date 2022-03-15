
// ==== Tabs Project ====
const buttons = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// add EventListener
about.addEventListener('click', function (e) {
    const tabData = e.target.dataset.tab;
    if (tabData) {
        // Remove actice from aother buttons
        buttons.forEach(function (btnTab) {
            btnTab.classList.remove('active');
            // Add actice from aother buttons
            e.target.classList.add('active');
        });
        // Hide all articles
        articles.forEach(function(article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(tabData);
        element.classList.add('active')
    };
});
