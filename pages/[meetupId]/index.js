import MeetupDetails from '../../components/meetups/MeetupDetails';

import {MongoClient,ObjectId} from 'mongodb';

import Head from 'next/head';

const MeetupInfo = (props) => {
    return(
        <>
        <Head>
            <title>{props.dataLists.title}</title>
        </Head>
        <MeetupDetails
            image={props.dataLists.image}
            id={props.dataLists.id}
            title={props.dataLists.title}
            address={props.dataLists.address}
            description={props.dataLists.description}
         />
         </>
    )
}

export const getStaticPaths = async () => {

    const client = await MongoClient.connect('mongodb+srv://aman001:aman28@mycluster.o3hq5.mongodb.net/nextjs?retryWrites=true&w=majority');

    const connectDB = client.db();

    const meetupCollections = connectDB.collection('meetups');

    const meetups = await meetupCollections.find({},{_id:1}).toArray();

    client.close();

    return{
        fallback:'blocking',
        paths:meetups.map((meetup)=>{
            return{
                params:{
                    meetupId: meetup._id.toString()
                }
            }
        })
    }
}

export const getStaticProps = async(context) =>{

    const meetupId = context.params.meetupId;
    
    const client = await MongoClient.connect('mongodb+srv://aman001:aman28@mycluster.o3hq5.mongodb.net/nextjs?retryWrites=true&w=majority');

    const connectDB = client.db();

    const meetupCollections = connectDB.collection('meetups');

    const selectMeetup = await meetupCollections.findOne({_id: ObjectId(meetupId)});

    client.close();
    // fetch the data from API
    return{
        props:{
            dataLists:{
                id:selectMeetup._id.toString(),
                image:selectMeetup.image,
                title:selectMeetup.title,
                address:selectMeetup.address,
                description:selectMeetup.description
            }
        }
    }
}

export default MeetupInfo;