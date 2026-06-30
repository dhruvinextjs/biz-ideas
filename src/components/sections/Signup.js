"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getCodingLevels,
  saveCodingLevel,
  checkUsername,
  getStages,
  saveStage,
  saveBusinessInterests,
  saveProfile,
  registerUser,
  getBusinessInterests
} from "@/redux/slices/AuthSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const { loading, stages } = useSelector((state) => state.auth);
  const { businessInterests } = useSelector((state) => state.auth);
  const router = useRouter();
  

  const benefits = [
    {
      image: "/images/store.png",
      text: "Connect with other users running online businesses.",
    },
    {
      image: "/images/chats.png",
      text: "Get feedback on your business ideas, landing pages, and more.",
    },
    {
      image: "/images/new-message.png",
      text: "Get the best new stories from founders in your inbox.",
    },
    {
      image: "/images/fighter.png",
      text: "Help us build the best community for people like you.",
    },
    {
      image: "/images/chats.png",
      text: "See the best content and conversations, tailored to you.",
    },
    {
      image: "/images/charge.png",
      text: "Choose your login information to finish signing up.",
    },
    {
      image: "/images/fighter.png",
      text: "Drive into the community. Your first days are the most important!",
    },
  ];

  const optionsStep2 = [
    "No interest in starting a business",
    "Considering or planning to start a business",
    "Actively getting started on something new",
    "Working on a business, no revenue yet",
    "My business has paying customers, but doesn’t fully support me",
    "Earnings from my business fully support me",
  ];

  const optionsStep3 = [
    "No, and coding is totally unfamiliar",
    "Not, but I understand a few concepts",
    "Yes, and I'm beginner",
    "Yes, and I'm intermediate or a professional",
  ];



  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  useEffect(() => {
    dispatch(getStages());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCodingLevels());
  }, []);

  useEffect(() => {
  dispatch(getBusinessInterests());
}, []);

 const handleUsernameSubmit = async () => {
  if (!username) {
    toast.error("Please enter username");
    return;
  }

  try {
    const payload = { username };
    const res = await dispatch(checkUsername(payload)).unwrap();
    toast.success(res?.message || "Username verified");
    localStorage.setItem("token", res.token);
    localStorage.setItem("userId", res.user.id);
    setStep(2);
  } catch (error) {
      toast.error(error?.message || "Something went wrong");
  }
};    

  const handleCodingLevelSubmit = async () => {
    if (selectedOption === null) {
      toast.error("Please select an option");
      return;
    }

    try {
      const payload = {
        codingLevel: optionsStep3[selectedOption],
      };

      const res = await dispatch(saveCodingLevel(payload)).unwrap();

      // ✅ backend message
      toast.success(res?.message || "Saved successfully");

      setStep(4);
    } catch (error) {
      console.log("API Error:", error);

      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleStageSubmit = async () => {
    if (selectedOption === null) {
      toast.error("Please select an option");
      return;
    }

    try {
      const selectedStage = stages[selectedOption];

      const payload = {
        stageId: selectedStage?.id,
      };
      const res = await dispatch(saveStage(payload)).unwrap();

      toast.success(res?.message || "Stage saved successfully");

      setStep(3);
    } catch (error) {
      console.log("Stage API Error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleBusinessSubmit = async () => {
    if (selectedTags.length === 0) {
      toast.error("Please select at least one interest");
      return;
    }

    try {
      const payload = {
        businessInterests: selectedTags,
      };

      const res = await dispatch(saveBusinessInterests(payload)).unwrap();

      toast.success(res?.message || "Interests saved successfully");

      setStep(5);
    } catch (error) {
      console.log("Business API Error:", error);
      toast.error(error?.message || "Something went wrong");
    }
  };

 const handleProfileSubmit = async () => {
  if (!month || !day || !year || !location || !twitterHandle) {
    toast.error("All fields are required");
    return;
  }

  // 👇 FORMAT: YYYY-MM-DD
  const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

  try {
    const payload = {
      birthdate: formattedDate,
      location,
      twitterHandle,
    };

    const res = await dispatch(saveProfile(payload)).unwrap();

    toast.success(res?.message || "Profile saved successfully");

    setStep(6);
  } catch (error) {
    console.log("Profile API Error:", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

const handleRegister = async () => {
  if (!email || !password) {
    toast.error("Email and Password are required");
    return;
  }

  try {
    const payload = { email, password };
    const res = await dispatch(registerUser(payload)).unwrap();
    toast.success(res?.message || "Registered successfully");

    router.push("/"); // ✅ Home page pe redirect
  } catch (error) {
    console.log("Register API Error:", error);
    toast.error(error?.message || "Something went wrong");
  }
};


useEffect(() => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    setUsername(storedUsername);
  }
}, []);
  return (
    <section className="w-full flex justify-center items-center pt-36 pb-12 px-4 bg-background">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">
        {/* ✅ LEFT CARD (UPDATED DESIGN ONLY) */}
        <div className="rounded-xl shadow-lg relative max-w-sm w-full mx-auto">
          {/* TOP */}
          <div className="bg-[#2B3473] px-6 py-6 relative rounded-t-md">
            {/* <div className="absolute -right-2 top-8 w-4 h-4 bg-[#2B3473] rotate-45" /> */}
            <div className="absolute top-10 -right-2 w-4 h-4 bg-[#2B3473] rotate-45" />

            <h2 className="text-white text-lg font-semibold leading-snug text-center">
              {step === 1
                ? "Join a thriving community of entrepreneurs and developers."
                : step === 6
                  ? "Almost Done!"
                  : "Tell us a little about yourself!"}
            </h2>
          </div>

          {/* BOTTOM */}
          <div className="bg-[#1F265C] px-6 py-6 flex flex-col gap-5 rounded-b-md">
            {step === 1 &&
              benefits.slice(0, 3).map((b, i) => (
                <div key={i} className="flex gap-3">
                  <Image src={b.image} alt="" width={22} height={22} />
                  <p className="dark:text-foreground text-white text-sm">
                    {b.text}
                  </p>
                </div>
              ))}

            {step > 1 &&
              step < 6 &&
              benefits.slice(3, 5).map((b, i) => (
                <div key={i} className="flex gap-3">
                  <Image src={b.image} alt="" width={28} height={28} />
                  <p className="dark:text-[#B8C1EC] text-white text-sm">
                    {b.text}
                  </p>
                </div>
              ))}

            {step === 6 &&
              benefits.slice(5, 7).map((b, i) => (
                <div key={i} className="flex gap-3">
                  <Image src={b.image} alt="" width={28} height={28} />
                  <p className="dark:text-[#B8C1EC] text-white text-sm">
                    {b.text}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* RIGHT SECTION (UNCHANGED) */}
        <div className="flex flex-col justify-between">
          {step === 1 && (
            <>
              <div>
                <h3 className="text-foreground/80 text-sm mb-2 block">
                  Choose a username
                </h3>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Choose username"
                  className="w-full border dark:border-[#3E4A92] border-gray-400 p-3 rounded text-icon  dark:bg-[#1D2659]"
                />
                <button
                  onClick={handleUsernameSubmit}
                  className="mt-4 bg-primary text-[15px] text-white px-5 py-2 rounded-full flex gap-1 items-center uppercase"
                >
                  Next <MdKeyboardArrowRight size={22} />
                </button>
              </div>

              <p className="text-foreground text-sm mt-38">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-normal underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <h3 className="text-icon text-lg mb-5 block">
                  Which best describes the stage you're at right now?
                </h3>
                {stages?.map((opt, i) => (
                  <button
                    key={opt?._id || i}
                    onClick={() => setSelectedOption(i)}
                    className={`w-full flex items-center justify-between px-4 py-3 border dark:border-[#333D76] border-gray-400 text-icon/80 rounded mb-2 transition
    ${selectedOption === i ? "bg-[#4557BE] text-white" : "hover:bg-[#2a3470]"}`}
                  >
                    <span>{opt?.name}</span>

                    {selectedOption === i && (
                      <Check size={24} className="text-white " />
                    )}
                  </button>
                ))}
                <button
                  // onClick={() => setStep(3)}
                  onClick={handleStageSubmit}
                  className="mt-4 bg-primary text-[15px] text-white px-5 py-2 rounded-full flex gap-1 items-center uppercase"
                >
                  Next <MdKeyboardArrowRight size={22} />
                </button>
              </div>

              <p className="text-foreground text-sm mt-4">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-normal underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <h3 className="text-icon text-lg mb-5 block">
                  Do you know how to code?
                </h3>
                {optionsStep3.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedOption(i)}
                    className={`w-full flex items-center justify-between px-4 py-3 border dark:border-[#333D76] border-gray-400 text-icon/80 rounded mb-2 transition
    ${selectedOption === i ? "bg-[#4557BE] text-white" : "hover:bg-[#2a3470] hover:text-white"}`}
                  >
                    <span>{opt}</span>

                    {selectedOption === i && (
                      <Check size={24} className="text-white" />
                    )}
                  </button>
                ))}
                <button
                  onClick={handleCodingLevelSubmit}
                  className="mt-4 bg-primary text-[15px] text-white px-5 py-2 rounded-full flex gap-1 items-center uppercase"
                >
                  Next <MdKeyboardArrowRight size={22} />
                </button>
              </div>

              <p className="text-foreground text-sm mt-4">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-normal underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {step === 4 && (
            <>
              <div>
                {/* TEXT PART */}
                <h3 className="text-icon text-lg mb-3">
                  What types of businesses are you most interested in running?
                </h3>

                <p className="text-icon text-sm mb-4">
                  Choose as many as you like.
                </p>

                {/* TAGS PART */}
                <div className="flex flex-wrap gap-2">
                  {/* {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 border dark:border-[#333D76] border-gray-400 text-icon/80 rounded ${
                        selectedTags.includes(tag)
                          ? "bg-[#4557BE] text-white"
                          : "hover:bg-[#2a3470] hover:text-white"
                      }`}
                    >
                      {tag}
                    </button>
                  ))} */}
                 {businessInterests?.map((tag, index) => (
  <button
    key={tag._id || tag.name || index}
    onClick={() => toggleTag(tag.name)}
    className={`px-3 py-1 border rounded ${
      selectedTags.includes(tag.name)
        ? "bg-[#4557BE] text-white"
        : ""
    }`}
  >
    {tag.name}
  </button>
))}
                </div>
              </div>

              <button
                // onClick={() => setStep(5)}
                onClick={handleBusinessSubmit}
                className="mt-4 bg-primary text-[15px] text-white px-5 py-2 rounded-full flex gap-1 items-center uppercase self-start"
              >
                Next <MdKeyboardArrowRight size={22} />
              </button>

              <p className="text-foreground text-sm mt-4">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-normal underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {step === 5 && (
            <>
              <div className="w-full max-w-md">
                {/* BIRTHDAY */}
                <div className="mb-4 bg-card rounded-md px-4 py-3">
                  <p className="text-[11px] text-icon uppercase mb-2 tracking-wide">
                    Birthday*
                  </p>

                  <div className="flex gap-2">
                    <input
                      placeholder="Month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="bg-transparent w-full text-sm outline-none dark:placeholder:text-foreground"
                    />
                    <input
                      placeholder="Date"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="bg-transparent w-full text-sm outline-none dark:placeholder:text-foreground"
                    />
                    <input
                      placeholder="Year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="bg-transparent w-full text-sm outline-none dark:placeholder:text-foreground"
                    />
                  </div>
                </div>

                {/* LOCATION */}
                <div className="mb-4 bg-card rounded-md px-4 py-3">
                  <p className="text-[11px] text-icon uppercase mb-2 tracking-wide">
                    Location*
                  </p>

                  <input
                    placeholder="Type your city name"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-sm outline-none dark:placeholder:text-foreground"
                  />
                </div>

                {/* TWITTER */}
                <div className="mb-2 bg-card rounded-md px-4 py-3">
                  <p className="text-[11px] text-icon uppercase mb-2 tracking-wide">
                    Twitter Handle*
                  </p>

                  <input
                    placeholder="Enter your Twitter handle"
                    value={twitterHandle}
                    onChange={(e) => setTwitterHandle(e.target.value)}
                    className="w-full bg-transparent text-sm outline-none dark:placeholder:text-foreground"
                  />
                </div>

                <button
                  // onClick={() => setStep(6)}
                  onClick={handleProfileSubmit}
                  className="mt-4 bg-primary text-[15px] text-white px-5 py-2 rounded-full flex gap-1 items-center uppercase"
                >
                  Next <MdKeyboardArrowRight size={22} />
                </button>
              </div>
              <p className="text-foreground/50 text-sm mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-medium underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {step === 6 && (
            <>
              <div className="w-full max-w-md">
                {/* USER INFO */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/avtar.png"
                      alt="user"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>

                  <span className="text-sm font-semibold text-icon">
                     {username || "User"}
                  </span>
                </div>

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-md dark:bg-[#1D2659] border dark:border-[#333D76] border-gray-400 text-sm text-icon outline-none dark:placeholder:text-foreground mb-3"
                />

                {/* PASSWORD */}
                <input
                  type="password"
                  placeholder="Choose password"
                  value={password}
  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 px-4 rounded-md dark:bg-[#1D2659] border dark:border-[#333D76] border-gray-400 text-sm text-icon outline-none dark:placeholder:text-foreground mb-3"
                />

                {/* SUBMIT BUTTON */}
                <button onClick={handleRegister} className="mt-4 bg-primary text-[14px] text-white px-5 py-2 rounded-full flex gap-1 items-center uppercase">
                  SUBMIT <MdKeyboardArrowRight size={22} />
                </button>

                {/* DIVIDER */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-foreground/15" />
                  <span className="text-xs text-foreground/50">OR</span>
                  <div className="flex-1 h-px bg-foreground/15" />
                </div>

                {/* SOCIAL LOGIN */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="h-11 rounded-md border border-gray-400 dark:border-none bg-white text-black text-sm font-medium flex items-center justify-center gap-2">
                    <FcGoogle size={18} />
                    Login with Google
                  </button>

                  {/* X BUTTON */}
                  <button className="h-11 rounded-md bg-black text-white text-sm font-medium flex items-center justify-center gap-2">
                    Login with <RiTwitterXFill size={16} />
                  </button>
                </div>
              </div>

              <p className="text-foreground/50 text-sm mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-medium underline decoration-primary underline-offset-4"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
