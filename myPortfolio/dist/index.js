import { welcomeText, aboutMe, contactInfo } from './texts';
document.getElementById('welcome-text').textContent = welcomeText;
document.getElementById('about-me').textContent = aboutMe;
const emailLink = document.getElementById('email');
emailLink.href = `mailto:${contactInfo.email}`;
emailLink.textContent = contactInfo.email;
document.getElementById('phone').textContent = contactInfo.phone;
