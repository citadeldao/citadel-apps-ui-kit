import React from "react";
import "../../assets/styles/uiKit/loader.css";
const Loader = ({ id }) => {
  return (
    <div id={"loader"}>
      <span>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
        fill="#6B93C0"
      >
        <circle cx="3" cy="3" r="3">
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="3" cy="12" r="3" fillOpacity=".5">
          <animate
            attributeName="fill-opacity"
            begin="100ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="3" r="3">
          <animate
            attributeName="fill-opacity"
            begin="300ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="12" r="3">
          <animate
            attributeName="fill-opacity"
            begin="600ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="21" cy="3" r="3">
          <animate
            attributeName="fill-opacity"
            begin="800ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="21" cy="12" r="3">
          <animate
            attributeName="fill-opacity"
            begin="400ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="3" cy="21" r="3">
          <animate
            attributeName="fill-opacity"
            begin="700ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="21" r="3">
          <animate
            attributeName="fill-opacity"
            begin="500ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="21" cy="21" r="3">
          <animate
            attributeName="fill-opacity"
            begin="200ms"
            dur="1s"
            values="1;.2;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      </span>
      <h4>Loading</h4>
    </div>
  
  );
};

export default Loader;