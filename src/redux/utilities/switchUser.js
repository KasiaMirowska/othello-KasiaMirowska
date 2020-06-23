
export const switchUser = (user) => {
    let updatedUser;
    if (user === 'Black') {
        updatedUser = 'White';
    } else {
        updatedUser = 'Black'
    }
    return updatedUser;
}