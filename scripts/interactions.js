document.querySelectorAll('button').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    var rect   = this.getBoundingClientRect();
    var size   = Math.max(rect.width, rect.height);
    var ripple = document.createElement('span');
    ripple.style.cssText =
      'position:absolute;' +
      'width:' + size + 'px;height:' + size + 'px;' +
      'left:' + (e.clientX - rect.left - size/2) + 'px;' +
      'top:' + (e.clientY - rect.top - size/2) + 'px;' +
      'border-radius:50%;' +
      'background:rgba(255,255,255,0.3);' +
      'transform:scale(0);' +
      'animation:ripple 0.55s linear;' +
      'pointer-events:none;';
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', function() { ripple.remove(); });
  });
});

document.querySelectorAll('.feature-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect  = card.getBoundingClientRect();
    var x     = e.clientX - rect.left - rect.width  / 2;
    var y     = e.clientY - rect.top  - rect.height / 2;
    card.style.transform =
      'translateY(-6px) rotateX(' + (-(y / rect.height) * 8) + 'deg) rotateY(' + ((x / rect.width) * 8) + 'deg)';
  });
  card.addEventListener('mouseleave', function() {
    card.style.transform = '';
  });
});

document.querySelectorAll('.testi-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var x    = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    var y    = ((e.clientY - rect.top ) / rect.height * 100).toFixed(1);
    card.style.background =
      'radial-gradient(circle at ' + x + '% ' + y + '%, #f0faf9, #ffffff 60%)';
  });
  card.addEventListener('mouseleave', function() {
    card.style.background = '';
  });
});

document.querySelectorAll('.check, .dash-check').forEach(function(check) {
  check.style.cursor = 'pointer';
  check.addEventListener('click', function() {
    this.classList.toggle('done');
    var text = this.nextElementSibling;
    if (text) {
      
      if (text.classList.contains('dash-task-text')) {
        text.classList.toggle('done');
      } else {
        text.classList.toggle('task-text-done');
      }
    }
  });
});

var pills = document.querySelectorAll('.billing-pill');
if (pills.length) {
  pills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      pills.forEach(function(p) { p.classList.remove('active'); });
      pill.classList.add('active');

      var yearly = pill.textContent.trim().toLowerCase() === 'yearly';
      var prices = [
        { id: 'price-free', monthly: '$0',  yearly: '$0'  },
        { id: 'price-pro',  monthly: '$8',  yearly: '$6'  },
        { id: 'price-biz',  monthly: '$20', yearly: '$16' },
      ];
      prices.forEach(function(p) {
        var el = document.getElementById(p.id);
        if (el) {
          el.childNodes[0].textContent = (yearly ? p.yearly : p.monthly) + ' ';
        }
      });
    });
  });
}
