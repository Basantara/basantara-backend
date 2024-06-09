const firestoreDatabase = require("../utils/firestoreConnect");

async function getAllAlphabets(req, res) {
    const dataCollection = [];

    try {
        const firestoreData = await firestoreDatabase.collection('bisindo').get();
        console.log(firestoreData.docs.forEach(
            (doc) => {
                dataCollection.push(doc.data());
            }
        ));
        res.status(200);
        res.send({
            'message': 'success',
            'data': dataCollection,
        });
    } catch (error) {
        res.status(500);
        res.send({
            'message': 'internal server error',
        });
        console.log(error);
    }
}

module.exports = { getAllAlphabets };