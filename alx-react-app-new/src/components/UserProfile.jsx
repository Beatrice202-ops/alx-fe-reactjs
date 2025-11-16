const UserProfile = (props) => {
     
    return(
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age} </p>
            <p>Bio {props.bio}</p>
        </div>

    )

}

export default UserProfile; 


function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px auto",
        width: "300px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2 style={{ color: "blue" }}>{name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{age}</span>
      </p>
      <p>Bio: {bio}</p>
    </div>
  );
}


