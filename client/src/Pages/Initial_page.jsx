import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

export function Initial() {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
const navigate=useNavigate()

  useEffect(() => {
    setAnimate(true);
    setAnimate2(true)
  }, []);
const handleNavigate=()=>{
    setAnimate(false);
    setAnimate2(false)
    setTimeout(()=>{
        navigate("/Signin")
    })
}
  return (
    <div className="h-screen flex items-center justify-center bg-[#03624C]">
      <div
        className={`
          transition-all duration-1000 ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          flex flex-col items-center gap-4
        `}
      >
      <div className={`
          transition-all duration-700 ease-out
          ${animate2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          flex flex-col items-center gap-4
        `}>
        <img
          src="/images/logo.png"
          alt="Culture"
          className="w-24 h-24 md:w-32 md:h-32 object-cover transition-transform duration-300 hover:scale-110"
        />
        </div>
            <div>
       
          <h1 className="cursor-pointer text-center md:text-left text-xl font-semibold"
          onClick={handleNavigate}
          >
            Tongasoa eto amin'ny Tantsaha Connect
          </h1>
       
      </div>
      </div>
      
    </div>
  );
}
