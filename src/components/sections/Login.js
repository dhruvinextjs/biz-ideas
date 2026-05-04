"use client";
 
import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import Image from "next/image";
 
export default function Login() {
    return (
        <section className="w-full bg-background flex items-center justify-center pt-36 pb-12 px-4">
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">
 
                {/* LEFT SIDE */}
                <div className="w-full max-w-md">
                    {/* EMAIL */}
                    <div className="mb-4">
                        <label className="text-sm text-foreground/80 mb-2 block">
                            Email
                        </label>
 
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="w-full h-11 px-4 rounded-md bg-card border border-foreground/10 text-sm text-foreground outline-none placeholder:text-foreground/40"
                        />
                    </div>
 
                    {/* PASSWORD */}
                    <div className="mb-4">
                        <label className="text-sm text-foreground/80 mb-2 block">
                            Password
                        </label>
 
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-11 px-4 rounded-md bg-card border border-foreground/10 text-sm text-foreground outline-none placeholder:text-foreground/40"
                        />
                    </div>
 
                    {/* BUTTON */}
                    {/* <button className="h-10 px-5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary/90 transition">
                        Sign In <ArrowRight size={14} />
                    </button> */}
                    <button
  onClick={() => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/";
  }}
  className="h-10 px-5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary/90 transition"
>
  Sign In <ArrowRight size={14} />
</button>
 
                    {/* DIVIDER */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-foreground/15" />
                        <span className="text-xs text-foreground/50">OR</span>
                        <div className="flex-1 h-px bg-foreground/15" />
                    </div>
 
                    {/* SOCIAL LOGIN */}
                    <div className="grid grid-cols-2 gap-3">
                        <button className="h-11 rounded-md bg-white text-black text-xs font-medium flex items-center justify-center gap-2 border border-gray-300 dark:border-transparent shadow-sm">
                            <FcGoogle size={18} />
                            Register with Google
                        </button>
 
                        <button className="h-11 rounded-md bg-black text-white text-xs font-medium flex items-center justify-center gap-2">
                            Register with <RiTwitterXFill size={16} />
                        </button>
                    </div>
                </div>
 
                {/* RIGHT CARD */}
                <div className="bg-card rounded-lg relative shadow-lg p-4 md:p-6">
                    {/* POINTER */}
                    <div className="absolute top-10 -left-2 w-4 h-4 bg-card rotate-45" />
 
                    {/* HEADER */}
                    <div className="px-6 py-5 border-b border-foreground/10">
                        <h2 className="text-icon text-lg font-semibold text-center">
                            Sign in to The Biz Ideas
                        </h2>
                    </div>
 
                    {/* BODY */}
                    <div className="px-6 py-6 space-y-5">
                        {/* ITEM 1 */}
                        <div className="flex items-start gap-3">
                            <Image
                                src="/images/chats.png"
                                alt="group"
                                width={18}
                                height={18}
                                className="mt-1 object-contain"
                            />
 
                            <p className="text-sm text-foreground/70 leading-6">
                                Don&apos;t have an account yet?{" "}
                                <Link
                                    href="/signup"
                                    className="text-icon font-bold underline decoration-primary decoration-2 underline-offset-5"
                                >
                                    Join the Us!
                                </Link>
                            </p>
                        </div>
 
                        {/* ITEM 2 */}
                        <div className="flex items-start gap-3">
                            <Image
                                src="/images/chats.png"
                                alt="lock"
                                width={18}
                                height={18}
                                className="mt-1 object-contain"
                            />
 
                            <p className="text-sm text-foreground/70 leading-6">
                                Trouble logging in?{" "}
                                <Link
                                    href="/reset-password"
                                    className="text-icon font-bold underline decoration-primary decoration-2 underline-offset-5"
                                >
                                    Reset
                                </Link>{" "}
                                your password.
                            </p>
                        </div>
                    </div>
                </div>
 
            </div>
        </section>
    );
}
 