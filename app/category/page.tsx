"use client"

import { useState } from "react"

export default function Category() {
  const [selected, setSelected] = useState("")
  const categories = ["Food", "Transport", "Housing", "Shopping", "Fun", "Health", "Education", "Income"]

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose Category</h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((c) => (
          <div
            key={c}
            onClick={() => setSelected(c)}
            className={`p-4 rounded-2xl cursor-pointer flex flex-col items-center gap-2 ${
              selected === c ? "border-2 border-green-500" : "border border-gray-200"
            }`}
          >
            <p>{c}</p>
          </div>
        ))}
      </div>
    </div>
  )
}