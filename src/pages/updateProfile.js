import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./updateProfile.module.css";
import { useHistory } from "react-router-dom";

function UpdateProfile() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [message, setMessage] = useState("");
  const idToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBcqoOIomBjFRlXAsTohVsFwV68MHZ9Q28";
    const requestBody = { idToken };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user account information");
        }
        return response.json();
      })
      .then((data) => {
        const user = data.users[0];
        setName(user.displayName || "");
        setProfilePictureUrl(user.photoUrl || "");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idToken]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleProfilePictureUrlChange = (event) => {
    setProfilePictureUrl(event.target.value);
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBcqoOIomBjFRlXAsTohVsFwV68MHZ9Q28";
    const requestBody = {
      idToken: idToken,
      displayName: name,
      photoUrl: profilePictureUrl,
      deleteAttribute: [], // list of attributes to delete, can be empty
      returnSecureToken: true, // whether or not to return an ID and refresh token
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          setMessage("Failed to update profile");
          throw new Error("Failed to update profile");
        }

        return response.json();
      })
      .then((data) => {
        // handle success
        console.log(data);
        setMessage("Profile Updated");
        setTimeout(() => history.replace("/welcome"), 2000);
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <form onSubmit={handleUpdateProfile}>
          <label className={classes.label}>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className={classes.input}
            />
          </label>
          <label className={classes.label}>
            Profile Picture URL:
            <input
              type="text"
              value={profilePictureUrl}
              onChange={handleProfilePictureUrlChange}
              className={classes.input}
            />
          </label>
          <button type="submit" className={classes.button}>
            Update Profile
          </button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
