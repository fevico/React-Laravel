import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "./Logo";
import { Button } from "@mui/material";

export default function Header({ auth }) {
    return (
        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3 w-[90%] mx-auto">
            <Logo />

            <nav className="lg:flex items-center gap-10 hidden">
                {["Product", "Template", "Blog", "Pricing"].map(
                    (item, index) => (
                        <Link href={""} className="">
                            {item}
                        </Link>
                    )
                )}
            </nav>
            <div className="flex justify-end gap-5">
                {" "}
                {auth.user ? (
                    <Link href={route("dashboard")} className="text-black">
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Button
                            size="small"
                            aschild
                            variant="text"
                            sx={{
                                textTransform: "none",
                            }}
                        >
                            <Link
                                href={route("login")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                Sign In
                            </Link>
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{
                                backgroundColor: "#4F46BA",
                                color: "#fff", // Ensure the text is visible
                                "&:hover": {
                                    backgroundColor: "#3E3A9E", // A slightly darker shade for hover effect
                                },
                                textTransform: "none",
                            }}
                        >
                            <Link
                                href={route("register")}
                                className="text-white lg:text-[14px] text-center font-medium"
                            >
                                Start Free
                            </Link>
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
}
