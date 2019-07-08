import fetch from "isomorphic-fetch";

export const HEADERS = {
  JSON: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};
export const IS_API = "@@API";

export function apiRequest(url, options) {
  return fetch(
    url,
    Object.assign({}, options, { credentials: "include" })
  ).then(response => {
    if (response.ok) {
      return response.json().then(data => ({ response: data }));
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(json => ({
        [IS_API]: true,
        error: json,
        status: response.status
      }));
    }
    return response
      .text()
      .then(text => ({ [IS_API]: true, error: text, status: response.status }));
  });
}
