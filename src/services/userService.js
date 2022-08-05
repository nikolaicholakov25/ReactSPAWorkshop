const url = 'http://localhost:3030/'

export const showSession = () => {
    return JSON.parse(sessionStorage.getItem('user'))
}


export const login = async (email,password) => {
    let suffix = "users/login"

        return fetch(`${url}${suffix}`, {
                method: 'post',
                headers: {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email,
                    password
                })
            })
            .then(res => res.json())
            .then(d => sessionStorage.setItem('user' , JSON.stringify(d)))

}


export const logout = () => {
    let suffix = 'users/logout'

    let acc = showSession().accessToken

    return fetch(`${url}${suffix}`, {
        headers : {
            'X-Authorization': acc
        }
    })
    .then(e => sessionStorage.clear())
}

export const register = (body) => {
    let suffix = 'users/register'

    return fetch(`${url}${suffix}` , {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(d => sessionStorage.setItem('user' , JSON.stringify(d)))
}