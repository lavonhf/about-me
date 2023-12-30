import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_erkshyx",
        "template_9u58xfc",
        form.current,
        "0HA2n3wrZK8v4CCPf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center font-mono bg-slate-800">
      <form ref={form} onSubmit={sendEmail} className="flex text-slate-400 flex-col gap-5">
        <b>Contact me</b>
        <div className="inputa flex flex-col h-10">
          <label className="labela left-0">Name</label>
          <input
            type="text"
            name="user_name"
            className="bg-slate-400 outline-none cursor-pointer "
          />
        </div>

        <div className="inputb flex flex-col h-10 bg-transparent">
          <label className="labelb left-0">Email</label>
          <input
            type="email"
            name="user_email"
            className="bg-slate-400 outline-none cursor-pointer"
          />
        </div>

        <div className="inputc flex flex-col h-10 bg-transparent">
          <label className="labelc left-0 ">Message</label>
          <textarea
            name="message"
            className="bg-slate-400 outline-none cursor-pointer"
          />
        </div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
