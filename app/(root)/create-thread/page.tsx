import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
    return(
        <h1 className="head-text">Create thread</h1>
    )
}