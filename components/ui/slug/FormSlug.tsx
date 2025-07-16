"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Carro } from "../../../interfaces/Interface";



export function CarContactForm({ carro }: { carro: Carro }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(`Olá, eu tenho interesse no ${carro.model} ${carro.description}.`);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      email,
      phone,
      message,
    };

    emailjs
      .send(
        "service_pm6f9s6",       
        "template_7f8oksa",     
        templateParams,
        "zURjQanq6LIUf2oZy"      
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage(`Olá, tenho interesse no ${carro.model} ${carro.description}`);

        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error("Erro ao enviar", err);
        alert("Erro ao enviar mensagem. Tente novamente.");
      });
  };

  return (
    <div>
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-900/30 border border-green-800 rounded-lg p-4 text-center"
        >
          <p className="text-green-400 font-medium">Mensagem enviada com sucesso!</p>
          <p className="text-sm text-gray-400 mt-1">Entraremos em contato em breve.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-[#FF4420]/20 bg-[#121212] px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-[#FF4420]/20 bg-[#121212] px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md border border-[#FF4420]/20 bg-[#121212] px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-[#FF4420]/20 bg-[#121212] px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#ff4d4d]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF4420] text-white rounded-3xl p-2 px-4 mt-4 block text-center font-medium hover:bg-[#FF4420]/50 transition-colors duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      )}
    </div>
  );
}
