import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>posted by Nikolay</p>
        <p className="gray-text">3 september</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
