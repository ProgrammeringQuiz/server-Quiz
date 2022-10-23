const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://admin:4zYSLmNp7iMBGV1oyDfS@cluster0.fldldow.mongodb.net/?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        //await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, "What is Java?")
        await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client);

        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }

}

main().catch(console.error);

// Add functions that make DB calls here
async function findOneListingByName(client, question) {
    const result = await client.db("quiz").collection("java-questions").find({ question: question });

    if (result) {
        console.log(`Found a listing in the collection with the name '${question}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${question}'`);
    }
}

async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client) {
    const cursor = client.db("quiz").collection("java-questions").find()

    const results = await cursor.toArray();

    if (results.length > 0) {
        results.forEach((result, i) => {
            console.log();
            console.log(`${i + 1}. question: ${result.question}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   answer: ${result.answer}`);
            console.log(`   options: ${result.options}`);
        });
    } else {
        console.log(`No listings found with at least bedrooms and bathrooms`);
    }
}


