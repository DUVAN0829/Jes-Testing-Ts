
interface User {
    id: number
    name: string
}

const users: User[] = [
    { id: 1, name: 'Jhon Doe' },
    { id: 2, name: 'Jane Doe' }
]

export function getUserById(id: number, callback: (err?: string, user?: User) => void) {

    const user = users.find((user) => {
        return user.id === id;
    })

    if (!user) {
        setTimeout(() => {
            callback(`User not found with id ${id}`)
        }, 2500);

        return
    }

    return callback(undefined, user)

}