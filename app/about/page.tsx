// app/about/page.tsx
"use client";

import { useState } from "react";

export default function AboutPage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "1rem" }}>
      <h1>About This App</h1>
      <p>This site is deployed via GitHub Pages.</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} {count === 1 ? "time" : "times"}
      </button>
    </main>
  );
}
