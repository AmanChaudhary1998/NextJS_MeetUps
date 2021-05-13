import MeetupList from '../components/meetups/MeetupList';

import {MongoClient} from 'mongodb';

import Head from 'next/head';

// const DUMMY_LISTS = [
//     {
//         id:'m1',
//         title:'A First Meetup',
//         image:'https://elementor.com/marketing/wp-content/uploads/sites/15/2020/04/meet-coiv.png',
//         address:'woow address',
//         description:'This is first meet'
//     },
//     {
//         id:'m2',
//         title:'A Second Meetup',
//         image:'https://elementor.com/marketing/wp-content/uploads/sites/15/2020/04/meet-coiv.png',
//         address:'yeah address',
//         description:'This is second meet'
//     }
// ];


// These method cannot be used as while the page re renders it gives the blank page as dosn't do with async 
//so to over come prefer METHOD 2

// const HomePage = () =>{

//     const [loadingMeetups,setLodingMeetups] = useState([]);

//     useEffect(()=>{
//         setLodingMeetups(DUMMY_LISTS)
//     },[])

//     return(
//         <>
//         <MeetupList meetups = {loadingMeetups} />
//         </>
//     )
// }

// Method - 2
const HomePage = (props) =>{

    return(
        <>
        <Head>
            <title>Next Meetups</title>
            <meta name="description" content="Browse a huge list of NextJS based mmetups" />
        </Head>
        <MeetupList meetups = {props.dataLists} />
        </>
    )
}

// export const getStaticServerProps = async (context) =>{
//     // fetch the data from API
//     const req = context.req;
//     const res = context.res;

//     return{
//         props:{
//             dataLists:DUMMY_LISTS
//         }
//     };
// };


export const getStaticProps = async () =>{
    // fetch the data from API
    const client = await MongoClient.connect('mongodb+srv://aman001:aman28@mycluster.o3hq5.mongodb.net/nextjs?retryWrites=true&w=majority');

    const connectDB = client.db();

    const meetupCollections = connectDB.collection('meetups');

    const meetups = await meetupCollections.find().toArray();

    client.close();

    return {
        props:{
            dataLists: meetups.map((meetup)=>{
                return{
                    title:meetup.title,
                    image:meetup.image,
                    address:meetup.address,
                    description:meetup.description,
                    id:meetup._id.toString()
                }                                 // Replace DUMMY_LISTS with meetups as fetch data from database
            })
        },
        revalidate: 10    // with these your page will regenrated after every 10 sec so that updating reflects onto the page
    };
}

export default HomePage;