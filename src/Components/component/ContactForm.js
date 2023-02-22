import React from "react";
import { ExternalLink } from "react-external-link";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FcCallback } from "react-icons/fc";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="p-4 lg:p-10 my-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-28">
      <div className="lg:w-[50%] w-[100%]  ">
        <div className="mt-4 mb-6">
          <h3 className="text-2xl">Talk to me</h3>
          <h1 className="text-3xl font-semibold">GET IN TOUCH </h1>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="text-md rounded-lg h-8 p-2"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <input
            className="text-md rounded-lg h-8 p-2"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          <textarea
            className="text-md rounded-lg p-2"
            placeholder="Message"
            rows={4}
            {...register("message", { required: true })}
          ></textarea>
        </form>
      </div>
      <div className="lg:w-[40%] ">
        <div className="flex items-center gap-2">
          <BsFacebook size={25} />
          <ExternalLink
            href="https://www.facebook.com/arshika.shorony.1"
            target="_blank"
          >
            <h4 className="text-xl hover:text-info text-secondary font-bold">Arshika Islam</h4>
          </ExternalLink>
        </div>
        <div className="flex items-center gap-2 my-4 ">
          <BsInstagram size={25} />
          <ExternalLink
            href="https://www.instagram.com/_aarshikaa_/"
            target="_blank"
          >
            <h4 className="text-xl hover:text-success text-primary font-bold">_aarshikaa_</h4>
          </ExternalLink>
        </div>
        <div className="flex items-center gap-2 my-4 ">
          <FcCallback size={25} />
          <h4 className="text-xl font-bold">01985289522</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
