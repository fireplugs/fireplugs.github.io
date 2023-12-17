for (const e of document.querySelectorAll('[js-animate]')) {
  const animate = e.getAttribute('js-animate');
  e.classList.remove('wow');
  e.classList.remove(animate);
  e.classList.add('wow');
  e.classList.add(animate);
}

try {
  wow = new WOW(
    {
      callback: function (box) {
        box.style.visibility = 'visible';
        box.style.opacity = '1';
      },
    }
  );
  wow.init();

} catch (error) {
  console.log(error);
}

if (!getCookie('lindo_accept_cookie')) {
  document.body.insertAdjacentHTML('beforeend', `
    <div id="cookies-simple-with-dismiss-button" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-[60] sm:max-w-5xl w-full mx-auto p-6">
    <div class="p-4 bg-white/[.6] backdrop-blur-lg shadow-2xl border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-between items-center gap-x-5 sm:gap-x-10">
        <h2 class="text-base text-gray-600 dark:text-gray-400">
          By continuing to use this site you consent to the use of cookies in accordance with our 
          <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="/cookies"> 
            Cookies Policy.
          </a>
        </h2>
        <button js-accept-cookie type="button" class="inline-flex bg-gray-200 rounded-full p-3 text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-400" data-hs-remove-element="#cookies-simple-with-dismiss-button">
          <span>Accept</span>
        </button>
      </div>
    </div>
  </div>
  `);

  for (const b of document.querySelectorAll('[js-accept-cookie]')) {
    b.onclick = function () {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1); // Cookie expires in 1 year
      document.cookie = "lindo_accept_cookie=1; expires=" + date.toUTCString() + "; path=/";
      const w = document.getElementById('cookies-simple-with-dismiss-button');
      w && w.remove();
    }
  }
}

function getCookie(name) {
  var cookies = decodeURIComponent(document.cookie).split(';');
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function protectEmail(emailElement, username) {
  const name = 'projectiris77' || username;
  const domain = 'gmail.com';
  const protectedEmail = name + "@" + domain;

  if (emailElement.tagName !== 'FORM') {
    emailElement.setAttribute("href", "mailto:" + protectedEmail);
    emailElement.innerHTML = protectedEmail;
  }
  
  return protectedEmail
}
