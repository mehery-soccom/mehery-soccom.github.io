/**
 * PushApp Flutter SDK — documentation site (MeherY docs)
 * Markdown is loaded from GitHub raw (PushApp-Flutter repo).
 */

const SDK_VERSION = '0.1.13';

const GH = {
  owner: 'mehery-soccom',
  repo: 'PushApp-Flutter',
  branch: 'main',
};

function rawMarkdownUrl(repoPath) {
  return `https://raw.githubusercontent.com/${GH.owner}/${GH.repo}/${GH.branch}/${repoPath}`;
}

const PAGES = {
  home: {
    title: 'Overview',
    type: 'home',
  },
  'getting-started': {
    title: 'Quick checklist',
    repoPath: 'README.md',
    start: '## What Your App Must Add',
    end: '# Part 1',
  },
  setup: {
    title: 'Setup',
    repoPath: 'README.md',
    start: '# Part 1',
    end: '# Part 2',
  },
  implementation: {
    title: 'Implementation',
    repoPath: 'README.md',
    start: '# Part 2',
    end: '## CI',
  },
  ios: {
    title: 'iOS extensions',
    repoPath: 'IOSREADME.md',
  },
  android: {
    title: 'Android integration',
    repoPath: 'AndroidREADME.md',
  },
  security: {
    title: 'WebView security',
    repoPath: 'WEBVIEW_SECURITY.md',
  },
  privacy: {
    title: 'Privacy & data',
    repoPath: 'PRIVACY.md',
  },
  changelog: {
    title: 'Changelog',
    repoPath: 'CHANGELOG.md',
  },
  example: {
    title: 'Example app',
    repoPath: 'example/README.md',
  },
};

/** Map markdown link targets → doc routes */
const LINK_MAP = {
  'README.md': 'setup',
  'IOSREADME.md': 'ios',
  'AndroidREADME.md': 'android',
  'WEBVIEW_SECURITY.md': 'security',
  'PRIVACY.md': 'privacy',
  'CHANGELOG.md': 'changelog',
  'VERSIONING.md': 'changelog',
  'PUBLISHING.md': 'changelog',
  'example/README.md': 'example',
};

let currentPage = 'home';

function configureMarked() {
  const renderer = new marked.Renderer();

  renderer.code = function (code, infostring) {
    const lang = (infostring || '').trim().split(/\s+/)[0] || 'text';
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return (
      `<div class="code-block-wrap">` +
      `<span class="code-lang">${lang}</span>` +
      `<button type="button" class="copy-btn" aria-label="Copy code">Copy</button>` +
      `<pre><code class="hljs language-${lang}">${escaped}</code></pre></div>`
    );
  };

  renderer.link = function (href, title, text) {
    const route = resolveDocLink(href);
    if (route) {
      const t = title ? ` title="${title}"` : '';
      return `<a href="#${route}" data-doc-link="${route}"${t}>${text}</a>`;
    }
    if (href && (href.startsWith('http') || href.startsWith('//'))) {
      const t = title ? ` title="${title}"` : '';
      return `<a href="${href}" target="_blank" rel="noopener"${t}>${text}</a>`;
    }
    const t = title ? ` title="${title}"` : '';
    return `<a href="${href || '#'}"${t}>${text}</a>`;
  };

  marked.setOptions({
    renderer,
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false,
  });
}

