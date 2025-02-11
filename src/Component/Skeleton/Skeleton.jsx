import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="teachercard skeleton-card">
      <div className="teacherimage skeleton-image"></div>
      <div className="teacherheading">
        <div className="skeleton-text"></div>
        <div className="skeleton-text small"></div>
      </div>
    </div>
  );
};

export default Skeleton;
