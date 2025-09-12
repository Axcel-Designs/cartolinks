"use client";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function ScrollTop() {
  return (
    <>
      <div
        className="fixed bottom-10 right-5 flex justify-end cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaAngleDoubleUp className="text-3xl shadow-white" />
      </div>
    </>
  );
}
