"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#191624] text-white pt-32 pb-20 min-h-screen relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 text-sm font-medium border border-orange-500/20 mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Information Centered */}
        <div className="flex justify-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-10 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent text-center">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">+92 3142075010</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">darakhshanshah8@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-300">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Darakhshan08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/darakhshan-shah-4b0a79237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






// "use client";
// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';


// export default function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
//     }, 1500);
//   };
//   return <div className="bg-[#191624] text-white pt-32 pb-20 min-h-screen">
//       {/* Background elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 text-sm font-medium border border-orange-500/20 mb-4">
//             Get In Touch
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Let's{' '}
//             <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
//               Connect
//             </span>
//           </h1>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             I'm always open to discussing new projects, creative ideas, or
//             opportunities to be part of your vision.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Contact Information */}
//           <div className="lg:col-span-1 space-y-8">
//             <div className="bg-white/5 border border-white/10 rounded-xl p-8 transition-all hover:border-orange-500/30">
//               <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
//                 Contact Information
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-5 h-5 text-orange-400" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Phone</p>
//                     <p className="text-gray-300">+92 3142075010</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-5 h-5 text-orange-400" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Email</p>
//                     <p className="text-gray-300">darakhshanshah8@gmail.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-5 h-5 text-orange-400" />
//                   </div>
//                   <div>
//                     <p className="font-medium">Location</p>
//                     <p className="text-gray-300">Karachi, Pakistan</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-10">
//                 <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
//                 <div className="flex gap-4">
//                   <a href="https://github.com/Darakhshan08" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
//                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                   <a href="https://www.linkedin.com/in/darakhshan-shah-4b0a79237" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
//                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                     </svg>
//                   </a>
//                   <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
//                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-white/5 border border-white/10 rounded-xl p-8">
//               <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
//                 Send Me a Message
//               </h2>
//               {submitted ? <div className="text-center py-12">
//                   <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">
//                     Message Sent Successfully!
//                   </h3>
//                   <p className="text-gray-300 mb-6">
//                     Thank you for reaching out. I'll get back to you as soon as
//                     possible.
//                   </p>
//                   <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
//                     Send Another Message
//                   </button>
//                 </div> : <form className="space-y-6" onSubmit={handleSubmit}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Full Name
//                       </label>
//                       <input id="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-orange-500 transition-colors" required />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email Address
//                       </label>
//                       <input id="email" type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-orange-500 transition-colors" required />
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium mb-2">
//                         Phone Number
//                       </label>
//                       <input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-orange-500 transition-colors" />
//                     </div>
//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                         Subject
//                       </label>
//                       <input id="subject" type="text" placeholder="Project Inquiry" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-orange-500 transition-colors" />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Your Message
//                     </label>
//                     <textarea id="message" placeholder="I'd like to discuss a potential project..." rows={6} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-orange-500 transition-colors" required></textarea>
//                   </div>
//                   <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all font-medium flex items-center justify-center gap-2" disabled={isSubmitting}>
//                     {isSubmitting ? <>
//                         <Loader2 className="w-5 h-5 animate-spin" />
//                         Sending...
//                       </> : <>
//                         Send Message <Send className="w-4 h-4" />
//                       </>}
//                   </button>
//                 </form>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>;
// }