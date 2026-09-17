import { useState } from "react";

const formValidation=(name,value,form)=>{
    let error="";

    if (!value){
        if (name === "nom") error = "Ampidiro ny anarana";
        if (name === "prenom") error = "fanampiny anarana";
        if (name === "tel") error = "Ampidio ny Laharana finday";
        if (name === "localisation") error = "faritra";
        if (name === "mdp") error = "Kaody miafina";
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
    
    if (name === "mdp") {
      if (!value) {
        error = "Kaody miafina";
      } else if (form.mdp.length < 8) {
       error = "farafahakeliny 8 isa";
      }
    }
    return error;
}
export const SignForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);
    const [error, setError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));

        const errorMessages = formValidation(name, value, form);
        setError((prev) => ({
        ...prev,
        [name]: errorMessages,
        }));
    };
    return {form, error, handleChange};
};