"use client";

import axios from "axios";
import { env } from "process";
import { useEffect } from "react";

export default function CustomerFAQ() {
  const faqAPI = async () => {
    try {
      const response = await axios.get("api/v1/faqs", {
        params: {
          category: "NONE",
          offset: 0,
          limit: 10,
          sort: "",
          search: "",
        },
        headers: {
          accept: "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div>FAQ (자주묻는 질문)</div>

      <div>
        <button onClick={faqAPI}>faqapi</button>
      </div>
    </div>
  );
}
