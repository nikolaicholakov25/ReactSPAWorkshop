import { showSession } from "./userService"

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

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'put',
        headers: {
            'content-type' : 'application/json',
            "X-Authorization": acc
        },
        body: JSON.stringify(body)

    })
    .then(res => res.json())

}

export const createGame = (game) => {
    let suffix = `data/games`

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'post',
        headers: {
            'content-type' : 'application/json',
            "X-Authorization": acc
        },
        body: JSON.stringify(game)
    })
    .then(res => res.json())
}


export const deleteGame = (gameId) => {
    let suffix = `data/games/${gameId}`

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'delete',
        headers: {
            "X-Authorization": acc
        },
    })
    .then(res => res.json())
}
export const getComments = (gameId) => {
    let suffix = `data/comments?where=gameId%3D%22${gameId}%22`

    return fetch(`${url}${suffix}`)
    .then(res => res.json())
}

export const addComment = (gameId,comment) => {
    let suffix = `data/comments`

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}` , {
        method: 'post',
        headers: {
            'content-type' : 'application/json',
            "X-Authorization": acc
        },
        body: JSON.stringify({
            gameId,
            comment
        })
    })
    .then(res => res.json())
}
