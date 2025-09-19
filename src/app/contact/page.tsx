'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Award } from
'lucide-react';

const contactInfo = [
{
  icon: Mail,
  title: 'Email Us',
  value: 'hello@pastsureperfect.com',
  description: 'We typically respond within 24 hours',
  color: 'text-blue-600'
},
{
  icon: Phone,
  title: 'Call Us',
  value: '(555) 123-4567',
  description: 'Monday - Friday, 9AM - 6PM EST',
  color: 'text-green-600'
},
{
  icon: MapPin,
  title: 'Visit Us',
  value: '123 Pasture Lane, Ranch Valley, TX 78901',
  description: 'Our headquarters and visitor center',
  color: 'text-amber-600'
},
{
  icon: Clock,
  title: 'Business Hours',
  value: 'Mon-Fri: 9AM-6PM EST',
  description: 'Weekend support via email only',
  color: 'text-purple-600'
}];


const teamMembers = [
{
  name: 'Dr. Sarah Johnson',
  role: 'Lead Cattle Specialist',
  specialty: 'Breed Research & Development'
},
{
  name: 'Mike Thompson',
  role: 'Ranch Operations Manager',
  specialty: 'Pasture Management & Nutrition'
},
{
  name: 'Emily Chen',
  role: 'Educational Content Director',
  specialty: 'Agricultural Education & Outreach'
}];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (/*#__PURE__*/
    React.createElement("div", { className: "min-h-screen bg-gradient-to-b from-white to-amber-50", "data-phoenix-id": "phoenix-7448bc59-1" }, /*#__PURE__*/

    React.createElement("section", { className: "py-16 bg-gradient-to-r from-amber-600 to-amber-700", "data-phoenix-id": "phoenix-7448bc59-2" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8 text-center", "data-phoenix-id": "phoenix-7448bc59-3" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-4xl lg:text-6xl font-bold text-white mb-6", "data-phoenix-id": "phoenix-7448bc59-4" }, "Get In Touch"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed", "data-phoenix-id": "phoenix-7448bc59-5" }, "Have questions about cattle breeds, need farming advice, or want to learn more about our services? We're here to help with all your pasture perfect needs."


    )
    )
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-12 bg-white", "data-phoenix-id": "phoenix-7448bc59-6" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-7" }, /*#__PURE__*/
    React.createElement("div", { className: "text-center mb-12", "data-phoenix-id": "phoenix-7448bc59-8" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl font-bold text-gray-900 mb-4", "data-phoenix-id": "phoenix-7448bc59-9" }, "Contact Information"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-lg text-gray-600", "data-phoenix-id": "phoenix-7448bc59-10" }, "Multiple ways to reach our expert team"

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", "data-phoenix-id": "phoenix-7448bc59-11" },
    contactInfo.map((info, index) => /*#__PURE__*/
    React.createElement(Card, { key: index, className: "cow-card text-center", "data-phoenix-id": "phoenix-7448bc59-12" }, /*#__PURE__*/
    React.createElement(CardContent, { className: "p-6", "data-phoenix-id": "phoenix-7448bc59-13" }, /*#__PURE__*/
    React.createElement("div", { className: "flex justify-center mb-4", "data-phoenix-id": "phoenix-7448bc59-14" }, /*#__PURE__*/
    React.createElement(info.icon, { className: `w-8 h-8 ${info.color}`, "data-phoenix-id": "phoenix-7448bc59-15" })
    ), /*#__PURE__*/
    React.createElement("h3", { className: "text-lg font-semibold text-gray-900 mb-2", "data-phoenix-id": "phoenix-7448bc59-16" },
    info.title
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-base font-medium text-gray-800 mb-2", "data-phoenix-id": "phoenix-7448bc59-17" },
    info.value
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-sm text-gray-600", "data-phoenix-id": "phoenix-7448bc59-18" },
    info.description
    )
    )
    )
    )
    )
    )
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-12", "data-phoenix-id": "phoenix-7448bc59-19" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-20" }, /*#__PURE__*/
    React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", "data-phoenix-id": "phoenix-7448bc59-21" }, /*#__PURE__*/

    React.createElement("div", { className: "lg:col-span-2", "data-phoenix-id": "phoenix-7448bc59-22" }, /*#__PURE__*/
    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-23" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-24" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-2xl flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-25" }, /*#__PURE__*/
    React.createElement(MessageSquare, { className: "w-6 h-6 text-green-600", "data-phoenix-id": "phoenix-7448bc59-26" }), "Send Us a Message"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-27" }, "Fill out the form below and we'll get back to you as soon as possible."

    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-28" },
    submitted ? /*#__PURE__*/
    React.createElement("div", { className: "text-center py-8", "data-phoenix-id": "phoenix-7448bc59-29" }, /*#__PURE__*/
    React.createElement("div", { className: "text-6xl mb-4", "data-phoenix-id": "phoenix-7448bc59-30" }, "\uD83C\uDF89"), /*#__PURE__*/
    React.createElement("h3", { className: "text-2xl font-bold text-green-600 mb-2", "data-phoenix-id": "phoenix-7448bc59-31" }, "Message Sent Successfully!"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-32" }, "Thank you for contacting us. We'll respond within 24 hours."

    )
    ) : /*#__PURE__*/

    React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6", "data-phoenix-id": "phoenix-7448bc59-33" }, /*#__PURE__*/
    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", "data-phoenix-id": "phoenix-7448bc59-34" }, /*#__PURE__*/
    React.createElement("div", { "data-phoenix-id": "phoenix-7448bc59-35" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", "data-phoenix-id": "phoenix-7448bc59-36" }, "Full Name *"

    ), /*#__PURE__*/
    React.createElement(Input, {
      id: "name",
      name: "name",
      type: "text",
      required: true,
      value: formData.name,
      onChange: handleInputChange,
      placeholder: "Enter your full name",
      className: "w-full", "data-phoenix-id": "phoenix-7448bc59-37" }
    )
    ), /*#__PURE__*/
    React.createElement("div", { "data-phoenix-id": "phoenix-7448bc59-38" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", "data-phoenix-id": "phoenix-7448bc59-39" }, "Email Address *"

    ), /*#__PURE__*/
    React.createElement(Input, {
      id: "email",
      name: "email",
      type: "email",
      required: true,
      value: formData.email,
      onChange: handleInputChange,
      placeholder: "Enter your email address",
      className: "w-full", "data-phoenix-id": "phoenix-7448bc59-40" }
    )
    )
    ), /*#__PURE__*/

    React.createElement("div", { "data-phoenix-id": "phoenix-7448bc59-41" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700 mb-2", "data-phoenix-id": "phoenix-7448bc59-42" }, "Subject *"

    ), /*#__PURE__*/
    React.createElement(Input, {
      id: "subject",
      name: "subject",
      type: "text",
      required: true,
      value: formData.subject,
      onChange: handleInputChange,
      placeholder: "What's this about?",
      className: "w-full", "data-phoenix-id": "phoenix-7448bc59-43" }
    )
    ), /*#__PURE__*/

    React.createElement("div", { "data-phoenix-id": "phoenix-7448bc59-44" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", "data-phoenix-id": "phoenix-7448bc59-45" }, "Message *"

    ), /*#__PURE__*/
    React.createElement(Textarea, {
      id: "message",
      name: "message",
      required: true,
      rows: 6,
      value: formData.message,
      onChange: handleInputChange,
      placeholder: "Tell us more about your inquiry...",
      className: "w-full resize-none", "data-phoenix-id": "phoenix-7448bc59-46" }
    )
    ), /*#__PURE__*/

    React.createElement(Button, {
      type: "submit",
      className: "w-full hero-gradient text-background font-semibold hover:opacity-90 transition-opacity",
      disabled: isSubmitting, "data-phoenix-id": "phoenix-7448bc59-47" },

    isSubmitting ? /*#__PURE__*/
    React.createElement(React.Fragment, null, "Sending...") : /*#__PURE__*/

    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Send, { className: "w-5 h-5 mr-2", "data-phoenix-id": "phoenix-7448bc59-48" }), "Send Message"

    )

    )
    )

    )
    )
    ), /*#__PURE__*/


    React.createElement("div", { className: "space-y-6", "data-phoenix-id": "phoenix-7448bc59-49" }, /*#__PURE__*/
    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-50" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-51" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-xl flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-52" }, /*#__PURE__*/
    React.createElement(Users, { className: "w-5 h-5 text-blue-600", "data-phoenix-id": "phoenix-7448bc59-53" }), "Our Expert Team"

    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { className: "space-y-4", "data-phoenix-id": "phoenix-7448bc59-54" },
    teamMembers.map((member, index) => /*#__PURE__*/
    React.createElement("div", { key: index, className: "border-b border-gray-200 last:border-b-0 pb-3 last:pb-0", "data-phoenix-id": "phoenix-7448bc59-55" }, /*#__PURE__*/
    React.createElement("h4", { className: "font-semibold text-gray-900", "data-phoenix-id": "phoenix-7448bc59-56" }, member.name), /*#__PURE__*/
    React.createElement("p", { className: "text-sm text-gray-600", "data-phoenix-id": "phoenix-7448bc59-57" }, member.role), /*#__PURE__*/
    React.createElement("p", { className: "text-xs text-gray-500 mt-1", "data-phoenix-id": "phoenix-7448bc59-58" }, member.specialty)
    )
    )
    )
    ), /*#__PURE__*/

    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-59" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-60" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-xl flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-61" }, /*#__PURE__*/
    React.createElement(Award, { className: "w-5 h-5 text-amber-600", "data-phoenix-id": "phoenix-7448bc59-62" }), "Why Choose Us?"

    )
    ), /*#__PURE__*/
    React.createElement(CardContent, { className: "space-y-3", "data-phoenix-id": "phoenix-7448bc59-63" }, /*#__PURE__*/
    React.createElement("div", { className: "flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-64" }, /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", className: "bg-green-100 text-green-800", "data-phoenix-id": "phoenix-7448bc59-65" }, "Expert Knowledge"

    )
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-sm text-gray-600", "data-phoenix-id": "phoenix-7448bc59-66" }, "Over 20 years of combined experience in cattle breeding and ranch management."

    ), /*#__PURE__*/

    React.createElement("div", { className: "flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-67" }, /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", className: "bg-blue-100 text-blue-800", "data-phoenix-id": "phoenix-7448bc59-68" }, "24/7 Support"

    )
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-sm text-gray-600", "data-phoenix-id": "phoenix-7448bc59-69" }, "Quick response times and comprehensive support for all your questions."

    ), /*#__PURE__*/

    React.createElement("div", { className: "flex items-center gap-2", "data-phoenix-id": "phoenix-7448bc59-70" }, /*#__PURE__*/
    React.createElement(Badge, { variant: "secondary", className: "bg-amber-100 text-amber-800", "data-phoenix-id": "phoenix-7448bc59-71" }, "Educational Focus"

    )
    ), /*#__PURE__*/
    React.createElement("p", { className: "text-sm text-gray-600", "data-phoenix-id": "phoenix-7448bc59-72" }, "Committed to sharing knowledge and helping you succeed in cattle farming."

    )
    )
    )
    )
    )
    )
    ), /*#__PURE__*/


    React.createElement("section", { className: "py-12 bg-white", "data-phoenix-id": "phoenix-7448bc59-73" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 lg:px-8", "data-phoenix-id": "phoenix-7448bc59-74" }, /*#__PURE__*/
    React.createElement("div", { className: "text-center mb-12", "data-phoenix-id": "phoenix-7448bc59-75" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl font-bold text-gray-900 mb-4", "data-phoenix-id": "phoenix-7448bc59-76" }, "Frequently Asked Questions"

    ), /*#__PURE__*/
    React.createElement("p", { className: "text-lg text-gray-600", "data-phoenix-id": "phoenix-7448bc59-77" }, "Quick answers to common questions"

    )
    ), /*#__PURE__*/

    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto", "data-phoenix-id": "phoenix-7448bc59-78" }, /*#__PURE__*/
    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-79" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-80" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-lg", "data-phoenix-id": "phoenix-7448bc59-81" }, "How quickly do you respond to inquiries?")
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-82" }, /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-83" }, "We typically respond to all inquiries within 24 hours during business days. Urgent matters may receive faster responses."


    )
    )
    ), /*#__PURE__*/

    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-84" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-85" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-lg", "data-phoenix-id": "phoenix-7448bc59-86" }, "Do you offer on-site consultations?")
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-87" }, /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-88" }, "Yes! We provide on-site consultations for ranch management, breed selection, and pasture optimization within a 200-mile radius of our headquarters."


    )
    )
    ), /*#__PURE__*/

    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-89" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-90" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-lg", "data-phoenix-id": "phoenix-7448bc59-91" }, "Can you help with breed selection?")
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-92" }, /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-93" }, "Absolutely! Our experts can help you choose the perfect breeds based on your climate, land conditions, and farming goals."


    )
    )
    ), /*#__PURE__*/

    React.createElement(Card, { className: "cow-card", "data-phoenix-id": "phoenix-7448bc59-94" }, /*#__PURE__*/
    React.createElement(CardHeader, { "data-phoenix-id": "phoenix-7448bc59-95" }, /*#__PURE__*/
    React.createElement(CardTitle, { className: "text-lg", "data-phoenix-id": "phoenix-7448bc59-96" }, "Do you offer educational resources?")
    ), /*#__PURE__*/
    React.createElement(CardContent, { "data-phoenix-id": "phoenix-7448bc59-97" }, /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600", "data-phoenix-id": "phoenix-7448bc59-98" }, "Yes, we provide comprehensive guides, fact sheets, and educational materials for both beginners and experienced cattle farmers."


    )
    )
    )
    )
    )
    )
    ));

}