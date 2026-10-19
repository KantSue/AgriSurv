import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../modules/auth";
import { LoginUserApi } from "../modules/Login_api";
import { LogForm } from "../hooks_login/logForm";
import { routeAfterLogin } from "../modules/culture_module";
import { Alerte } from "../hooks_login/alertHook";
import { AuthCard, AuthField, PasswordInput, inputClass, submitClass } from "../Components/AuthLayout";

export function LogIn() {
  const [alerte, setAlerte] = useState({ message: "", type: "", show: false });
  const { form, error, handleChange } = LogForm({ tel: "", mdp: "" });
  const navigate = useNavigate();

  const hasError = Object.values(error).some((err) => err) || !form.tel || !form.mdp;

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
      </AuthCard>
    </>
  );
}
