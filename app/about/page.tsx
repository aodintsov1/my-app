// app/about/page.tsx
"use client";

import { useState } from "react";

export default function AboutPage() {
    const [count, setCount] = useState(0);

    return (
        <main style={{ padding: "1rem" }}>
            <h1>About This App</h1>
            <p>This site is deployed via GitHub Pages.</p>
            <button
                onClick={() => setCount(count + 1)}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#2563eb", 
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "0.375rem", 
                    cursor: "pointer",
                    fontWeight: "bold",
                }}
            >
                Clicked {count} {count === 1 ? "time" : "times"}
            </button>
        </main>
    );
}
