const fs = require('fs');

const items = [
  '.nojekyll',
  'robots.txt',
  'index.html',
  'articles.html',
  'brand-story.html',
  'contact.html',
  'login.html',
  'products.html',
  'skills.html',
  '_app',
];

fs.mkdirSync('build', { recursive: true });
items.forEach((f) => fs.cpSync(f, `build/${f}`, { recursive: true }));
