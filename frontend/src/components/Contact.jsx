import React, { useState } from "react";
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
      href: "#",
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
    if (formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (formData.subject.length < 5)
      newErrors.subject = "Subject must be at least 5 characters";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 text-white">
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
                <div key={idx} className="flex items-center space-x-4">
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
                        className="text-white font-semibold hover:text-cyan-400"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} /> <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [sending, setSending] = useState(false);

//   const contactInfo = [
//     { icon: <Mail className="w-6 h-6" />, label: "Email", value: "avnijain1705@gmail.com", href: "mailto:avnijain1705@gmail.com" },
//     { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91-9131174073", href: "tel:+919131174073" },
//     { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Hyderabad, IN", href: "#" },
//   ];

//   const socialLinks = [
//     { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com/AVNIJ17", color: "hover:text-gray-200" },
//     { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/avnijain17/", color: "hover:text-blue-300" },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
//     if (formData.subject.length < 5) newErrors.subject = "Subject must be at least 5 characters";
//     if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
//     return newErrors;
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const validationErrors = validate();
//   //   if (Object.keys(validationErrors).length > 0) {
//   //     setErrors(validationErrors);
//   //     return;
//   //   }

//   //   setErrors({});
//   //   setSending(true);

//   //   emailjs
//   //     .send(
//   //       "YOUR_SERVICE_ID",   // replace with your EmailJS service ID
//   //       "YOUR_TEMPLATE_ID",  // replace with your EmailJS template ID
//   //       formData,
//   //       "YOUR_PUBLIC_KEY"    // replace with your EmailJS public key
//   //     )
//   //     .then(
//   //       () => {
//   //         alert("Message sent successfully!");
//   //         setFormData({ name: "", email: "", subject: "", message: "" });
//   //         setSending(false);
//   //       },
//   //       (err) => {
//   //         alert("Failed to send message. Try again later.");
//   //         console.error(err);
//   //         setSending(false);
//   //       }
//   //     );
//   // };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const validationErrors = validate();
//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//     return;
//   }
//   setErrors({});
//   setSending(true);

//   try {
//     const response = await fetch("https://avni-portfolio.onrender.com/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     });

//     const data = await response.json(); // <-- now response is stored

//     if (response.ok) {
//       alert(data.message);
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     } else {
//       alert(data.message || "Something went wrong!");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Failed to send message. Try again later.");
//   }

//   setSending(false);
// };


//   return (
//     <section id="contact" className="py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
//           <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Contact Info */}
//           <div className="space-y-8 text-white">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
//               <p className="text-gray-300 mb-8">
//                 Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
//               </p>
//             </div>
//             <div className="space-y-6">
//               {contactInfo.map((info, idx) => (
//                 <div key={idx} className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-cyan-900 rounded-lg flex items-center justify-center text-cyan-200">
//                     {info.icon}
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">{info.label}</p>
//                     {info.href === "#" ? (
//                       <p className="text-white font-semibold">{info.value}</p>
//                     ) : (
//                       <a href={info.href} className="text-white font-semibold hover:text-cyan-400">
//                         {info.value}
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, idx) => (
//                   <a
//                     key={idx}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color}`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-800 rounded-lg shadow-xl p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
//                   />
//                   {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
//                   />
//                   {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white"
//                 />
//                 {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
//                 <textarea
//                   name="message"
//                   rows="6"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white resize-none"
//                 />
//                 {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
//               </div>

//               <button
//                 type="submit"
//                 disabled={sending}
//                 className="w-full bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 flex items-center justify-center space-x-2 disabled:opacity-50"
//               >
//                 {sending ? "Sending..." : <><Send size={20} /> <span>Send Message</span></>}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
