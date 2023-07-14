 const initState = [
    {
        name: 'zhangshan' , 
        age: 18
    },
    {
        name: 'lisi' , 
        age: 20
    },
]
 const userReducer = (initState: {name: string , age: number}[] , action: {
    type: string,
    payload: any
 }) => {
    switch (action.type) {
        case 'add':
            return [...initState, action.payload]
        case 'delete':
            return initState.filter((item: any) => item.id === action.payload.id)
        case 'update':
            return [action.payload, ...initState]
        default:
            return initState
    }
}
export {
    initState , userReducer
}