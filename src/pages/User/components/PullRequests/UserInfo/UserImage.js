import React from 'react';
import PropTypes from 'prop-types';

const UserImage = ({ userImage, username }) => (
  <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
    <img
      id="userImage"
      alt={`GitHub user: ${username}`}
      className="rounded w-48 h-48 overflow-hidden dim"
      src={userImage}
    />
  </a>
);

UserImage.propTypes = {
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired
};

export default UserImage;
