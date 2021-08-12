const followUnfollowUserAction = (state, userId, isFollowed) => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === userId) {
                return {...u, followed: isFollowed}
            }
            return u;
        })
    }
}

export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}