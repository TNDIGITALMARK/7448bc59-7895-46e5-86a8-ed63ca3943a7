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
  Award
} from 'lucide-react';

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
  }
];

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
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Have questions about cattle breeds, need farming advice, or want to learn more about our services? 
            We're here to help with all your pasture perfect needs.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="cow-card text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-base font-medium text-gray-800 mb-2">
                    {info.value}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="cow-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..."
                          className="w-full resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full hero-gradient text-background font-semibold hover:opacity-90 transition-opacity"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Team and Additional Info */}
            <div className="space-y-6">
              <Card className="cow-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Our Expert Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-3 last:pb-0">
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500 mt-1">{member.specialty}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="cow-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Expert Knowledge
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Over 20 years of combined experience in cattle breeding and ranch management.
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      24/7 Support
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Quick response times and comprehensive support for all your questions.
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Educational Focus
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    Committed to sharing knowledge and helping you succeed in cattle farming.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="cow-card">
              <CardHeader>
                <CardTitle className="text-lg">How quickly do you respond to inquiries?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days. 
                  Urgent matters may receive faster responses.
                </p>
              </CardContent>
            </Card>

            <Card className="cow-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer on-site consultations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We provide on-site consultations for ranch management, breed selection, 
                  and pasture optimization within a 200-mile radius of our headquarters.
                </p>
              </CardContent>
            </Card>

            <Card className="cow-card">
              <CardHeader>
                <CardTitle className="text-lg">Can you help with breed selection?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! Our experts can help you choose the perfect breeds based on your 
                  climate, land conditions, and farming goals.
                </p>
              </CardContent>
            </Card>

            <Card className="cow-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer educational resources?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we provide comprehensive guides, fact sheets, and educational materials 
                  for both beginners and experienced cattle farmers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}