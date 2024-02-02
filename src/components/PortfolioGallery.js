import React from 'react';
import './PortfolioGallery.css'; // Ensure you have this CSS file for styling

const PortfolioGallery = () => {
  // Define your projects here
  const projects = [
    {
      id: 1,
      title: "Project 1",
      imageUrl: "https://via.placeholder.com/600x400", // Example image URL
      description: "A brief description of Project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: "https://via.placeholder.com/600x400", // Example image URL
      description: "A brief description of Project 2.",
    },
    {
      id: 3,
      title: "Project 3",
      imageUrl: "https://via.placeholder.com/600x400", // Example image URL
      description: "A brief description of Project 3.",
    }
    // Add more projects as needed
  ];

  return (
    <div className="gallery">
      {projects.map(project => (
        <div key={project.id} className="gallery-item">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p> {/* Optional: Add description if needed */}
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallery;