"use client";
import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    projectBudget: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    projectBudget: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (validateForm()) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const startLoading = () => setIsLoading(true);

  const stopLoading = () => setIsLoading(false);

  const currencies = [
    { value: "USD", label: "$" },
    { value: "EUR", label: "€" },
    { value: "BTC", label: "฿" },
    { value: "JPY", label: "¥" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { ...errors };

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      } else {
        newErrors[key] = "";
      }
    });

    // Additional email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    startLoading();

    const formDataToSend = new FormData(e.target);

    try {
      await fetch("https://formspree.io/f/myzgzoyz", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });
      e.target.reset();
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        projectBudget: "",
        message: "",
      });
      handleClickOpen();
    } catch (error) {
      console.error("Error:", error);
    }

    stopLoading();
  };

  const points = [
    {
      id: 1,
      title:
        "Having received and processed your request, we will get back to you shortly to detail your project needs and sign an NDA to ensure the confidentiality of information.",
    },
    {
      id: 2,
      title:
        "After examining requirements, our analysts and developers devise a project proposal with the scope of works, team size, time and cost estimates.",
    },
    {
      id: 3,
      title:
        "We arrange a meeting with you to discuss the offer and come to an agreement",
    },
    {
      id: 4,
      title:
        "We sign a contract and start working on your project as quickly as possible.",
    },
  ];

  return (
    <>
      <div className="min-h-[700px]" id="contact">
        <div className="flex flex-col gap-4 px-10 xs:px-3">
          <h1 className="text-4xl font-semibold">Contact Us!</h1>
          <p className="text-xl xs:text-base">
            <span className="text-red-500 underline cursor-pointer">
              Book a call
            </span>{" "}
            or fill out the form below, and we'll get back to you <br /> once
            we've processed your request.
          </p>
        </div>
        <div className="py-20 px-10 lg:px-2 flex gap-10 justify-between lg:flex-col">
          <div className="min-w-[900px] py-6 lg:min-w-full">
            <form
              method="post"
              action="https://formspree.io/sufyanahmed054@gmail.com"
              onSubmit={handleOnSubmit}
            >
              <div className="flex items-center gap-5 xs:flex-col">
                <div className="flex flex-col gap-5 flex-1 xs:w-full">
                  <div className="flex flex-col">
                    <Box>
                      <div className="flex w-full gap-10 sm:flex-col">
                        <div className="flex flex-col gap-8 w-full">
                          <TextField
                            id="standard-basic"
                            label="Name"
                            name="name"
                            variant="standard"
                            value={formData.name}
                            onChange={handleInputChange}
                            error={!!errors.name}
                            helperText={errors.name}
                          />
                          <TextField
                            id="standard-basic"
                            label="Email"
                            name="email"
                            variant="standard"
                            value={formData.email}
                            onChange={handleInputChange}
                            error={!!errors.email}
                            helperText={errors.email}
                          />
                        </div>
                        <div className="flex flex-col gap-8 w-full">
                          <TextField
                            id="standard-basic"
                            label="Company"
                            variant="standard"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            error={!!errors.company}
                            helperText={errors.company}
                          />
                          <TextField
                            id="standard-basic"
                            label="Phone"
                            variant="standard"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                          />
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-10 py-10">
                <Box className="flex w-full gap-10 sm:flex-col">
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Subject"
                    variant="standard"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full"
                    error={!!errors.subject}
                    helperText={errors.subject}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Project Budget"
                    className="w-full"
                    variant="standard"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    error={!!errors.projectBudget}
                    helperText={errors.projectBudget}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </div>
              <div className="mt-5">
                <textarea
                  id=""
                  cols="50"
                  rows="0"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe Your Needs In Details*"
                  className="focus:outline-none h-[200px] w-full border-b border-gray-600"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <small className="text-xs font-normal text-gray-600">
                Please include project details, duration, tech stack, IT
                professionals needed, and other relevant info
              </small>
              <div className="flex gap-40 sm:gap-8 md:gap-20 sm:flex-col mt-10">
                <div className="w-[580px] sm:w-full md:w-[680px]">
                  <p className="text-sm text-gray-500 sm:text-xs">
                    Please be informed that when you click the Send button
                    Innowise Group will process your personal data in accordance
                    with our{" "}
                    <span className="text-black hover:text-sky-600">
                      Privacy Policy
                    </span>{" "}
                    for the purpose of providing you with appropriate
                    information.
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`${
                      isLoading
                        ? "bg-blue-600 text-pw-blue border border-pw-blue ring-pw-orange ring-offset-pw-blue cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-pw-orange ring-pw-orange ring-offset-pw-blue"
                    } py-4 px-6 font-spartanMedium text-sm lg:text-base rounded transition delay-150 duration-300 ease-in-out ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-pw-blue to-pw-orange-500 animate-spin">
                          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="ml-3">Processing...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-full text-white">
            <div className="px-8 py-10 text-3xl font-semibold sm:text-2xl xs:text-xl sm:py-4">
              <h1>What happens next?</h1>
            </div>
            <div className="px-6 md:px-1 py-14 flex flex-col gap-10">
              {points.map((item) => {
                return (
                  <div
                    key={`${item.id}-${item.title}`}
                    className="flex gap-5 sm:gap-3"
                  >
                    <div className="rounded-full md:border-none md:rounded-none w-[50px] h-[50px] flex items-center justify-center border relative">
                      <h1>{item.id}</h1>
                    </div>
                    <div className="w-[400px] md:w-full">
                      <p className="sm:text-sm xs:text-xs">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute">
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Message Sent Successfully!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Thank you for getting in touch. I will get back to you
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Got it, Thanks
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
