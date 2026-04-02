document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".direction a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (currentPage === linkPage) {
            link.classList.add("active-link");
        } 
        else if (currentPage === "" && linkPage === "home.html") {
            link.classList.add("active-link");
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.form-area form');
    const formArea = document.querySelector('.form-area');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            formArea.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #ffffff;">
                    <h2 style="color: #98FF81; text-align:center;">Success!</h2>
                    <p style="font-size: 18px; line-height: 1.6;">
                        Thank you for reaching out to us, <br> our team will contact you back within 24 hours.
                    </p>
                </div>
            `;
        });
    }
});


const eventForm = document.querySelector('.form-area-interest form');
const formWrapper = document.querySelector('.form-area-interest');

eventForm.addEventListener('submit', function(e) {
    e.preventDefault();

    formWrapper.innerHTML = `
        <div style="text-align: center; margin-top: 64px;">
            <h3 style="color: #70e755;">Registration Complete</h3>
            <p style="color: #ffffff; font-family: 'Open Sans', sans-serif;">
                Success! You have reserved a seat for yourself at 
                <strong> <br> Korosa Fashion Week 2026 NYC</strong>, 
                Check your email address for further details!.
            </p>
        </div>
    `;
});