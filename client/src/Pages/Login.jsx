import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../modules/auth";
import { LoginUserApi } from "../modules/Login_api";
import { LogForm } from "../hooks_login/logForm";
import { routeAfterLogin } from "../modules/culture_module";
import { Alerte } from "../hooks_login/alertHook";
import { AuthCard, AuthField, PasswordInput, inputClass, submitClass } from "../Components/AuthLayout";

// Comptes de comptes_demo.sql
const DEMO_CODE = "123456";
const DEMO_ACCOUNTS = [
  { tel: "0340000001", nom: "Rakoto Demo", region: "Analamanga" },
  { tel: "0340000002", nom: "Rasoa Demo", region: "Alaotra Mangoro" },
  { tel: "0340000003", nom: "Randria Demo", region: "Sava" },
];

export function LogIn() {
  const [alerte, setAlerte] = useState({ message: "", type: "", show: false });
  const { form, error, handleChange } = LogForm({ tel: "", mdp: "" });
  const navigate = useNavigate();

  const fillDemo = (tel) => {
    handleChange({ target: { name: "tel", value: tel } });
    handleChange({ target: { name: "mdp", value: DEMO_CODE } });
  };

  const hasError =Object.values(error).some((err) => err) || !form.tel || !form.mdp;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasError) {
      setAlerte({ message: "Mbola misy diso ao amin'ny formulaire", type: "error", show: true });
      return;
    }
    try {
      const response = await LoginUserApi(form);
      if (!response.success) {
        setAlerte({ message: response.message, type: "error", show: true });
        return;
      }
      setToken(response.data.token);
      navigate(await routeAfterLogin(), { replace: true });
    } catch (err) {
      setAlerte({ message: "fahadisoana tsy voahevitra", type: "error", show: true });
    }
  };

  return (
    <>
      {alerte.show && <Alerte message={alerte.message} type={alerte.type} duration={3000} />}
      <AuthCard title="Hiditra">
        <form id="loginForm" onSubmit={handleSubmit} className="space-y-4">
          <AuthField label="Laharan-tarobia" error={error.tel}>
            <input
              type="tel"
              inputMode="numeric"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              autoComplete="tel"
              className={inputClass(error.tel)}
            />
          </AuthField>

          <AuthField label="Kaody miafina" error={error.mdp}>
            <PasswordInput name="mdp" value={form.mdp} onChange={handleChange} error={error.mdp} />
          </AuthField>

          <button type="submit" disabled={hasError} className={submitClass}>
            Hiditra
          </button>
        </form>

        <p className="mt-6 text-center">
          Mbola tsy manana kaonty?{" "}
          <Link className="text-green-700 font-medium hover:underline" to="/Signin">
            Hisoratra anarana
          </Link>
        </p>

        <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-3 text-sm">
          <p className="font-medium text-green-800">Kaonty fanandramana (kaody : {DEMO_CODE})</p>
          <ul className="mt-2 space-y-1">
            {DEMO_ACCOUNTS.map((compte) => (
              <li key={compte.tel}>
                <button
                  type="button"
                  onClick={() => fillDemo(compte.tel)}
                  className="w-full text-left rounded px-2 py-1 hover:bg-green-100"
                >
                  <span className="font-mono">{compte.tel}</span> — {compte.nom}{" "}
                  <span className="text-gray-500">({compte.region})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </AuthCard>
    </>
  );
}
