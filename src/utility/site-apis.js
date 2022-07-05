import Config from "../common/Config";
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: Config.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export function apiPostCall(path, params) {
  let headers = {}
  if (params.token) {
    headers.Authorization = params.token
  }
  if (params.razorPaySignature) {
    headers["x-razorpay-signature"] = params.razorPaySignature
  }
  delete params.token
  delete params.razorPaySignature
  return axiosAPI.post(path, params, { headers: headers })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiPutCall(path, params) {
  let token = params.token
  delete params.token
  return axiosAPI.put(path, params, { headers: { 'Authorization': token } })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiGetCall(path, params) {
  let token = params.token
  delete params.token
  let newUrl = `${path}?`
  for (const key of Object.keys(params)) {
    if (params[key]) {
      newUrl += `${key}=${params[key]}&`
    }
  }
  return axiosAPI.get(newUrl, { headers: { 'Authorization': token } })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function apiDeleteCall(path, params) {
  let token = params.token
  delete params.token
  return axiosAPI.delete(path, { headers: { 'Authorization': token } })
    .then((response) => {
      return response
    })
    .catch((error) => {
      if (error.response) {
        return error.response
      } else if (error.request) {
        return error.request
      } else {
        return error.message
      }
    });
}

export function uploadImgApi(file, token) {
  const data = new FormData();
  data.append('files', file);
  return fetch(`${Config.apiBaseUrl}/file/upload`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      authorization: token,
    },
    body: data,
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson) {
        return `${responseJson.data[0].url}`
      }
      return null
    }).catch(error => {
      return error;
    });
}