import React from "react";
import { setToken } from "../modules/auth";
import { LoginUserApi } from "../modules/Login_api";
import { LogForm } from "../hooks_login/logForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IsAlredyExistInPratiquer } from "../modules/culture_module";
import { Alerte } from "../hooks_login/alertHook";

export function LogIn() {
  const [animate, setAnimate] = useState(false);
    const [alerte, setAlerte] = useState({ message: "", type: "", show: false });
   
  const { form, error, handleChange } = LogForm({
    nom: "",
    tel: "",
    mdp: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
      setAnimate(true);
      
    }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const ContainError = Object.values(error).some((err) => err);
    if (ContainError) {
       
        setAlerte({ message: "Mbola misy diso ao amin'ny formulaire", type: "error", show: true });
      return;
    }
    try {
      const response = await LoginUserApi(form);

      if (!response.success) {
        setAlerte({ message: response.message, type: "error", show: true });
        return;
      }

      setAlerte({ message: response.data.message, type: "success", show: true });
      setToken(response.data.token);

      const cultureResponse = await IsAlredyExistInPratiquer();
      console.log(cultureResponse)
      if (!cultureResponse.success) {
        navigate("/Culture/choice");
      } else {
        navigate("/Acceuil");
      }
    } catch (err) {
      setAlerte({ message: "fahadisoana tsy voahevitra", type: "error", show: true });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#03624C]">
    
     {alerte.show && <Alerte message={alerte.message} type={alerte.type} duration={3000} />}


<div className={`
    transition-all duration-1000 ease-out
    ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
    w-96 max-w-md border border-gray-300 shadow-2xl rounded-lg p-8 bg-white transform hover:-translate-y-1 transition-all duration-300`}

    >       
<div className="flex flex-row justify-center gap-4">
      <h2 className=" text-2xl text-center font-bold mb-6">
        Pejy Fisoratana anarana
      </h2>
      <img
          src="/images/logo.png"
          alt="Culture"
          className="w-9 h-9 md:w-32 md:h-9 object-cover transition-transform duration-300 hover:scale-110"
        />
        </div>
        <form id="loginForm" onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-5">
            <label className="w-28 text-gray-700 font-medium">Anarana : </label>
            <div className="flex-1">
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md border 
                          ${
                            error.mdp
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-gray-300 focus:border-green-900 focus:ring-green-300"
                          }
                          bg-[#D6E2D5] focus:outline-none
                        `}
              />
            </div>
            {error.nom && (
              <p style={{ color: "red" }} className="text-red-500 text-sm mt-1">
                {error.nom}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <label className="w-25 text-gray-700 font-medium">
              Laharan-tarobia:{" "}
            </label>
            <div className="flex-1">
              <input
                type="text"
                name="tel"
                value={form.tel}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md border 
                        ${
                          error.mdp
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-green-900 focus:ring-green-300"
                        }
                        bg-[#D6E2D5] focus:outline-none
                      `}
              />
            </div>

            <br />
            {error.tel && (
              <p className="text-red-500 text-sm mt-1" style={{ color: "red" }}>
                {error.tel}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-5">
            <label className="w-39 text-gray-700 font-medium">
              Kaody miafina :{" "}
            </label>
            <div className="flex-1">
              <input
                type="password"
                name="mdp"
                value={form.mdp}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md border 
                        ${
                          error.mdp
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-green-900 focus:ring-green-300"
                        }
                        bg-[#D6E2D5] focus:outline-none
                      `}
              />
            </div>

            {error.mdp && (
              <p className="text-red-500 text-sm mt-1">{error.mdp}</p>
            )}
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
                 disabled={Object.values(error).some((err) => err)}
            className="px-6 py-2 bg-green-900 text-white rounded-md hover:bg-green-700 
                       disabled:bg-gray-400 transition-colors duration-200"
            >
              Hiditra
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}
