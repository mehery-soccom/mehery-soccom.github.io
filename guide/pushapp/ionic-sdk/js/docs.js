/**
 * PushApp Ionic SDK — documentation site (MeherY docs)
 * Markdown is loaded from GitHub raw (PushApp-Capacitor repo).
 */

const SDK_VERSION = '0.1.2';

const GH = {
  owner: 'mehery-soccom',
  repo: 'PushApp-Capacitor',
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
    start: '## Quick checklist',
    end: '## Setup (overview)',
  },
  setup: {
    title: 'Setup',
    repoPath: 'docs/Integration-Guide.md',
    start: '## 1. Before you start',
    end: '## 5. SDK integration',
  },
  implementation: {
    title: 'Implementation',
    repoPath: 'docs/Integration-Guide.md',
    start: '## 5. SDK integration',
    end: '## 8. Optional',
  },
  placements: {
    title: 'In-app placements',
    repoPath: 'docs/Integration-Guide.md',
    start: '## 8. Optional',
    end: '## 9. Integration checklist',
  },
  checklist: {
    title: 'Integration checklist',
    repoPath: 'docs/Integration-Guide.md',
    start: '## 9. Integration checklist',
    end: '## 10. Troubleshooting',
  },
  troubleshooting: {
    title: 'Troubleshooting',
    repoPath: 'docs/Integration-Guide.md',
    start: '## 10. Troubleshooting',
    end: '## 11. API reference',
  },
  api: {
    title: 'API reference',
    repoPath: 'docs/api-reference.md',
  },
  qa: {
    title: 'QA test plan',
    repoPath: 'docs/QA-Test-Plan.md',
  },
  changelog: {
    title: 'Changelog',
    repoPath: 'CHANGELOG.md',
  },
};

/** Map markdown link targets → doc routes */
const LINK_MAP = {
  'README.md': 'getting-started',
  'docs/Integration-Guide.md': 'setup',
  'docs/api-reference.md': 'api',
  'docs/QA-Test-Plan.md': 'qa',
  'docs/dependencies.md': 'api',
  'CHANGELOG.md': 'changelog',
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

function integrationGuideRoute(hash) {
  if (!hash) return 'setup';
  const n = parseInt(hash.match(/^(\d+)/)?.[1] || '0', 10);
  if (n >= 5 && n <= 7) return 'implementation';
  if (n === 8) return 'placements';
  if (n === 9) return 'checklist';
  if (n >= 10) return 'troubleshooting';
  return 'setup';
}

function resolveDocLink(href) {
  if (!href) return null;
  const [path, hash] = href.split('#');
  const clean = path.replace(/^\.\//, '');
  if (LINK_MAP[clean]) {
    if (clean === 'docs/Integration-Guide.md') {
      return integrationGuideRoute(hash);
    }
    return LINK_MAP[clean];
  }
  if (clean.includes('Integration-Guide')) return integrationGuideRoute(hash);
  if (clean.includes('api-reference')) return 'api';
  if (clean.includes('QA-Test-Plan')) return 'qa';
  if (clean.includes('CHANGELOG')) return 'changelog';
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
      <h1>PushApp Ionic SDK</h1>
      <p>Push notifications, in-app messaging, and event tracking for Ionic / Angular / Capacitor apps on iOS and Android.</p>
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
        <p>Install, Firebase, Gradle, iOS AppDelegate, and native configuration.</p>
      </a>
      <a class="card" href="#implementation" data-doc-link="implementation">
        <span class="card-tag">Part 2</span>
        <h3>Implementation</h3>
        <p>initialize → register → login, session restore, and page tracking.</p>
      </a>
      <a class="card" href="#placements" data-doc-link="placements">
        <span class="card-tag">Optional</span>
        <h3>In-app placements</h3>
        <p>Inline placeholders and tooltip targets for campaign surfaces.</p>
      </a>
      <a class="card" href="#api" data-doc-link="api">
        <span class="card-tag">Reference</span>
        <h3>API reference</h3>
        <p>Methods, options, events, and error codes.</p>
      </a>
      <a class="card" href="#troubleshooting" data-doc-link="troubleshooting">
        <span class="card-tag">Support</span>
        <h3>Troubleshooting</h3>
        <p>Common integration issues and fixes.</p>
      </a>
    </div>
    <h2 style="margin-top:2.5rem;color:var(--navy)">Install</h2>
    <div class="code-block-wrap">
      <span class="code-lang">bash</span>
      <button type="button" class="copy-btn">Copy</button>
      <pre><code class="hljs language-bash">npm install pushapp-ionic @capacitor/push-notifications
npx cap sync</code></pre>
    </div>
    <p style="color:var(--text-muted);font-size:0.9rem">
      Package on <a href="https://www.npmjs.com/package/pushapp-ionic" target="_blank" rel="noopener">npm</a>
      · Source on <a href="https://github.com/mehery-soccom/PushApp-Capacitor" target="_blank" rel="noopener">GitHub</a>
      · Example app in <code>example-app/</code>
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
        <a href="https://github.com/mehery-soccom/PushApp-Capacitor" target="_blank" rel="noopener">PushApp-Capacitor</a>
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
