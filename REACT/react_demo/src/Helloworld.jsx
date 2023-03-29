import React from "react";

export default function HelloWorld() {
  let name = "thuyen";
  const user = {
    firstName: "nguyen",
    lastName: "thuyen",
  };

  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  return (
    <div>
      <div>
        Hello, {name} và {formatName(user)}
      </div>
      <div>Rất vui được gặp bạn</div>
    </div>
  );
}