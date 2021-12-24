class Article {
  constructor(tag, title, content, img) {
    this.tag = tag;
    this.title = title;
    this.content = content;
    this.img = img;
  }
}

const history = new Article(
  'History',
  'JavaScript Origins',
  `The early to mid-1990s was an important time for the internet. Key players like Netscape and Microsoft were in the midst of browser wars, with Netscape's Navigator and Microsoft's Internet Explorer going head to head.
	In September 1995, a Netscape programmer named Brandan Eich developed a new scripting language in just 10 days. It was originally named Mocha, but quickly became known as LiveScript and, later, JavaScript. 
	Key players like Netscape and Microsoft were in the midst of browser wars, with Netscape's Navigator and Microsoft's Internet Explorer going head to head`,
  'history.jpg'
);

const vision = new Article(
  'Vision',
  'Javascript Vision',
  `JavaScript is very easy to implement. All you need to do is put your code in the HTML document and tell the browser that it is JavaScript. 
	JavaScript works on web users' computers — even when they are offline! JavaScript allows you to create highly responsive interfaces that improve the user experience and provide dynamic functionality, 
	without having to wait for the server to react and show another page. All you need to do is put your code in the HTML document and tell the browser that it is JavaScript. JavaScript can load content into the document if and when the user needs it, without reloading the entire page — this is commonly referred to as Ajax.`,
  'vision.png'
);

const goal = new Article(
  'Goal',
  'Javascript Goal',
  `Developers can use various JavaScript frameworks for developing and building web and mobile apps. 
JavaScript frameworks are collections of JavaScript code libraries that provide developers with pre-written code to use for routine programming features and tasks—literally a framework to build websites or web applications around. 
Popular JavaScript use various JavaScript frameworks for developing and building web front-end frameworks include React, React Native, Angular, and Vue. Many companies use Node.js, a JavaScript runtime environment built on Google Chrome's JavaScript V8 engine. A few famous examples include Paypal, LinkedIn, Netflix, and Uber!`,
  'goal.jpg'
);

const mainImg = document.querySelector('.main-img');
const articleTitle = document.querySelector('.article-title');
const articleText = document.querySelector('.article-text');
const navBtns = document.querySelectorAll('.nav-btn');

const toggleActiveClass = function () {
  navBtns.forEach(function (navBtn) {
    if (navBtn.classList.contains('active')) navBtn.classList.remove('active');
  });
  this.classList.add('active');
};

const setElementOpacity = function (opac) {
  mainImg.style.opacity = opac;
  articleTitle.style.opacity = opac;
  articleText.style.opacity = opac;
};

const displayArticle = function (article) {
  setElementOpacity(0);

  setTimeout(function () {
    setElementOpacity(1);

    mainImg.setAttribute('src', article.img);
    articleTitle.textContent = article.title;
    articleText.textContent = article.content;
  }, 280);
};

const toggleArticle = function () {
  const moveTo = this.textContent.trim().toLowerCase();

  const tacFun = toggleActiveClass.bind(this);
  tacFun();

  if (moveTo === 'history') {
    displayArticle(history);
  } else if (moveTo === 'vision') {
    displayArticle(vision);
  } else {
    displayArticle(goal);
  }
};

navBtns.forEach(function (navBtn) {
  navBtn.addEventListener('click', toggleArticle);
});

window.addEventListener('load', function () {
  displayArticle(history);
});
