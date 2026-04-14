"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Calendar, FileText, RefreshCw } from "lucide-react"

export default function TransactionForm() {
  const [recurring, setRecurring] = useState(false)
  const today = new Date().toLocaleDateString("en-US",{
    month: "short",
    day: "numeric",
    year: "numeric"
  })

  return (
    <div className="flex flex-col gap-3 p-4">

      {/* Category */}
      <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4">

        <div className="flex items-center gap-3">
          <ShoppingBag className="text-yellow-500" size={20} />
          <p className="text-gray-500">Category</p>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
          <p className="text-sm">Food & Drink</p>
          <p>›</p>
        </div>

      </div>

      {/* Date */}
      <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4">

        <div className="flex items-center gap-3">
          <Calendar className="text-blue-500" size={20} />
          <p className="text-gray-500">Date</p>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
         <p>{today}</p>
        </div>

      </div>

      {/* Notes */}
      <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <FileText className="text-purple-400" size={20} />
          <p className="text-gray-500">Notes (optional)</p>
        </div>
        <Input
          placeholder="Add a note..."
          className="w-50 text-right border-none bg-transparent text-gray-400 text-sm p-0"
        />
      </div>

      {/* Recurring */}
      <div className="flex items-center justify-between bg-gray-100 rounded-2xl p-4">

        <div className="flex items-center gap-3">
          <RefreshCw className="text-blue-400" size={20} />
          <p className="text-gray-500">Recurring</p>
        </div>

        <Switch
          checked={recurring}
          onCheckedChange={setRecurring}
          className="scale-150"
        />

      </div>

    </div>
  )
}