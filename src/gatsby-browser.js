const injectPinterestScript = (tall, round) => {
  const addJS = () => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://assets.pinterest.com/js/pinit.js";

    script.setAttribute("data-pin-hover", "true");

    if (tall) {
      script.setAttribute("data-pin-tall", "true");
    }

    if (round) {
      script.setAttribute("data-pin-round", "true");
    }

    document.getElementsByTagName("head")[0].appendChild(script);
  };

  addJS();
};

let injectedPinterestScript = false;

exports.onRouteUpdate = (args, { tall = true, round = false } = {}) => {
  if (document.querySelector("[data-pin-do]") !== null) {
    if (!injectedPinterestScript) {
      injectPinterestScript(tall, round);

      injectedPinterestScript = true;
    }
  }
};
