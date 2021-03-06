var jsonRequester = (function() {

  function send(method, url, options) {
    options = options || {};

    var headers = options.headers || {},
      data = options.data || undefined,
      contentType = options.contentType || 'application/json';

    data = (contentType === 'application/json') ? JSON.stringify(data) : data;

    var promise = new Promise(function(resolve, reject) {
      $.ajax({
        url: url,
        method: method,
        contentType: contentType,
        headers: headers,
        data: data,
        success: function(res) {
          resolve(res);
        },
        error: function(err) {
          reject(err);
        }
      });
    });
    return promise;
  }

  function get(url, options) {
    return send('GET', url, options);
  }

  function post(url, options) {
    return send('POST', url, options);
  }

  function put(url, options) {
    return send('PUT', url, options);
  }

  function del(url, options) {
    return send('POST', url, options);
  }

  return {
    send: send,
    get: get,
    post: post,
    put: put,
    delete: del
  };
}());