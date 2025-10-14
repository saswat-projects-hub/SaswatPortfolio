import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Let's connect and explore opportunities for collaboration
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">saswat.dash.iitkgp@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 8895406527</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Kharagpur, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Links</h2>
            
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 group"
              >
                <Linkedin className="text-blue-600 mr-4" size={24} />
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-gray-600">Connect professionally</p>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-gray-600" size={20} />
              </a>
              
              <a
                href="#"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 group"
              >
                <Github className="text-gray-800 mr-4" size={24} />
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <p className="text-gray-600">View my code</p>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-gray-600" size={20} />
              </a>
              
              <a
                href="#"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 group"
              >
                <ExternalLink className="text-orange-600 mr-4" size={24} />
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">Portfolio</p>
                  <p className="text-gray-600">Additional projects</p>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-gray-600" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to collaborate?</h2>
          <p className="text-xl mb-6 opacity-90">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Mail className="mr-2" size={20} />
            Send me an email
          </a>
        </div>

        {/* Availability */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Available for new opportunities
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;