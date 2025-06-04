import React from "react";
import ReactDOM from "react-dom";
import UserPanel from "./App";
import AdminPanel from "./AdminPanel";

function Main() {
  const [page, setPage] = React.useState("user");

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setPage("user")} style={{ marginRight: 10 }}>User Panel</button>
      <button onClick={() => setPage("admin")}>Admin Panel</button>
      <hr />
      {page === "user" ? <UserPanel /> : <AdminPanel />}
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
