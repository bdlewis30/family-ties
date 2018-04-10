module.exports = {
    getUser: (req, res) => {
        const db = req.app.get('db')
        const {displayName, picture } = req.body

        db.users.find_user([displayName, picture, user_id])
        .then(result => res.send(result))
    }
}