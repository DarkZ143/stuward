"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Stuimage from "@/public/stuward.png";
import { useLoader } from "@/context/LoaderContext";
const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Support", path: "/support" },
];

const gameLinks = [
    { label: "Atlas", path: "/AtlasGames" },
    { label: "Aptitude", path: "/AptitudeGames" },
    { label: "Coding", path: "/CodingGames" },
    { label: "Reasoning", path: "/ReasoningGames" },
];

export default function Navbar() {
    const { setLoading } = useLoader();

    const navigate = (path: string) => {
        setLoading(true);
        router.push(path);
    };

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();
    const [showGames, setShowGames] = useState(false);
    const [mobileGamesOpen, setMobileGamesOpen] = useState(false);

    const suggestions = [
        { label: "Atlas Games", path: "/AtlasGames" },
        { label: "Aptitude Challenges", path: "/AptitudeGames" },
        { label: "Reasoning Test", path: "/ReasoningGames" },
        { label: "Coding Battle", path: "/CodingGames" },
    ];

    const filtered = suggestions.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setShowGames(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <nav className="w-full bg-black/30 backdrop-blur-lg text-white fixed top-0 left-0 z-50 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* MOBILE NAV */}
                    <div className="flex items-center justify-between w-full md:hidden">

                        {/* LEFT: MENU */}
                        <button onClick={() => setIsOpen(true)}>
                            <Menu size={26} />
                        </button>

                        {/* CENTER: LOGO */}
                        <div className="flex items-center justify-between">
                            <Image src={Stuimage} alt="Logo" width={32} height={32} className="mr-2" />
                            <h1 className="text-lg font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Stuward
                            </h1>
                        </div>

                        {/* RIGHT: PROFILE */}
                        <button
                            onClick={() => router.push("/profile")}
                            className="w-9 h-9 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center"
                        >
                            <span className="text-sm font-bold">R</span>
                        </button>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex w-full items-center justify-between">

                        {/* LEFT */}
                        <div className="flex items-center justify-between" >
                            <Image src={Stuimage} alt="Logo" width={32} height={32} className="mr-2" />
                            <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Stuward
                            </h1>
                        </div>


                        {/* CENTER SEARCH */}
                        <div className="relative w-[40%]">
                            <div className="flex items-center bg-white/10 rounded-xl px-3 py-2">
                                <Search size={18} className="mr-2 text-gray-300" />
                                <input
                                    type="text"
                                    placeholder="Search games..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            const match = suggestions.find((item) =>
                                                item.label.toLowerCase().includes(query.toLowerCase())
                                            );

                                            if (match) {
                                                navigate(match.path);
                                                setQuery("");
                                            }
                                        }
                                    }}
                                    className="bg-transparent outline-none w-full text-sm"
                                />
                            </div>

                            {query && (
                                <div className="absolute top-12 left-0 w-full bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
                                    {filtered.length > 0 ? (
                                        filtered.map((item, index) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    navigate(item.path);
                                                    setQuery("");

                                                }}
                                                className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                                            >
                                                {item.label}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-4 py-2 text-gray-400">
                                            No results found
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-6">

                            {/* HOME / ABOUT / SUPPORT */}
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => navigate(link.path)}
                                    className="hover:text-cyan-400 transition"
                                >
                                    {link.label}
                                </button>
                            ))}

                            {/* GAMES DROPDOWN */}
                            <div className="relative" ref={dropdownRef}>

                                {/* BUTTON */}
                                <button
                                    onClick={() => setShowGames(!showGames)}
                                    className="hover:text-cyan-400 transition flex items-center gap-1"
                                >
                                    Games ▾
                                </button>

                                {/* DROPDOWN */}
                                {showGames && (
                                    <div className="absolute top-10 left-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl w-44 shadow-lg z-50">
                                        {gameLinks.map((game, i) => (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    navigate(game.path);
                                                    setShowGames(false);
                                                }}
                                                className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                                            >
                                                {game.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => router.push("/profile")}
                                className="w-9 h-9 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center"
                            >
                                <span className="text-sm font-bold">R</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav >

            {/* SIDEBAR */}
            < div
                className={`fixed top-0 left-0 h-full w-65 bg-black/90 backdrop-blur-xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`
                }
            >
                {/* HEADER */}
                < div className="flex justify-between items-center p-4 border-b border-white/10" >
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div >

                {/* SEARCH */}
                < div className="p-4" >
                    <div className="flex items-center bg-white/10 rounded-xl px-3 py-2">
                        <Search size={18} className="mr-2 text-gray-300" />
                        <input
                            type="text"
                            placeholder="Search games..."
                            className="bg-transparent outline-none w-full text-sm"
                        />
                    </div>
                </div >

                {/* LINKS */}
                < div className="flex flex-col gap-4 px-4" >
                    {/* NORMAL LINKS */}
                    {
                        navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => {
                                    router.push(link.path);
                                    setIsOpen(false);
                                }}
                                className="text-left py-2 px-3 rounded-lg hover:bg-white/10 transition"
                            >
                                {link.label}
                            </button>
                        ))
                    }


                    {/* GAMES DROPDOWN */}
                    <div >

                        {/* HEADER */}
                        <button
                            onClick={() => setMobileGamesOpen((prev) => !prev)}
                            className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/10 transition"
                        >
                            <span className="text-gray-300 font-medium">Games</span>

                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${mobileGamesOpen ? "rotate-180 text-cyan-400" : "text-gray-400"
                                    }`}
                            />
                        </button>

                        {/* DROPDOWN */}
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${mobileGamesOpen ? "max-h-96 mt-2" : "max-h-0"
                                }`}
                        >
                            <div className="flex flex-col gap-1 mt-1">

                                {gameLinks.map((game, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            navigate(game.path);
                                            setIsOpen(false);
                                            setMobileGamesOpen(false);
                                        }}
                                        className="text-left py-2 px-6 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition"
                                    >
                                        {game.label}
                                    </button>
                                ))}

                            </div>
                        </div>

                    </div>
                </div >
            </div >

            {/* OVERLAY */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )
            }
        </>
    );
}