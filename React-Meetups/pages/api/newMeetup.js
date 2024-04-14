/* Next.js will pick up any JavaScript files stored in there(in api-folder) and turn those files into API routes, so into endpoints that can be targeted by request that should receive JSON and return JSON

- The code defined in here will never end up on the client-side
- this is secure place to store "credentials"
- path:   /api/newMeetup
*/

import { MongoClient } from 'mongodb';

// req = contains data about the incoming request
// res = sending back a response
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // data of incoming request

    const client = await MongoClient.connect(
      'mongodb+srv://shahram:96C5ScLzZs4ghP7Z@cluster-sh.rgaxnx4.mongodb.net/?retryWrites=true&w=majority&appName=react-next-meetups'
    );
    const db = client.db(); // get hold of the database-> react-next-meetups

    const meetupsCollection = db.collection('meetups');

    // inserting one new document(is just ana obj) into this collection
    const result = meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    //send back a response | 201 = sth inserted successfully
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

/* collection
  collections full of documents
  document
    a single entry in a collection

- MongoDB is a NoSQL-database
- it is not relational database
- it is a document-based database

- collections would be kind of your table in SQL-database
- document would be your entries in those tables

-> you have collections which hold multiple documents and a single meetup would be a single document

*/
