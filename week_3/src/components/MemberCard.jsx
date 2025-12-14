 import React from "react";
 const styles = {
  card: {
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

export default function MemberCard({ name, role, photo, bio }) {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p style={styles.role}>{role}</p>
      <p>{bio}</p>
    </div>
  );
}