// import React, { Component } from 'react';
// import './Profile.css'; // Import CSS for the profile page

// class Profile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       bio: 'A short bio about John Doe.',
//       // Add other profile fields as needed
//     };
//   }

//   render() {
//     const { name, email, bio } = this.state;
//     return (
//       <div className="profile-container">
//         <h1 className="profile-title">Profile</h1>
//         <div className="profile-info">
//           <div className="profile-field">
//             <label>Name:</label>
//             <p>{name}</p>
//           </div>
//           <div className="profile-field">
//             <label>Email:</label>
//             <p>{email}</p>
//           </div>
//           <div className="profile-field">
//             <label>Bio:</label>
//             <p>{bio}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile= () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/api/users/me');
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Username: {userData.username}</p>
//       <p>Email: {userData.email}</p>
//       {/* Add other profile information as needed */}
//     </div>
//   );
// };

// export default Profile;



import React from 'react';
import './Profile.css'; // Import CSS for styling

const ProfilePage = () => {
  const profile = {
    name: 'John Doe',
    username: '@johndoe',
    tagline: 'Innovative Tech Enthusiast',
    location: 'San Francisco, CA',
    bio: 'I’m a software developer with a passion for creating intuitive user experiences and exploring new technologies. When I’m not coding, I love hiking and reading science fiction.',
    email: 'johndoe@example.com',
    phone: '555-123-4567',
    website: 'www.johndoe.com',
    linkedin: 'linkedin.com/in/johndoe',
    twitter: '@johndoe',
    facebook: 'facebook.com/johndoe',
    instagram: 'instagram.com/johndoe',
    github: 'github.com/johndoe',
    projects: [
      { title: 'Project One', description: 'A description of project one.', link: '#' },
      { title: 'Project Two', description: 'A description of project two.', link: '#' },
      { title: 'Project Three', description: 'A description of project three.', link: '#' }
    ],
    blogPosts: [
      { title: 'Post Title One', summary: 'Summary of post one.', link: '#' },
      { title: 'Post Title Two', summary: 'Summary of post two.', link: '#' },
      { title: 'Post Title Three', summary: 'Summary of post three.', link: '#' }
    ],
    testimonials: [
      { text: 'John is a fantastic developer who consistently delivers high-quality work.', author: 'Jane Smith, Colleague' },
      { text: 'Working with John has been a pleasure. His creativity and problem-solving skills are unmatched.', author: 'Mark Johnson, Client' }
    ]
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-image-container">
          <img className="profile-picture" src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p>{profile.username}</p>
          <p>{profile.tagline}</p>
          <p>{profile.location}</p>
        </div>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <p>{profile.bio}</p>
      </section>

      <section className="contact-info">
        <h2>Contact Info</h2>
        <ul>
          <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li>Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a></li>
          <li>Website: <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer">{profile.website}</a></li>
        </ul>
      </section>

      <section className="social-media">
        <h2>Social Media</h2>
        <ul>
          <li>LinkedIn: <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></li>
          <li>Twitter: <a href={`https://${profile.twitter}`} target="_blank" rel="noopener noreferrer">{profile.twitter}</a></li>
          <li>Facebook: <a href={`https://${profile.facebook}`} target="_blank" rel="noopener noreferrer">{profile.facebook}</a></li>
          <li>Instagram: <a href={`https://${profile.instagram}`} target="_blank" rel="noopener noreferrer">{profile.instagram}</a></li>
          <li>GitHub: <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">{profile.github}</a></li>
        </ul>
      </section>

      <section className="projects">
        <h2>Portfolio/Projects</h2>
        <div className="projects-container">
          {profile.projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>

      <section className="blog">
        <h2>Blog/Updates</h2>
        {profile.blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          {profile.testimonials.map((testimonial, index) => (
            <blockquote key={index} className="testimonial">
              <p>{testimonial.text}</p>
              <footer>{testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
