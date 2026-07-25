/**
 * PushApp React Native SDK — documentation site (MeherY docs)
 * Markdown is loaded from GitHub raw (PushApp-React-Native repo),
 * with a local content/ fallback for migrate guide and offline README.
 */

const SDK_VERSION = '0.0.49';

const GH = {
  owner: 'mehery-soccom',
  repo: 'PushApp-React-Native',
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
    title: 'Prerequisites checklist',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Prerequisites checklist',
    end: '## Installation',
  },
  installation: {
    title: 'Installation',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Installation',
    end: '## Platform configuration',
  },
  platform: {
    title: 'Platform configuration',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Platform configuration',
    end: '## Authenticate and initialize',
  },
  initialize: {
    title: 'Authenticate & initialize',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Authenticate and initialize',
    end: '## Mount polls',
  },
  polls: {
    title: 'Mount polls',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Mount polls',
    end: '## Track user events',
  },
  events: {
    title: 'Track user events',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Track user events',
    end: '## Public API reference',
  },
  api: {
    title: 'Public API',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Public API reference',
    end: '## Example app and iOS extensions',
  },
  example: {
    title: 'Example & iOS extensions',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Example app and iOS extensions',
    end: '## Notification payload notes',
  },
  payloads: {
    title: 'Notification payloads',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## Notification payload notes',
    end: '## ProGuard',
  },
  proguard: {
    title: 'ProGuard',
    repoPath: 'README.md',
    localPath: 'content/README.md',
    start: '## ProGuard',
    end: '## Support',
  },
};

/** Map markdown link targets → doc routes */
const LINK_MAP = {
  'README.md': 'getting-started',
  '#prerequisites-checklist': 'getting-started',
  '#installation': 'installation',
  '#platform-configuration': 'platform',
  '#authenticate-and-initialize': 'initialize',
  '#mount-polls': 'polls',
  '#track-user-events': 'events',
  '#public-api-reference': 'api',
  '#example-app-and-ios-extensions': 'example',
  '#notification-payload-notes': 'payloads',
  '#proguard': 'proguard',
  '#events': 'events',
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
  if (LINK_MAP[href]) return LINK_MAP[href];
  const [path, hash] = href.split('#');
  const clean = (path || '').replace(/^\.\//, '');
  if (LINK_MAP[clean]) return LINK_MAP[clean];
  if (hash && LINK_MAP[`#${hash}`]) return LINK_MAP[`#${hash}`];
  if (clean.includes('CHANGELOG')) return null;
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

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not load ${url} (${res.status})`);
  }
  return res.text();
}

async function fetchMarkdown(page) {
  // Prefer local copy (keeps MeherY docs in sync with this site's content/),
  // then fall back to GitHub raw from PushApp-React-Native.
  if (page.localPath) {
    try {
      return await fetchText(page.localPath);
    } catch (_) {
      /* try GitHub next */
    }
  }

  if (page.repoPath) {
    return fetchText(rawMarkdownUrl(page.repoPath));
  }

  throw new Error('No markdown source configured for this page');
}

function renderHome(container) {
  container.innerHTML = `
    <div class="hero">
      <h1>PushApp React Native SDK</h1>
      <p>Push notifications, in-app polls, interactive overlays, and real-time event tracking for React Native on iOS and Android.</p>
      <div class="hero-dots"><span></span><span></span><span></span></div>
    </div>
    <div class="card-grid">
      <a class="card" href="#getting-started" data-doc-link="getting-started">
        <span class="card-tag">Start here</span>
        <h3>Prerequisites checklist</h3>
        <p>Firebase, permissions, credentials, and root providers before writing integration code.</p>
      </a>
      <a class="card" href="#initialize" data-doc-link="initialize">
        <span class="card-tag">Core</span>
        <h3>Authenticate &amp; initialize</h3>
        <p>readCredentials → pushappAuth → initSdk on every cold start.</p>
      </a>
      <a class="card" href="#events" data-doc-link="events">
        <span class="card-tag">Events</span>
        <h3>Track user events</h3>
        <p>Login, page open, custom events, and migrate from Braze / CleverTap / MoEngage / WebEngage / AppsFlyer / Adjust.</p>
      </a>
      <a class="card" href="#api" data-doc-link="api">
        <span class="card-tag">Reference</span>
        <h3>Public API</h3>
        <p>Methods, types, poll containers, and notification helpers.</p>
      </a>
      <a class="card" href="#payloads" data-doc-link="payloads">
        <span class="card-tag">Push</span>
        <h3>Notification payloads</h3>
        <p>Data-only FCM, rich media, CTAs, and body-tap URLs.</p>
      </a>
      <a class="card" href="#platform" data-doc-link="platform">
        <span class="card-tag">Native</span>
        <h3>Platform configuration</h3>
        <p>Firebase, credentials, Android FCM service, and iOS capabilities.</p>
      </a>
    </div>
    <h2 style="margin-top:2.5rem;color:var(--navy)">Install</h2>
    <div class="code-block-wrap">
      <span class="code-lang">bash</span>
      <button type="button" class="copy-btn">Copy</button>
      <pre><code class="hljs language-bash">npm install react-native-mehery-event-sender
npm install @react-native-firebase/app @react-native-firebase/messaging
npm install @react-native-async-storage/async-storage react-native-push-notification
cd ios &amp;&amp; pod install</code></pre>
    </div>
    <p style="color:var(--text-muted);font-size:0.9rem">
      Package on <a href="https://www.npmjs.com/package/react-native-mehery-event-sender" target="_blank" rel="noopener">npm</a>
      · Source on <a href="https://github.com/mehery-soccom/PushApp-React-Native" target="_blank" rel="noopener">GitHub</a>
      · Current version <code>v${SDK_VERSION}</code>
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
        <a href="https://github.com/mehery-soccom/PushApp-React-Native" target="_blank" rel="noopener">PushApp-React-Native</a>
        on GitHub (with a local fallback). Check your network connection or try again later.
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
    let md = await fetchMarkdown(page);
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
