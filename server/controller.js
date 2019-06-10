module.exports = {

    getHouses: (req, res) => {
        const db = req.app.get('../db');
        db.getHouses()
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                res.status(500).send({ errorMessage: "Something went wrong" });
                console.log(err);
            })
    },

    addHouse: (req, res) => {
        console.log(req.body)
        const db = req.app.get('../db');
        const {propertyname, address, city, state, zip, image, mortgage, rent} = req.body.newValues
        db.addHouse([propertyname, address, city, state, zip, image, mortgage, rent])
            .then(response => {
                res.sendStatus(200)
            })
            .catch(err => {
                res.status(500).send({ errorMessage: "Something went wrong" });
                console.log(err);
            })
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('../db');
        db.deleteHouse(req.params.id).then(results => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    }


}