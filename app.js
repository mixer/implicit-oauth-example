const access_token = getAccessToken() || "An error has occurred";

const $code = document.querySelector(".code");
$code.textContent = access_token;

if (access_token !== "An error has occurred") {
  document.querySelector(".hint .onsuccess").classList.add('show');
  
  $code.addEventListener("mouseover", function () {
    select($code);
  });
  $code.addEventListener("mouseout", function () {
    deselect();
  });
} else {
	document.querySelector(".hint .onerror").classList.add('show');
}

function getAccessToken() {
  const hash = window.location.hash.slice(1);

  if (hash.length == 0) {
    return null;
  }

  let hashParts = hash.split("&");
  for (let i = 0; i < hashParts.length; i++) {
    let item = hashParts[i].split("=");
    if (item[0] === "access_token") {
      return item[1];
    }
  }

  return null;
}

function select(element) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
}

function deselect() {
  window.getSelection().removeAllRanges();
}
