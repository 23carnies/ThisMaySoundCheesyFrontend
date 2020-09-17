const BASE_URL = '/api/cheese'

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

export function create(cheese) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(cheese)
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  export function update(cheese) {
    return fetch(`${BASE_URL}/${cheese._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(cheese)
    }).then(res => res.json());
  }