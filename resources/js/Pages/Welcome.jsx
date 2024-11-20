import Footer from "@/components/local/Footer";
import Header from "@/components/local/Header";
import Hero from "@/components/local/Hero";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            {/* <div>
            <h1>Welcome to the Application</h1>
            {canLogin && <a href="/login">Login</a>}
            {canRegister && <a href="/register">Register</a>}
        </div> */}

            <Head title="Welcome" />
            <Hero auth={auth} />
        </>
    );
}


