import { useState } from "react";

// Pas de longueur imposée sur le code : les anciens comptes ont des codes de 8 caractères.
const formValidation = (name, value) => {
    let error = "";

    if (!value) {
        if (name === "tel") error = "Ampidiro ny laharana finday";
        if (name === "mdp") error = "Ampidiro ny kaody miafina";

        return error;
    }

   if (name === "tel") {
        const tele=value.replace(/\s+/g, "");
        if (!/^\d+$/.test(tele)) {
            error = "Isa ihany no azo ampiasaina";
        } else if (!/^\d{10}$/.test(tele)) {
            error = "Tokony ho isa 10 marina";
        }
    }
        return error;

};
export const LogForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);
    const [error, setError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));

        const errorMessages = formValidation(name, value);
        setError((prev) => ({
        ...prev,
        [name]: errorMessages,
        }));
    };
    return {form, error, handleChange};
};
