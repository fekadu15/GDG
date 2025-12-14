 import React from "react";
 const styles = {
  card: {
     backgroundColor:"lightgray",
    width: "250px",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  image: {
    width: "100%",
    borderRadius: "10px"
  },
  role: {
    fontWeight: "bold",
    color: "#555"
  }
};

export default function MemberCard(props) {
  return (
    <div style={styles.card}>
      <img src={props.photo} alt={props.name} style={styles.image} />
      <h3>{props.name}</h3>
      <p style={styles.role}>{props.role}</p>
      <p >{props.bio}</p>
    </div>
  );
}

