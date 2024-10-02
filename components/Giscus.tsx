import { useCallback, useEffect } from "react";

const COMMENTS_ID = "comments-container";

const Giscus = (): JSX.Element => {
  const LoadComments = useCallback(() => {
    const script = document.createElement("script");

    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "jay08111/dev.blog.comments");
    script.setAttribute("data-repo-id", "R_kgDOM6cz3w");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOM6cz384Ci_Pz");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light_protanopia");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = "";
    };
  }, []);

  // Reload on theme change
  useEffect(() => {
    LoadComments();
  }, [LoadComments]);

  return <div className="giscus mt-[100px]" id={COMMENTS_ID} />;
};

export default Giscus;
