"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_se09jzg",
        "template_j89ak1i",
        templateParams,
        "zjZ6JxujDEXl7Gatg"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("ERRO: ", error);
        }
      );
  }

  return (
    <div
      className="bg-[#3F3D3D] p-3 mx-4 lg:mx-auto max-w-5xl md:max-w-5xl uppercase text-white rounded-2xl relative mt-5"
      id="entre-em-contato"
    >
      <div className="text-white text-3xl sm:text-3xl font-medium text-center sm:text-left">
        <h1>ENTRE EM CONTATO</h1>
        <span className="block w-full h-1 bg-[#FF4420] my-4" />
      </div>
      <div className="flex flex-col">
        <form onSubmit={sendEmail}>
          <input
            className="w-full p-3 bg-[#2E2D2D]  rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="w-full mt-2 p-3 bg-[#2E2D2D]  rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="w-full mt-2 p-3 bg-[#2E2D2D]  rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4A4A4A]"
            placeholder="Digite sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input
            type="submit"
            value="ENVIAR"
            className="w-full mt-4 bg-[#FF4420] text-white rounded-3xl p-2 px-4 block text-center font-medium hover:bg-[#FF4420]/50 transition-colors duration-300"
          />
        </form>
      </div>
    </div>
  );
}
