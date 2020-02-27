const injectPinterestScript = ({ tall, round, imageHover }) => {
  function addJS() {
    const s = document.createElement(`script`);
    s.type = `text/javascript`;
    s.setAttribute("async", "async");
    s.setAttribute("defer", "defer");
    if(imageHover) {
      s.setAttribute("data-pin-hover", "true");
    }
    if(tall) {
      s.setAttribute("data-pin-tall", "true");
    }
    if(round) {
      s.setAttribute("data-pin-round", "true");
    }
    s.setAttribute("src", "https://assets.pinterest.com/js/pinit.js");
    document.getElementsByTagName(`head`)[0].appendChild(s);
  }
  addJS();
};

let injectedPinterestScript = false

exports.onRouteUpdate = (args, pluginOptions) => {
  const {
    tall = true,
    round = false,
    imageHover = false,
  } = pluginOptions;

  const selectors = ['[data-pin-do]'];

  if (imageHover) {
    selectors.push('img');
  }

  if (document.querySelector(selectors.join(',')) !== null) {
    if (!injectedPinterestScript) {
      injectPinterestScript({ tall, round, imageHover });
      injectedPinterestScript = true;
    }
  }
};
