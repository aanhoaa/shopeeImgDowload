
const button = document.createElement('button');
button.textContent = 'Greet me!'
document.body.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', function () {
  var parent = document.querySelector(".page-product .product-briefing .flex");
  var target = parent.children.item(1);
  var rawName = target.children[0].children[0].children[0].children[0].className;
  var name = rawName.split(" ")[0];
   var elements = document.getElementsByClassName(name);

   var listImg = [];
  for (var i = 0, len = elements.length; i < len; i++) {
  var rawUrl = elements[i].style.backgroundImage;
  var url = rawUrl.slice(5, rawUrl.length-2);
  listImg.push(url);
}
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      data: listImg
    }
  });
});