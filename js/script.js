document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Highlight current page in nav
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // ---- Looping typewriter, shown as a fixed floating badge on every page ----
  // Fixed positioning means the animation can never push page content around.
  var chip = document.createElement('div');
  chip.className = 'query-fab';
  chip.id = 'queryFab';
  document.body.appendChild(chip);

  var lines = [
    { text: "SELECT name FROM analysts WHERE role='BI Analyst';", result: "→ Bukola Adekunle" },
    { text: "SELECT skills FROM profile LIMIT 3;", result: "→ SQL, Power BI, Excel" },
    { text: "SELECT impact FROM palmpay_2025;", result: "→ 40% less manual work" }
  ];

  var lineIndex = 0;
  var charIndex = 0;
  var typingResult = false;
  var pause = 0;

  function tick() {
    var current = lines[lineIndex];
    var target = typingResult ? current.result : current.text;

    if (pause > 0) {
      pause -= 1;
      setTimeout(tick, 40);
      return;
    }

    if (charIndex <= target.length) {
      var typedQuery = current.text.slice(0, typingResult ? current.text.length : charIndex);
      var typedResult = typingResult ? current.result.slice(0, charIndex) : '';
      chip.innerHTML =
        '<span class="kw">' + escapeHtml(typedQuery) + '</span><span class="cursor"></span>' +
        (typedResult ? '<br><span class="str">' + escapeHtml(typedResult) + '</span>' : '');
      charIndex += 1;
      setTimeout(tick, typingResult ? 35 : 28);
    } else {
      if (!typingResult) {
        typingResult = true;
        charIndex = 0;
        pause = 15;
        tick();
      } else {
        // move to next line after a pause
        pause = 30;
        typingResult = false;
        charIndex = 0;
        lineIndex = (lineIndex + 1) % lines.length;
        tick();
      }
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  tick();
});
