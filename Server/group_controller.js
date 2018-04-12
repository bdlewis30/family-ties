const handleErrors = (error, res) => {
    res.status(500).send(error)
}

const group_controller = {
    getAllGroups: (req, res) => {
        debugger;
        const db = req.app.get('db')
        
        db.group.find_group().then(result => {
            res.status(200).send(result)
        }).catch(error => {
            console.log(error)
        })
    }
    // getOneGroup: (req, res) => {
    //     const db = req.app.get('db')
    //     const { id } = req.params
    //     debugger;

    //     db.group.find_group([id]).then(result => {
    //         res.send(result)
    //     })
    // },
    // addGroups: (req, res) => {
    //     const db = req.app.get('db')

    // },
    // updateGroup: (req, res) => {
    //     const db = req.app.get('db  ')
    // },
    // deleteGroup: (req, res) => {
    //     const db = req.app.get('db')
    // }
}

module.exports = group_controller