import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function getInfo() {
    setLoading(true);
    const URL = `https://codehelp-apis.vercel.app/api/get-blogs?page=${pageCount}`;

    try {
      const result = await fetch(URL);
      const data = await result.json();
      setPageCount(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log("Error in fetching info from API:", e);
      setPageCount(1);
      setPosts([]);
      setTotalPages(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getInfo(); // Fetch data when component mounts or pageCount changes
  }, [pageCount]);

  function handlePageChange(newPageCount) {
    setPageCount(newPageCount);
  }

  const value = {
    loading,
    posts,
    pageCount,
    totalPages,
    getInfo,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
