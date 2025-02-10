"use client";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter Component</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment (clicked) {count} times</button>
        </div>
    );
};