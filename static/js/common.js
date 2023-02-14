const body = document.querySelector('body');
body.innerHTML = `
    <div>
    <header class="header">
        <div class="logo"><img class="logo-image" src="../static/images/may-logo.png" /></div>
        <nav class="navbar navbar-nav m-auto">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" id="sign-in-page" href="../views/sign-in.html">Sign In</a>
                    <a class="navbar-brand" id="sign-up-page" href="../views/sign-up.html">Registration</a>
                    <a class="navbar-brand" id="home-page" href="../views/index.html">Home</a>
                    <a class="navbar-brand" id="places-page" href="../views/places.html">Places</a>
                    <a class="navbar-brand" id="my-events-page" href="../views/my-events.html">My Events</a>
                    <a class="navbar-brand" id="about-page" href="../views/about.html">About us</a>
                    <a class="navbar-brand" id="faq-page" href="../views/faq.html">Tips for events</a>
                    <a class="navbar-brand" id="social-page" href="../views/social.html">Social Media</a>
                </div>
            </div>
        </nav>
    </header>
    </div>
` + body.innerHTML;

switch (window.location.pathname) {
    case '/views/index.html':
        document.getElementById('home-page').classList.add('active');
        break;
        
    case '/views/sign-in.html':
        document.getElementById('sign-in-page').classList.add('active');
        break;

    case '/views/sign-up.html':
        document.getElementById('sign-up-page').classList.add('active');
        break;

    case '/views/places.html':
        document.getElementById('places-page').classList.add('active');
        break;

    case '/views/my-events.html':
            document.getElementById('my-events-page').classList.add('active');
            break;

    case '/views/about.html':
        document.getElementById('about-page').classList.add('active');
        break;

    case '/views/faq.html':
        document.getElementById('faq-page').classList.add('active');
        break;

    case '/views/social.html':
        document.getElementById('social-page').classList.add('active');
        break;

    default:
        break;
}

if (sessionStorage.getItem('USER')) {
    const user = JSON.parse(sessionStorage.getItem('USER'));
    document.getElementById('sign-in-page').outerHTML = `
        <span>Welcome ${user.fullname} <strong class="logout" onclick="logout(event)">Logout</strong></span>
    `;
    document.getElementById('sign-up-page').remove();
}
else {
    document.getElementById('places-page').remove();
    document.getElementById('my-events-page').remove();
}

function logout(e) {
    e.preventDefault();
    sessionStorage.clear();
    window.location = "sign-in.html";
}