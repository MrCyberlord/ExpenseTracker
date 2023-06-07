import Button from "react-bootstrap/Button";

export default function Welcome() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
          backgroundImage:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 70%)",
        }}
      >
        <div
          style={{
            color: "white",
            padding: "1rem",
            borderRadius: "1rem",
            marginBottom: "1rem",
            backgroundImage:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 70%)",
          }}
        >
          <h1
            style={{
              fontWeight: "bolder",
              fontSize: "90px",
              marginBottom: "1rem",
            }}
          >
            The Expense Tracker
          </h1>
          <h4 style={{ marginBottom: "1rem" }}>
            Keep track of your expenses with this exclusive expense tracker app.
          </h4>
          <a href="/dailyexp">
            <Button variant="dark" size="lg">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
