(function () {
// Mark active nav item based on pathname (no regex to avoid escaping headaches)
    function stripIndex(p) {
        return p.endsWith('/index.html') ? p.slice(0, -'index.html'.length) : p;
    }

    const path = stripIndex(location.pathname);
    document.querySelectorAll('.menu a').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        const url = new URL(href, location.origin);
        const aPath = stripIndex(url.pathname);
        if (aPath === path) a.classList.add('active');
    });
})();