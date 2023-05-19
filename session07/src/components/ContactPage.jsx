import React from "react";
import { useLocation } from "react-router-dom";

function ContactPage() {
  // de nhan duoc du lieu tu product thi su dung useLocation
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {location.state === null ? (
        "ContactPage"
      ) : (
        <>count :{location.state.count}</>
      )}
    </div>
  );
}

export default ContactPage;
