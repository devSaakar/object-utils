import React from "react";

function Alert({alert}) {
  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      {alert.message}
    </div>
  );
}

export default Alert;
