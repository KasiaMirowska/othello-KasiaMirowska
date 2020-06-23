
export const switchUser = (user) => {
    let updatedUser;
    if (user === 'B') {
        updatedUser = 'W';
    } else {
        updatedUser = 'B'
    }
    return updatedUser;
}