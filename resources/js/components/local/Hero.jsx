import React from "react";
import Header from "./Header";

export default function Hero({ auth }) {
    return (
        <div className="space-y-5 bg-[#F1F1FF] clip-hero">
            <Header auth={auth} />
            <div className="min-h-[400px]">Hero content</div>
        </div>
    );
}
