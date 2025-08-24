import { Header } from "@/components/header"
import { ReactNode } from "react"

export default function PrivateLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col h-dvh">
            <Header />
            {children}
        </div>
    )
}