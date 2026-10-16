(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  const menu = $('.menu-toggle');
  const nav = $('.nav-links');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? '×' : '☰';
    });
    $$('.nav-links a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '☰';
    }));
  }

  const config = window.PORTFOLIO_CONFIG || {};
  const folderId = (config.publicDriveFolderId || '').trim();
  const placeholder = $('#drive-embed-placeholder');
  const frame = $('#drive-embed');
  const publicLink = $('#public-drive-link');
  if (folderId && folderId !== 'PASTE_PUBLIC_FOLDER_ID_HERE') {
    frame.src = `https://drive.google.com/embeddedfolderview?id=${encodeURIComponent(folderId)}#grid`;
    frame.classList.remove('hidden');
    placeholder.classList.add('hidden');
    publicLink.href = `https://drive.google.com/drive/folders/${encodeURIComponent(folderId)}`;
  } else {
    frame.classList.add('hidden');
    placeholder.classList.remove('hidden');
    publicLink.href = 'https://drive.google.com/drive/my-drive';
  }
})();
