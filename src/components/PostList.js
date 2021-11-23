import React from 'react';

function PostList(props) {
  // Get the URL parameters
  const params = props.match.params;
  return (
    <div>
      <p>
        year: <em>{params.year}</em>
      </p>
      <p>
        month: <em>{params.month}</em>
      </p>
    </div>
  );
}

export default PostList;
