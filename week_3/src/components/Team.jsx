import React from "react";
import MemberCard from "./MemberCard";
export default function Team() {
  const members = [
    {
      id: 1,
      name: "Fike",
      role: "Frontend Developer",
      photo: "https://via.placeholder.com/150",
      bio: "Passionate about building clean UI."
    },
    {
      id: 2,
      name: "Halid",
      role: "Backend Developer",
      photo: "https://via.placeholder.com/150",
      bio: " worke with APIs, databases"
    },
    {
      id: 3,
      name: "Fira",
      role: "UI/UX Designer",
      photo: "https://via.placeholder.com/150",
      bio: "Focused on creating beautiful designs."
    }
  ];

  const styles = {
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  
};

  return (
    <div>
      <h1 style={styles.title}>Our Team</h1>
      <div style={styles.container}>
        {members.map(member => (
          <MemberCard
            id = {member.id}
            name={member.name}
            role={member.role}
            photo={member.photo}
            bio={member.bio}
          />
        ))}
      </div>
    </div>
  );
}
