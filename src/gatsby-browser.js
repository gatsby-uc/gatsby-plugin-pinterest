const injectPinterestScript = (tall, round) => {
  const addJS = () => {
    const s = document.createElement(`script`);
    s.type = `text/javascript`;
    s.setAttribute("async", "async");
    s.setAttribute("defer", "defer");
    s.setAttribute("data-pin-hover", "true");
    if (tall) {
      s.setAttribute("data-pin-tall", "true");
    }
    if (round) {
      s.setAttribute("data-pin-round", "true");
    }
    s.setAttribute("src", "https://assets.pinterest.com/js/pinit.js");
    document.getElementsByTagName(`head`)[0].appendChild(s);
  };

  addJS();
};

let injectedPinterestScript = false;

exports.onRouteUpdate = (args, pluginOptions) => {
  if (document.querySelector("[data-pin-do]") !== null) {
    if (!injectedPinterestScript) {
      const { tall = true, round = false } = pluginOptions;

      injectPinterestScript(tall, round);
      injectedPinterestScript = true;
    }
  }
};
