let favoriteList = [];

exports.create = (data) => {
    favoriteList.push(data);
};

exports.findAll = () => {
    return favoriteList;
};

exports.deleteById = (id) => {
    const index = favoriteList.findIndex(p => p.id == id);
    if (index === -1) return false
    favoriteList.splice(index, 1)
    return true
}