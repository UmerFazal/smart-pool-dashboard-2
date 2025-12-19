self.addEventListener('fetch', (event) => {
  // This is a minimal service worker required for PWA installation
  event.respondWith(fetch(event.request));
});
3.  **In your `index.html`**, add this small script right before the closing `</body>` tag to activate it:
```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
</script>
