import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="max-w-[var(--max-width-outer)] justify-around items-center m-auto md:h-screen p-2 flex py-16">
      <div className="max-w-[var(--max-width-inner)] gap-8 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="title uppercase tracing-widest">Contact me</h3>
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
        <form className="my-5" action="">
          <div className="flex justify-between">
            <input
              type="text"
              className="contact-input mr-5"
              placeholder="Name"
            />
            <input
              type="text"
              className="contact-input"
              placeholder="Email"
              required
            />
          </div>
          <input type="text" className="contact-input" placeholder="Subject" />
          <textarea
            className="contact-input"
            placeholder="Message"
            rows={4}
            required
          />
          <div className="flex justify-end">
            <button type="submit" className="submit-button">
              Send message!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
