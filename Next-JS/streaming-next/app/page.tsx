"use client"


import Comments from "@/components/Comments";
import Likex from "@/components/Likex";
import Views from "@/components/Views";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>

      <Suspense fallback={<div>Loading Views...</div>}>
        {/* <Views /> */}
        
      </Suspense>
      <br />

      {/* <Likex /> */}
      <Comments />
    </div>
  );
}
