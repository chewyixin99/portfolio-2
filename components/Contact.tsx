import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { IoMdSend } from "react-icons/io";
import { useSnackbar } from "notistack";

import { sendContactForm } from "../pages/lib/api";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      subject: "Hello from portfolio!",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setLoading(true);
    try {
      await sendContactForm(formData);
      // display success snackbar
      enqueueSnackbar("Email sent successfully!", {
        variant: "success",
        autoHideDuration: 3000,
      });
      reset();
    } catch (err: unknown) {
      // display error snackbar
      enqueueSnackbar("Oops, something went wrong!", {
        variant: "error",
        autoHideDuration: 3000,
      });
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto md:h-screen p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] gap-8 items-center">
        <div>{/* Snackbar */}</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="title uppercase tracking-widest">
            <span className="font-tags font-normal color-text-secondary lowercase">
              {"< "}
            </span>{" "}
            Contact Me
            <span className="font-tags font-normal color-text-secondary lowercase">
              {" />"}
            </span>{" "}
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="subtitle py-3">
            Like what you see? Let&lsquo;s connect!
          </h2>
        </motion.div>

        {/* Start of form */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <form className="my-5">
            <div>
              <div className="flex justify-between">
                <input
                  type="text"
                  className="contact-input mr-3"
                  placeholder="Name"
                  {...register("name", {
                    required: "required",
                    disabled: loading,
                    pattern: {
                      // no whitespace only
                      value: /[^\s-]/,
                      message: "invalid input",
                    },
                  })}
                />
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Email"
                  {...register("email", {
                    required: "required",
                    disabled: loading,
                    pattern: {
                      // valid email regex checking
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
              </div>
              <div className="flex justify-start">
                <p className="error-msg">{errors.name?.message}</p>
                <p className="error-msg">{errors.email?.message}</p>
              </div>
            </div>
            <div>
              <input
                type="text"
                className="contact-input"
                placeholder="Subject"
                {...register("subject", {
                  required: "required",
                  disabled: loading,
                  pattern: {
                    // no whitespace only
                    value: /[^\s-]/,
                    message: "invalid input",
                  },
                })}
              />
              <p className="error-msg">{errors.subject?.message}</p>
            </div>
            <div>
              <textarea
                className="contact-input"
                placeholder="Message"
                rows={4}
                {...register("message", {
                  required: "required",
                  disabled: loading,
                  pattern: {
                    // no whitespace only
                    value: /[^\s-]/,
                    message: "invalid input",
                  },
                })}
              />
              <p className="error-msg">{errors.message?.message}</p>
            </div>
            <div className="flex justify-end">
              {/* <button type="submit" className="submit-button">
              Send message!
            </button> */}
              <LoadingButton
                loading={loading}
                loadingPosition="end"
                onClick={handleSubmit(onSubmit)}
                endIcon={<IoMdSend />}
                variant="contained"
                className="submit-button "
              >
                {loading ? "Sending" : "Send message"}&nbsp;
              </LoadingButton>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
