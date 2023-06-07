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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundImage:
          "linear-gradient(135deg, rgba(14, 10, 90, 1) 0%, rgba(53, 53, 243, 1) 70%)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className={classes.card}>
        <form onSubmit={handleUpdateProfile}>
          <label
            style={{
              color: "white",
              marginBottom: "1rem",
              textAlign: "left",
            }}
          >
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{
                borderRadius: "0.4rem",
                width: "100%",
                marginTop: "0.5rem",
              }}
            />
          </label>
          <label
            style={{
              color: "white",
              marginBottom: "1rem",
              textAlign: "left",
            }}
          >
            Profile Picture URL:
            <input
              type="text"
              value={profilePictureUrl}
              onChange={handleProfilePictureUrlChange}
              style={{
                // marginLeft: "1rem",
                borderRadius: "0.4rem",
                width: "100%",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: "rgba(10, 100, 136, 0.83)",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "0.3rem",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Update Profile
          </button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
