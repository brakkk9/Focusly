(function() {
  var heroH1 = document.querySelector('.hero h1');
  if (!heroH1) return;

  var lines = [
    'Stay focused,\nget things done',
    'Organize tasks,\nhit every deadline',
    'Work smarter,\nnot harder',
  ];

  var lineIdx  = 0;
  var charIdx  = 0;
  var deleting = false;
  var pausing  = false;

  function renderLine(raw) {
    var parts = raw.split('\n');
    heroH1.innerHTML = parts[0] +
      (parts[1] ? '<br><span>' + parts[1] + '</span>' : '');
  }

  function type() {
    if (pausing) return;
    var full = lines[lineIdx];

    if (!deleting) {
      charIdx++;
      renderLine(full.slice(0, charIdx));
      if (charIdx === full.length) {
        pausing = true;
        setTimeout(function() { pausing = false; deleting = true; }, 2400);
      }
    } else {
      charIdx--;
      renderLine(full.slice(0, charIdx));
      if (charIdx === 0) {
        deleting = false;
        lineIdx = (lineIdx + 1) % lines.length;
      }
    }
    setTimeout(type, deleting ? 40 : 70);
  }

  setTimeout(type, 800);
})();
