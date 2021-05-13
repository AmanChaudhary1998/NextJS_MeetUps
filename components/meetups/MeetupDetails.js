

const MeetupDetails = (props) =>{
    return(
        <>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.address}</p>
        <p>{props.description}</p>
        </>
    )
}

export default MeetupDetails;