import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Photography King`;
  }, [title]);
};

export default useTitle;
