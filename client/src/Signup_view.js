import React, { useState } from "react";

function SignUpPage() {
  const [errors, setErr] = useState({});
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    tel: "",
    localisation: "",
    mdp: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      alert("Misy erreur mbola ao amin'ny formulaire !");
      return;
    }
    fetch("http://localhost:3000/login/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
       .then((res) => {
        const data=res.json();
        if (!res.ok) throw new Error("Erreur réseau : " + res.status);
        return data;
        })
      .then((data) => {
        alert(data.message);
        console.log("Token:",data.token);
        localStorage.setItem("token",data.token)
    })
      .catch((err) => {
        alert(err.message);
      });
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    const newErr = {};
    if (name === "nom") {
      if (!value) newErr.nom = "Ampidiro ny anarana";
    }

    if (name === "prenom") {
      if (!value) newErr.prenom = "fanampiny anarana";
    }

    if (name === "tel") {
      if (!value) {
        newErr.tel = "Ampidio ny Laharana finday";
      } else if (!/^\d+$/.test(form.tel)) {
        newErr.tel = "Isa ihany no azo ampiasaina";
      } else if (form.tel.length !== 9) {
        newErr.tel = "latsaky ny folo";
      }
    }

    if (name === "localisation") {
    }
    if (!value) newErr.localisation = "faritra";

    if (name === "mdp") {
      if (!value) {
        newErr.mdp = "Kaody miafina";
      } else if (form.mdp.length < 8) {
        newErr.mdp = "farafahakeliny 8 isa";
      }
    }

    setErr(newErr);
  };
  return (
    <div>
      <h2>Pejy Fidirana</h2>

      <form id="signupForm" onSubmit={handleSubmit}>
        <label>
          Nom :{" "}
          <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
          />
        </label>
        <br />
        {errors.nom && <p style={{ color: "red" }}>{errors.nom}</p>}
        <br />
        <label>
          Prénom :{" "}
          <input
            type="text"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
          />
        </label>
        <br />
        {errors.prenom && <p style={{ color: "red" }}>{errors.prenom}</p>}
        <br />
        <label>
          Téléphone :{" "}
          <input
            type="text"
            name="tel"
            value={form.tel}
            onChange={handleChange}
          />
        </label>
        <br />
        {errors.tel && <p style={{ color: "red" }}>{errors.tel}</p>}
        <br />
        <label>
          Localisation :{" "}
          <input
            type="text"
            name="localisation"
            value={form.localisation}
            onChange={handleChange}
          />
        </label>
        <br />
        {errors.localisation && (
          <p style={{ color: "red" }}>{errors.localisation}</p>
        )}
        <br />
        <label>
          Mot de passe :{" "}
          <input
            type="password"
            name="mdp"
            value={form.mdp}
            onChange={handleChange}
          />
        </label>
        <br />
        {errors.mdp && <p style={{ color: "red" }}>{errors.mdp}</p>}
        <br />
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Créer
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
