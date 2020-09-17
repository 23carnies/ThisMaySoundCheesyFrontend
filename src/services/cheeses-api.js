import tokenService from '../services/tokenService';
const BASE_URL = '/api/cheeses/';

export function create(cheese) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(cheese)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
  }

  export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
  }

export function update(cheese) {
    return fetch(`${BASE_URL}${cheese._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(cheese)
    }, {mode: "cors"})
    .then(res => res.json());
  }