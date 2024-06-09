const { Firestore } = require('@google-cloud/firestore');

const firestoreDatabase = new Firestore({
    projectId : process.env.PROJECT_ID,
});

module.exports = firestoreDatabase;