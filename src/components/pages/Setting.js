"use client";

import React, { useState } from "react";
import { Bell, Lock, LogOut } from "lucide-react";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const navItems = [
  { id: "email", label: "Email Notifications", icon: Bell },
  { id: "password", label: "Change Password", icon: Lock },
];

export default function Setting() {
  const [activeTab, setActiveTab] = useState("email");
  const [toggles, setToggles] = useState({
    newBusinessIdeas: true,
    marketingEmails: true,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handlePasswordChange = (key, value) => {
    setPasswords((prev) => ({ ...prev, [key]: value }));
  };

  const toggleShowPassword = (key) => {
    setShowPassword((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="min-h-screen bg-background pt-32 md:pt-36 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-icon">Settings</h1>
          <p className="text-sm text-foreground mt-2">
            Manage your account preferences and settings.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-row md:flex-row gap-3 items-start">
          {/* Sidebar */}
          <div className="bg-card border border-white/5 rounded-2xl p-3 flex-shrink-0">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 mb-1
                                ${
                                  activeTab === id
                                    ? "bg-[#3E4A92] text-white"
                                    : "text-foreground hover:bg-[#111d55] hover:text-white"
                                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}

            {/* Sign Out */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-[#111d55] transition-all duration-200">
              <LogOut size={16} />
              Sign out
            </button>
          </div>

          {/* Main Panel */}
          <div className="bg-card border border-white/5 rounded-2xl p-4 md:p-2 flex-1">
            {activeTab === "email" && (
              <>
                <h2 className="text-base font-bold text-icon px-4 py-2">
                  Email Notification
                </h2>

                {/* Toggle Row */}
                <div className="divide-y divide-gray-300 dark:divide-white/30">
                  {[
                    {
                      key: "newBusinessIdeas",
                      label: "New Business Ideas",
                      desc: "Get notified when we post new ideas in your favorite categories.",
                    },
                    {
                      key: "marketingEmails",
                      label: "Marketing Emails",
                      desc: "Receive offers, promotions, and tips for your business.",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between gap-6 py-4 px-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-icon">
                          {item.label}
                        </p>
                        <p className="text-xs text-foreground mt-1">
                          {item.desc}
                        </p>
                      </div>

                      <button
                        onClick={() => handleToggle(item.key)}
                        style={{
                          backgroundColor: toggles[item.key]
                            ? "#a8aab1"
                            : "#0059DE",
                        }}
                        className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                            toggles[item.key]
                              ? "translate-x-5"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Update Button */}
                <button className="mt-2 mb-2 px-9 py-3 ml-2 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
                  UPDATE
                </button>
              </>
            )}

            {activeTab === "password" && (
              <>
                <h2 className="text-base font-bold text-icon mb-6">
                  Change Password
                </h2>

                {[
                  { key: "current", label: "Current Password" },
                  { key: "new", label: "New Password" },
                  { key: "confirm", label: "Confirm New Password" },
                ].map((item) => (
                  <div key={item.key} className="mb-4">
                    <label className="block text-sm font-medium text-icon/90 mb-2">
                      {item.label}
                    </label>

                    {/* IMPORTANT: wrapper */}
                    <div className="relative">
                      <input
                        type={showPassword[item.key] ? "text" : "password"}
                        value={passwords[item.key]}
                        onChange={(e) =>
                          handlePasswordChange(item.key, e.target.value)
                        }
                        placeholder={`Enter ${item.label}`}
                        className="w-full h-11 rounded-lg px-4 pr-12 bg-gray-300 dark:bg-[#1D2659] border border-white/10 text-icon placeholder:text-foreground/40 outline-none focus:border-primary transition"
                      />

                      {/* 👁 Eye Icon (PERFECT CENTER) */}
                      <button
                        type="button"
                        onClick={() => toggleShowPassword(item.key)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-icon"
                      >
                        {showPassword[item.key] ? (
                          <MdOutlineRemoveRedEye size={18} />
                        ) : (
                          <IoEyeOffOutline size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}

                <button className="mt-4 px-8 py-2.5 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
                  UPDATE
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
