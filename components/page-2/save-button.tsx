"use client"

import {Button} from "@/components/ui/button"
interface Props {
    text?: string
}

export default function SaveButton() {
return(

    <div className="p-4">
        <Button className="w-full rounded-full bg-gray-900 text-white py-6 text-base font-semibold"
        onClick={() => window.location.reload()}>
            Confirm & Save
        </Button>
    </div>
)
}

