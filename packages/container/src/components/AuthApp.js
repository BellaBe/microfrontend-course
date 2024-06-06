import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount as mountAuth } from "auth/AuthApp";

export default ({onSignIn}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountAuth(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        onSignIn()
      }
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
