import React from "react";

export default function TeamItem({name, description, children}) {
  return (
    <div class="feature col text-center">
      <div class="w-25 rounded-circle overflow-hidden feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        {children}
      </div>
      <h3 class="fs-2">{name}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}
