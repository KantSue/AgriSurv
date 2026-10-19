import { useEffect, useState } from "react";

export function AuthCard({ title, children }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#03624C] px-4">
      <div
        className={`
          transition-all duration-1000 ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          w-full max-w-sm border border-gray-300 shadow-2xl rounded-lg p-8 bg-white`}
      >
        <div className="flex flex-col items-center gap-2 mb-6">
          <img src="/images/logo.png" alt="AgriSurv" className="w-12 h-12 object-cover" />
          <p className="text-sm font-semibold text-[#03624C]">AgriSurv</p>
          <h2 className="text-2xl text-center font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export function AuthField({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">{label}</label>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export const inputClass = (error) => `w-full px-3 py-3 rounded-md border text-lg
  ${error ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-green-900 focus:ring-green-300"}
  bg-[#D6E2D5] focus:outline-none`;

export function PasswordInput({ name, value, onChange, error, numeric }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        inputMode={numeric ? "numeric" : undefined}
        maxLength={numeric ? 6 : undefined}
        autoComplete="current-password"
        className={inputClass(error) + " pr-20"}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#03624C] font-medium px-2"
      >
        {visible ? "Afeno" : "Asehoy"}
      </button>
    </div>
  );
}

export const submitClass = `w-full py-3 bg-green-900 text-white text-lg rounded-md hover:bg-green-700
  disabled:bg-gray-400 transition-colors duration-200`;