function resolveDocLink(href) {
  if (!href) return null;
  const clean = href.split('#')[0].replace(/^\.\//, '');
  if (LINK_MAP[clean]) return LINK_MAP[clean];
  if (clean.includes('IOSREADME')) return 'ios';
  if (clean.includes('AndroidREADME')) return 'android';
  if (clean.includes('WEBVIEW_SECURITY')) return 'security';
  if (clean.includes('PRIVACY')) return 'privacy';
  if (clean.includes('CHANGELOG')) return 'changelog';
  if (clean.includes('README.md') && clean.includes('example')) return 'example';
  return null;
}

function extractSection(markdown, start, end) {
  let content = markdown;
  if (start) {
    const i = markdown.indexOf(start);
    if (i >= 0) content = markdown.slice(i);
  }
  if (end) {
    const j = content.indexOf(end);
    if (j > 0) content = content.slice(0, j);
  }
  return content.trim();
}

async function fetchMarkdown(repoPath) {
  const res = await fetch(rawMarkdownUrl(repoPath));
  if (!res.ok) {
    throw new Error(`Could not load ${repoPath} (${res.status})`);
  }
  return res.text();
}

function renderHome(container) {
  container.innerHTML = `
    <div class="hero">
      <h1>PushApp Flutter SDK</h1>
      <p>Push notifications, event tracking, and in-app messaging for Flutter — banners, popups, PiP, roadblocks, inline slots, and tooltips.</p>
      <div class="hero-dots"><span></span><span></span><span></span></div>
    </div>
    <div class="card-grid">
      <a class="card" href="#getting-started" data-doc-link="getting-started">
        <span class="card-tag">Start here</span>
        <h3>Quick checklist</h3>
        <p>Everything your app needs before writing integration code.</p>
      </a>
      <a class="card" href="#setup" data-doc-link="setup">
        <span class="card-tag">Part 1</span>
        <h3>Setup</h3>
        <p>Firebase, Gradle, iOS capabilities, dependencies, and platform config.</p>
      </a>
      <a class="card" href="#implementation" data-doc-link="implementation">
        <span class="card-tag">Part 2</span>
        <h3>Implementation</h3>
        <p>Initialize PushApp, register tokens, login, page tracking, in-app widgets.</p>
      </a>
      <a class="card" href="#ios" data-doc-link="ios">
        <span class="card-tag">Platform</span>
        <h3>iOS extensions</h3>
        <p>Optional NSE, content extension, and Live Activity guides.</p>
      </a>
      <a class="card" href="#android" data-doc-link="android">
        <span class="card-tag">Platform</span>
        <h3>Android integration</h3>
        <p>FCM delivery, plugin manifest, and native template opt-in.</p>
      </a>
      <a class="card" href="#security" data-doc-link="security">
        <span class="card-tag">Production</span>
        <h3>WebView security</h3>
        <p>CTA allowlists and in-app HTML hardening.</p>
      </a>
    </div>
    <h2 style="margin-top:2.5rem;color:var(--navy)">Install</h2>
    <div class="code-block-wrap">
      <span class="code-lang">yaml</span>
      <button type="button" class="copy-btn">Copy</button>
      <pre><code class="hljs language-yaml">dependencies:
  mehery_sender: ^${SDK_VERSION}
  firebase_core: ^4.10.0
  firebase_messaging: ^16.3.0</code></pre>
    </div>
    <p style="color:var(--text-muted);font-size:0.9rem">
      Package on <a href="https://pub.dev/packages/mehery_sender" target="_blank" rel="noopener">pub.dev</a>
      · Source on <a href="https://github.com/mehery-soccom/PushApp-Flutter" target="_blank" rel="noopener">GitHub</a>
    </p>
  `;
  attachCopyButtons(container);
  if (window.hljs) {
    container.querySelectorAll('pre code').forEach((block) => hljs.highlightElement(block));
  }
}

function showLoading(container) {
  container.innerHTML =
    '<div class="loading"><div class="loading-spinner"></div>Loading documentation…</div>';
}

function showError(container, message) {
  container.innerHTML = `
    <div class="error-banner">
      <strong>Could not load docs.</strong> ${message}
      <p style="margin:0.75rem 0 0">
        Content is fetched from
        <a href="https://github.com/mehery-soccom/PushApp-Flutter" target="_blank" rel="noopener">PushApp-Flutter</a>
        on GitHub. Check your network connection or try again later.
      </p>
    </div>`;
}

async function loadPage(pageId) {
  const page = PAGES[pageId];
  if (!page) {
    navigate('home');
    return;
  }

  currentPage = pageId;
  updateNav();
  document.getElementById('topbar-title').textContent = page.title;

  const container = document.getElementById('doc-content');
  showLoading(container);

  if (page.type === 'home') {
    renderHome(container);
    return;
  }

  try {
    let md = await fetchMarkdown(page.repoPath);
    if (page.start || page.end) {
      md = extractSection(md, page.start, page.end);
    }
    // Fix checklist wording for Flutter hosts
    md = md.replace(/Your Ionic\/Capacitor app/g, 'Your Flutter app');
    container.innerHTML = `<article class="doc-content">${marked.parse(md)}</article>`;
    attachCopyButtons(container);
    if (window.hljs) {
      container.querySelectorAll('pre code').forEach((block) => hljs.highlightElement(block));
    }
    wireInternalLinks(container);
  } catch (err) {
    showError(container, err.message);
  }
}

function wireInternalLinks(root) {
  root.querySelectorAll('[data-doc-link]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(el.getAttribute('data-doc-link'));
      closeSidebar();
    });
  });
}

function attachCopyButtons(root) {
  root.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const pre = btn.closest('.code-block-wrap')?.querySelector('pre');
      if (!pre) return;
      try {
        await navigator.clipboard.writeText(pre.textContent || '');
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      } catch (_) {
        btn.textContent = 'Failed';
      }
    });
  });
}

function updateNav() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });
}

function navigate(pageId) {
  if (location.hash !== `#${pageId}`) {
    history.replaceState(null, '', `#${pageId}`);
  }
  loadPage(pageId);
}

function closeSidebar() {
  document.querySelector('.sidebar')?.classList.remove('open');
}

function initSearch() {
  const input = document.getElementById('doc-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('.nav-link').forEach((link) => {
      const text = link.textContent.toLowerCase();
      link.style.display = !q || text.includes(q) ? '' : 'none';
    });
  });
}

function initRouting() {
  const hash = location.hash.replace('#', '') || 'home';
  loadPage(PAGES[hash] ? hash : 'home');
  window.addEventListener('hashchange', () => {
    const id = location.hash.replace('#', '') || 'home';
    loadPage(PAGES[id] ? id : 'home');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  configureMarked();
  initSearch();
  initRouting();

  document.querySelectorAll('.nav-link[data-page]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
      closeSidebar();
    });
  });

  document.getElementById('mobile-toggle')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.toggle('open');
  });

  document.querySelector('.sidebar-brand a')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigate('home');
    closeSidebar();
  });

  wireInternalLinks(document);
});
