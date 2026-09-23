// One-off helper: inline built JS/CSS (plus font files sebagai base64)
// ke dalam satu preview.html, agar preview tampil utuh tanpa dev server.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
let html = readFileSync(join(dist, 'index.html'), 'utf8')

const assets = readdirSync(join(dist, 'assets'))
const js = assets.find((f) => f.endsWith('.js'))
const css = assets.find((f) => f.endsWith('.css'))

if (css) {
  let cssCode = readFileSync(join(dist, 'assets', css), 'utf8')

  // Inline semua font yang direferensikan CSS (url(assets/xxx.woff2|ttf|eot|svg))
  // menjadi data URI supaya icon & font tampil di preview tanpa file terpisah.
  cssCode = cssCode.replace(/url\(["']?\/?assets\/([^)"']+)["']?\)/g, (match, file) => {
    try {
      const buf = readFileSync(join(dist, 'assets', file))
      const ext = file.split('.').pop().toLowerCase()
      const mime =
        ext === 'woff2' ? 'font/woff2' :
        ext === 'woff' ? 'font/woff' :
        ext === 'ttf' ? 'font/ttf' :
        ext === 'eot' ? 'application/vnd.ms-fontobject' :
        ext === 'svg' ? 'image/svg+xml' : 'application/octet-stream'
      return `url(data:${mime};base64,${buf.toString('base64')})`
    } catch {
      return match
    }
  })

  html = html.replace(
    /<link rel="stylesheet"[^>]*href="[^"]*\.css"[^>]*>/,
    () => `<style>${cssCode}</style>`
  )
}

if (js) {
  const jsCode = readFileSync(join(dist, 'assets', js), 'utf8')
  html = html.replace(
    /<script type="module"[^>]*src="[^"]*\.js"[^>]*><\/script>/,
    () => `<script type="module">${jsCode}</script>`
  )
}

// Font Google cukup di-link langsung.
writeFileSync('preview.html', html)
console.log('preview.html generated:', js, css)
