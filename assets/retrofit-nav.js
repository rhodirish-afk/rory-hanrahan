(function () {
  var active = (document.body && document.body.getAttribute('data-nav')) || '';
  function link(href, label, isActive) {
    var cls = isActive ? 'text-ink font-medium' : 'hover:text-ink transition';
    return '<a href="' + href + '" class="' + cls + '">' + label + '</a>';
  }
  function mlink(href, label, isActive) {
    var cls = isActive ? 'block py-2 text-ink font-medium' : 'block py-2 text-muted hover:text-ink';
    return '<a href="' + href + '" class="' + cls + '">' + label + '</a>';
  }
  var items = [
    ['/', 'Home', active === 'home'],
    ['/writing.html', 'Writing', active === 'writing'],
    ['/pubs.html', 'Pubs', active === 'pubs'],
    ['/campaigns.html', 'Campaigns', active === 'campaigns'],
    ['/column.html', 'Column', active === 'column'],
    ['/media.html', 'Media', active === 'media']
  ];
  var desk = items.map(function (i) { return link(i[0], i[1], i[2]); }).join('');
  var mob = items.map(function (i) { return mlink(i[0], i[1], i[2]); }).join('') +
    '<a href="https://roryhanrahan.substack.com/" class="block py-2 text-accent font-medium" target="_blank" rel="noopener">Subscribe</a>';
  var header =
    '<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded z-50">Skip to content</a>' +
    '<header class="border-b border-soft bg-cream/90 backdrop-blur sticky top-0 z-40">' +
    '<div class="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between gap-4">' +
    '<a href="/" class="font-serif text-xl tracking-tight font-semibold text-accent">Rory Hanrahan</a>' +
    '<nav id="desktop-nav" class="hidden lg:flex gap-4 text-sm text-muted" aria-label="Primary">' + desk + '</nav>' +
    '<div class="flex items-center gap-2">' +
    '<a href="https://roryhanrahan.substack.com/" class="hidden sm:inline-block text-xs sm:text-sm bg-accent text-white px-3 py-1.5 rounded hover:bg-red-900 transition" target="_blank" rel="noopener">Subscribe</a>' +
    '<button type="button" id="nav-toggle" class="lg:hidden inline-flex items-center justify-center p-2 rounded border border-soft text-ink hover:bg-white" aria-controls="mobile-nav" aria-expanded="false" aria-label="Open menu">' +
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button></div></div>' +
    '<nav id="mobile-nav" class="hidden lg:hidden border-t border-soft bg-cream px-5 py-3 text-sm" aria-label="Mobile">' + mob + '</nav></header>';
  var footer =
    '<footer class="border-t border-soft bg-cream py-10 mt-8"><div class="max-w-5xl mx-auto px-5 text-sm text-muted flex flex-col sm:flex-row justify-between gap-4">' +
    '<p>© 2026 Rory Hanrahan · <a href="https://roryhanrahan.co.uk" class="underline hover:text-ink">roryhanrahan.co.uk</a> · <a href="https://ko-fi.com/roryhanrahan" class="hover:text-ink" target="_blank" rel="noopener">Buy the landlord a pint</a></p>' +
    '<p class="flex flex-wrap gap-x-4 gap-y-1">' +
    '<a href="/writing.html" class="hover:text-ink">Writing</a><a href="/pubs.html" class="hover:text-ink">Pubs</a><a href="/campaigns.html" class="hover:text-ink">Campaigns</a><a href="/column.html" class="hover:text-ink">Column</a><a href="/media.html" class="hover:text-ink">Media</a><a href="/privacy.html" class="hover:text-ink">Privacy</a><a href="https://roryhanrahan.substack.com/" class="hover:text-ink" target="_blank" rel="noopener">Substack</a></p></div></footer>';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  ready(function () {
    var oldH = document.querySelector('header');
    if (oldH) {
      var wrap = document.createElement('div');
      wrap.innerHTML = header;
      while (wrap.firstChild) oldH.parentNode.insertBefore(wrap.firstChild, oldH);
      oldH.remove();
    }
    var oldF = document.querySelector('footer');
    if (oldF) {
      var w2 = document.createElement('div');
      w2.innerHTML = footer;
      while (w2.firstChild) oldF.parentNode.insertBefore(w2.firstChild, oldF);
      oldF.remove();
    }
    if (!document.getElementById('main')) {
      var m = document.querySelector('main');
      if (m) m.id = 'main';
    }
  });
})();
