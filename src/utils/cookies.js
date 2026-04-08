// Cookie utility functions

// Set a cookie
export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

// Get a cookie
export function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Delete a cookie
export function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// Check login status
export function checkLoginStatus() {
  const loginStatus = getCookie("loginStatus");
  return loginStatus === "loggedIn";
}

// Set login status
export function setLoginStatus(status) {
  if (status) {
    setCookie("loginStatus", "loggedIn", 7);
  } else {
    eraseCookie("loginStatus");
  }
}
