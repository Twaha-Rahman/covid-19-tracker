function requestIdleCallbackPolyfill(callback: any) {
  var start = Date.now();
  return setTimeout(function () {
    callback({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      },
    });
  }, 1);
}

export default requestIdleCallbackPolyfill;
