import {useParams} from 'react-router-dom'

const url = 'http://localhost:3030/'

export const getAll = () => {
    let suffix = "data/games?sortBy=_createdOn%20desc"

    return fetch(`${url}${suffix}`)
    .then(res => res.json())
}

export const getGame = (id) => {
    let suffix = `data/games/${id}`

    return fetch(`${url}${suffix}`)
    .then(res => res.json())
}

export const editGame =(id , body) => {
    let suffix = `data/games/${id}`

    return fetch(`${url}${suffix}` , {
        method: 'put',
        headers: {
            'content-type' : 'application/json',
            // "X-Authorization": {session token}
        },
        body: JSON.stringify(body)

    })
    .then(res => res.json())

}

