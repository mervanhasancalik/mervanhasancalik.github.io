# Tulpar inventory labels

Each inventory QR label encodes `https://mervanhasancalik.github.io/i/<CODE>` (for example `TLP-0001`).
The pages hold no inventory data. To send every label to the real scan form, set `SCAN_FORM_URL` in `scan.js`;
the item code is appended to it. Codes not listed under `i/` are still handled by `404.html`.
