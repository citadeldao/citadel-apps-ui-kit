import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';


function ReactPortal({ children, to = "body" }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.querySelector(to);
    let systemCreated = false;
  
    setWrapperElement(element);
  
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }
  }, [to]);
  
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default ReactPortal;