import url from './url';

// Index loader to load all todos
export const indexLoader = async () => {
    const response = await fetch(url)
    const todos = await response.json()
    return todos
}

// Show loader to load a single todo
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const todo = await response.json()
    return todo
}