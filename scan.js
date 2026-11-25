// Every label QR points at /i/<CODE>. To switch all printed labels to the real scan form,
// set SCAN_FORM_URL (the code is appended URL-encoded), e.g. 'https://example.com/scan?code='.
var SCAN_FORM_URL = '';

(function () {
  var match = location.pathname.match(/\/i\/([A-Za-z0-9_-]+)\/?$/);
  var code = match ? match[1].toUpperCase() : null;
  if (code && SCAN_FORM_URL) {
    location.replace(SCAN_FORM_URL + encodeURIComponent(code));
    return;
  }
  document.getElementById('code').textContent = code || 'Unknown label';
  document.getElementById('message').textContent = code
    ? 'This label is registered. Reporting stock and requesting items will open here soon.'
    : 'This QR code does not contain a Tulpar item code.';
})();
