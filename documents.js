// ── helper to format today’s date in YYYY‑MM‑DD ──────────────
function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

document.getElementById('documentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // collect values
  const docType = document.getElementById('docType').value.trim();
  const vehicle = document.getElementById('vehicle').value.trim();
  const expiry  = document.getElementById('expiry').value;
  const fileEl  = document.getElementById('file');
  const file    = fileEl.files[0];

  // quick validation
  if (!docType || !vehicle || !expiry || !file) {
    alert('Please complete every field and choose a file.');
    return;
  }

  // build table row
  const tbody = document.getElementById('documents-table-body');
  const tr    = document.createElement('tr');

  // make a temporary link so user can download/open the file
  const fileURL = URL.createObjectURL(file);

  tr.innerHTML = `
    <td>${docType}</td>
    <td>${vehicle}</td>
    <td>${expiry}</td>
    <td><a href="${fileURL}" target="_blank">${file.name}</a></td>
  `;

  tbody.appendChild(tr);

  // reset form (clears inputs & file chooser)
  e.target.reset();
  // reset the file input manually for some browsers
  fileEl.value = '';
});
