const firestoreDatabase = require("../utils/firestoreConnect");

async function getAllAlphabets(req, res) {
    const dataCollection = [];

    try {
        const firestoreData = await firestoreDatabase.collection('bisindo').get();
        firestoreData.docs.forEach(
            (doc) => {
                dataCollection.push(doc.data());
            }
        );
        res.status(200);
        res.json({
            status: "Success",
            message: 'fetch data success',
            data: dataCollection,
        });
    } catch (error) {
        res.status(500);
        res.json({
            status: "Error",
            message: 'Internal server error',
        });
        console.log(error);
    }
}

async function getRandomAlphabets(req, res) {
    try {
        const randomIndex = Math.floor(Math.random() * 26) + 1;
        const firestoreData = (await firestoreDatabase.collection('bisindo').where('id', '==', randomIndex).get()).docs;
        const alphabetData = firestoreData[0].data();

        res.status(200);
        res.json({
            status: "Success",
            message: 'fetch data success',
            data: alphabetData,
        });
    } catch (error) {
        res.status(500);
        res.json({
            status: "Error",
            message: 'Internal server error',
        });
        console.log(error);
    }
}

module.exports = { getAllAlphabets, getRandomAlphabets };