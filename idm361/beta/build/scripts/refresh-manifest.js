window.addEventListener('load', function(e) {
  if (window.applicationCache) {
    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          // Swap it in and reload the page to get the new hotness.
          window.applicationCache.swapCache();
          if (confirm('There are updates available for this mobile web app. Would you like to load them now?')) {
            window.location.reload();
          }
        } else {
          // Manifest didn't changed. Nothing new to server.
        }
    }, false);
  }
}, false);
