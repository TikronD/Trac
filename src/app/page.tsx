"use client";

import Header from "@/app/component/Header";
import { useState } from "react";
import Footer from "@/app/component/Footer";

export default function Home() {
  const [openContact, setOpenContact] = useState(false);
  return (
    <div>
      <Header openContact={openContact} setOpenContact={setOpenContact} />
    </div>
  );
}
