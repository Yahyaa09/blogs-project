import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { pageCount, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className="border-t-2 border-slate-300 w-full fixed bottom-0 bg-white">
      <div className="flex justify-between max-w-[700px] w-11/12 mx-auto py-2 items-center">
        <div className="flex gap-3">
          {pageCount > 1 && (
            <button
              onClick={() => handlePageChange(pageCount - 1)}
              className="px-4 rounded-md py-1 border-2 border-slate-300 cursor-pointer flex justify-center items-center"
            >
              Prev
            </button>
          )}
          {pageCount < totalPages && (
            <button
              onClick={() => handlePageChange(pageCount + 1)}
              className="px-4 rounded-md py-1 border-2 border-slate-300 cursor-pointer flex justify-center items-center"
            >
              Next
            </button>
          )}
        </div>

        <p>
          Page {pageCount} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Footer;
