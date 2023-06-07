import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

export default function VerifyEmail() {
  const idToken = useSelector((state) => state.auth.token);

  function verifyEmailHandler() {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBcqoOIomBjFRlXAsTohVsFwV68MHZ9Q28";
    const requestBody = {
      requestType: "VERIFY_EMAIL",
      idToken: idToken,
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
          console.log("Failed to verify email");
          throw new Error("Failed to update profile");
        }
        if (response.ok) {
          window.alert("verification mail sent");
        }
        return response.json();
      })
      .then((data) => {
        // handle success
        console.log(data);
        console.log("Profile Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "80%",

          display: "grid",
          placeItems: "center",
          backgroundImage:
            "linear-gradient(135deg, rgba(30, 50, 70, 0.92) 0%, rgba(0, 50, 0, 0.8) 70%)",
        }}
      >
        <div
          style={{
            color: "white",
            padding: "4rem",
            borderRadius: "1rem",
            height: "42%",
            backgroundImage:
              "linear-gradient(135deg, rgba(30, 50, 70, 0.92) 0%, rgba(0, 50, 0, 0.8) 70%)",
          }}
        >
          <h4 style={{ marginBottom: "3rem", fontSize: "2rem" }}>
            Click here to verify your email address
          </h4>
          <Button variant="dark" size="lg" onClick={verifyEmailHandler}>
            Verify Email
          </Button>
        </div>
      </div>
    </div>
  );
}
