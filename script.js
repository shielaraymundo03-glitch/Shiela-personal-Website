
const helloBtn = document.getElementById('hello-btn');
const welcomeMessage = document.getElementById('welcome-message');

const greetings = [
  "Hey there! Thanks for stopping by 👋",
  "Welcome! Make yourself at home.",
  "So glad you're here!",
  "Hello, friend! Feel free to look around."
];

helloBtn.addEventListener('click', () => {
  const random = greetings[Math.floor(Math.random() * greetings.length)];
  welcomeMessage.textContent = random;
});


const toggleAboutBtn = document.getElementById('toggle-about');
const aboutExtra = document.getElementById('about-extra');

toggleAboutBtn.addEventListener('click', () => {
  const isHidden = aboutExtra.classList.toggle('hidden');
  toggleAboutBtn.textContent = isHidden ? 'Read More' : 'Show Less';
});

const themeToggleBtn = document.getElementById('theme-toggle');
const themes = ['theme-warm', 'theme-dark', 'theme-teal'];
let themeIndex = 0;

themeToggleBtn.addEventListener('click', () => {

  document.body.classList.remove('theme-dark', 'theme-teal');

  themeIndex = (themeIndex + 1) % themes.length;
  const nextTheme = themes[themeIndex];

  if (nextTheme !== 'theme-warm') {
    document.body.classList.add(nextTheme);
  }
});

const datetimeDisplay = document.getElementById('datetime-display');

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  datetimeDisplay.textContent = now.toLocaleString(undefined, options);
}

updateDateTime();
setInterval(updateDateTime, 1000);


document.getElementById('footer-year').textContent = new Date().getFullYear();


const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formResponse.textContent = 'Please fill in every field before sending.';
    formResponse.style.color = '#FF6B4A';
    return;
  }

  formResponse.style.color = '';
  formResponse.textContent = `Thanks, ${name}! Your message has been received. I'll get back to you at ${email} soon.`;

  contactForm.reset();
});
