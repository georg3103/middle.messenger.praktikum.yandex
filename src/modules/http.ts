enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
};

const LOL = {
  GET: 'GET',
}

type Options = {
  headers?: Record<string, string>;
  timeout?: number;
  method: METHODS;
  data?: any;
};

const queryStringify = (data: object): string => {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }
  
  const keys = Object.keys(data);

  return Object.keys(data).reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
};

export default class HTTPTransport {
  get = (url: string, options: Options): Promise<any> => {	 
    const { data } = options;
    return this.request(!!data ? `${url}${queryStringify(data)}` : url, {...options, method: METHODS.GET}, options.timeout);
  };

  put = (url: string, options: Options): Promise<any> => {	 
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };

  post = (url: string, options: Options): Promise<any> => {	 
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };

  delete = (url: string, options: Options): Promise<any> => {	 
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request = (url: string, options: Options, timeout = 5000): Promise<any> => {
    const { headers = {}, method, data } = options;

    const isGet = method === METHODS.GET;
    
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.open(
        method,
        url,
      );
      
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
      
      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.timeout = timeout;
      
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      
      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
};
