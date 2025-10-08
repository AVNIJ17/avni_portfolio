import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "avnijain1705@gmail.com",
      href: "mailto:avnijain1705@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-9131174073",
      href: "tel:+919131174073",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hyderabad, IN",
      href: "https://www.google.com/maps?q=Hyderabad",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/AVNIJ17",
      color: "hover:text-gray-200",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/avnijain17/",
      color: "hover:text-blue-300",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (formData.subject.length < 5) newErrors.subject = "Subject must be at least 5 characters";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSending(true);

    try {
      const response = await fetch(
        "https://avni-portfolio.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Try again later.");
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 mb-8">
                Whether you have a project in mind, want to collaborate, or
                just want to say hello, I'd love to hear from you.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <div className="w-12 h-12 bg-cyan-900 rounded-lg flex items-center justify-center text-cyan-200">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.href === "#" ? (
                      <p className="text-white font-semibold">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-cyan-400"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color}`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {["name", "email"].map((field, idx) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)} *
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                    />
                    {errors[field] && (
                      <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
                    )}
                  </div>
                ))}
              </div>

              {["subject", "message"].map((field, idx) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)} *
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      rows="6"
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                    />
                  )}
                  {errors[field] && (
                    <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} /> <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
