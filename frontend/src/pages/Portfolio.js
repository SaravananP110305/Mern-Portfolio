import React from 'react';
import '../styles/Portfolio.css'; // Make sure you create/update this CSS file

const projects = [
  {
    title: 'E-Libray',
    description: 'The system uses the MERN stack to automate real-time alerts for library updates and transactions, enhancing resource management and user/admin experience.',
    link: 'https://github.com/SaravananP110305/E-Library',
    image: 'https://images.indianexpress.com/2022/01/E-library.jpg', // Replace with your actual image
  },
  {
    title: 'Inventory Management System',
    description: 'The MERN-based Inventory Management System streamlines CRUD operations with secure MongoDB storage and can be enhanced with authentication and stock alerts.',
    link: 'https://github.com/SaravananP110305/Inventory-Management-System',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?cs=srgb&dl=pexels-samuel-wolfl-628277-1427541.jpg&fm=jpg', // Replace with your actual image
  },
  {
    title: 'Student Management System',
    description: 'Developed a responsive web system for managing student records with interactive forms and real-time validation for efficient data handling.',
    link: 'https://saravananp110305.github.io/Student-Management/',
    image: 'https://plus.unsplash.com/premium_photo-1681841964461-c6d5e03d435d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHNjaG9vbCUyMHN0dWRlbnRzfGVufDB8fDB8fHww', // Replace with your actual image
  },
];

function Portfolio() {
  return (
    <section className="portfolio-container" data-aos="fade-up">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="portfolio-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
