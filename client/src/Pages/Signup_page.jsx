import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../modules/auth";
import { SignUpApi } from "../modules/Sign_api";
import { SignForm } from "../hooks_login/signForm";
import { allRegions } from "../modules/culture_module";
import { useReadAll } from "../hooks_login/readAll";
import { Alerte } from "../hooks_login/alertHook";
import { AuthCard, AuthField, PasswordInput, inputClass, submitClass } from "../Components/AuthLayout";

export function SignIn() {
  const [alerte, setAlerte] = useState({ message: "", type: "", show: false });
  const { form, error, handleChange } = SignForm({
    nom: "",
    tel: "",
    localisation: "",
    mdp: "",
  });
  const { data: regions } = useReadAll(allRegions);
  const navigate = useNavigate();

  const hasError =
    Object.values(error).some((err) => err) || Object.values(form).some((value) => !value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasError) {
      setAlerte({ message: "Mbola misy diso ao amin'ny formulaire", type: "error", show: true });
      return;
    }
    try {
      const response = await SignUpApi(form);
      if (!response.success) {
        setAlerte({ message: response.message, type: "error", show: true });
        return;
      }
      setToken(response.data.token);
      navigate("/Culture/choice", { replace: true });
    } catch (err) {
      setAlerte({ message: "fahadisoana tsy voahevitra", type: "error", show: true });
    }
  };

  return (
    <>
      {alerte.show && <Alerte message={alerte.message} type={alerte.type} duration={3000} />}
      <AuthCard title="Hisoratra anarana">
        <form id="signupForm" onSubmit={handleSubmit} className="space-y-4">
          <AuthField label="Anarana" error={error.nom}>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              autoComplete="name"
              className={inputClass(error.nom)}
            />
          </AuthField>

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

          <AuthField label="Faritra" error={error.localisation}>
            <select
              name="localisation"
              value={form.localisation}
              onChange={handleChange}
              className={inputClass(error.localisation)}
            >
              <option value="">-- Safidio --</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </AuthField>

          <AuthField label="Kaody miafina (isa 6)" error={error.mdp}>
            <PasswordInput name="mdp" value={form.mdp} onChange={handleChange} error={error.mdp} numeric />
          </AuthField>

          <button type="submit" disabled={hasError} className={submitClass}>
            Hisoratra anarana
          </button>
        </form>

        <p className="mt-6 text-center">
          Efa manana kaonty?{" "}
          <Link className="text-green-700 font-medium hover:underline" to="/login">
            Hiditra
          </Link>
        </p>
      </AuthCard>
    </>
  );
}
