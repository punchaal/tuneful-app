import config from '../config'


const editProfileService = {
    updateUser({ description }) {
      return fetch(`${config.API_ENDPOINT}/users/:user_id`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ description }),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }
}

export default editProfileService