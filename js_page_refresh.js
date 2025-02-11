## Use tampermonkey to save the script in your browser.

(function refreshPage() {
  const urlToRefresh = 'https://example.com'; // Replace with the URL you want to refresh
  const refreshInterval = 60000; // 60 seconds

  if (window.location.href === urlToRefresh) {
    setTimeout(() => {
      window.location.reload();
    }, refreshInterval);
  }
})();
