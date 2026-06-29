/**
 * Post-build script: pre-renders the SPA into static HTML for SEO.
 * Spins up a local server, uses Puppeteer to capture the fully-rendered DOM,
 * and writes it back to dist/index.html.
 */
import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, join, extname } from 'path';
import puppeteer from 'puppeteer';

const DIST = resolve(process.cwd(), 'dist');
const PORT = 4173;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json',
};

// Simple static file server
const server = createServer((req, res) => {
  const filePath = join(DIST, req.url === '/' ? '/index.html' : req.url);
  try {
    const data = readFileSync(filePath);
    const ext = extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    // SPA fallback
    const html = readFileSync(join(DIST, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  }
});

server.listen(PORT, async () => {
  console.log(`[prerender] Serving dist on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for animations/lazy content
  await new Promise((r) => setTimeout(r, 2000));

  // Get the full rendered HTML
  const html = await page.content();

  await browser.close();
  server.close();

  // Write pre-rendered HTML back
  const outputPath = join(DIST, 'index.html');
  writeFileSync(outputPath, html, 'utf-8');

  console.log(`[prerender] Wrote pre-rendered HTML to ${outputPath}`);
  console.log(`[prerender] Size: ${(html.length / 1024).toFixed(1)} KB`);
});
