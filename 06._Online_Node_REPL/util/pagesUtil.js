import {readPage, constructPage} from "./templatingEngine.js";


const frontpage = readPage('pages/frontend/frontpage.html')
export const frontpagePage = constructPage(frontpage, {
    cssLinks: '<link rel="stylesheet" href="/pages/frontend/frontpage.css">'
});

const about = readPage('public/about/about.html')
export const aboutPage = constructPage(about, 'Online Node.js REPL | About');

const contact = readPage('public/contact/contact.html')
export const contactPage = constructPage(contact);