import React from 'react';
import PropTypes from 'prop-types';

const UserImage = ({ userImage, username }) => (
  <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
    <img
      id="userImage"
      alt={`GitHub user: ${username}`}
      className="text-center rounded-full bg-white overflow-hidden dim git-image"
      src={userImage}
    />
  </a>
);

UserImage.propTypes = {
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired
};

export default UserImage;
