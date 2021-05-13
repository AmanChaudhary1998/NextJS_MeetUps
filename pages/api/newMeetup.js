// these is for api server- database communication 
// api/newMeetup
// POST 

import {MongoClient} from 'mongodb';

const Handler = async (req,res) => {

    if(req.method==='POST')
    {
        const data = req.body;

        try {
            const client = await MongoClient.connect('mongodb+srv://aman001:aman28@mycluster.o3hq5.mongodb.net/nextjs?retryWrites=true&w=majority');

            const connectDB = client.db();

            const meetupCollections = connectDB.collection('meetups');

            const result = await meetupCollections.insertOne(data);

            console.log(result);

            client.close();

            res.status(201).json({message:'Meetup inserted successfully'});

        } catch (error) {
            console.log(error);
        }
    }
}

export default Handler;