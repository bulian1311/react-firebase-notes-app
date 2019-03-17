import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            omnis repellat at ratione unde illum suscipit repudiandae non ex,
            labore velit recusandae nesciunt praesentium quos laborum
            consequatur harum accusamus eius.
          </p>
        </div>
        <div className="card-action grey grey-text lighten-4">
          <div>Posted by Nikolay</div>
          <div>Posted by 2 sep</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
