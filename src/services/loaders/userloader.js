export const userloader = async () => {

    try {
        const result = await fetch('https://dummyjson.com/user?limit=5&skip=5&select=firstName,email,company').then(async (res) => {
            return await res.json();
        })

        if (!result.total) {
            throw new Error('Unable to load the users!');
        }
        return result.users
    } catch (error) {
        throw new Error('Unable to load the users!');
    }

    
}

export const userSingleloader = async (id) => {
    const result = await fetch('https://dummyjson.com/users/' + id)
        .then(async (res) => { return await res.json() })

    console.log(result)
    if (!result.id) {
        throw new Error('Unable to find this user!');
    }
    return result
}
