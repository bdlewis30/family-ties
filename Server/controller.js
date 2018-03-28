module.exports = {
    getUser: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { displayName, picture } = req.body

        db.users.find_user([displayName, picture, id]).then(result => res.send(result))
    }
}