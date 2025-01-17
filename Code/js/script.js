var btntest = document.getElementById('btntest');
var table = document.getElementById('table');

btntest.addEventListener('click', function () {
var isHidden = table.style.display === 'none';

if (isHidden) {
  table.style.display = 'flex';
}
else {
  table.style.display = 'none';
}
});