import React from 'react';
import { GraduationCap, Award, Users, Target, BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  const positionsOfResponsibility = [
    {
      title: "Governor",
      organization: "Public Policy and Governance Society, IIT Kharagpur",
      duration: "May '23 - May '24",
      achievements: [
        "Initiated Diplomatic Discourse Series and orchestrated a large-scale Governance Awareness Program across 15+ cities, reaching over 10K+ participants"
      ]
    },
    {
      title: "LIGHT Head",
      organization: "Gopali Youth Welfare Society",
      duration: "Jan '22 - June '24",
      achievements: [
        "Led a team to manage 13 LIGHT Centers, fostering a network of 450+ students"
      ]
    },
    {
      title: "Secretary Culinary Arts Subcommittee",
      organization: "Technology Students' Gymkhana, IIT Kharagpur",
      duration: "Oct '22 - Apr '23",
      achievements: [
        "Coordinated logistics for 40+ high-profile events, engaging over 15,000 student participants"
      ]
    }
  ];

  const awards = [
    {
      title: "Qualified GATE 2024",
      achievement: "AIR 20556"
    },
    {
      title: "American Express Campus Challenge 2024",
      achievement: "Ranked 9th out of 4,518"
    },
    {
      title: "Tata Elxsi TELIPORT",
      achievement: "Campus Winner out of 7,000+ teams"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Education & Skills</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Academic excellence combined with leadership experience and competitive achievements
        </p>
      </div>

      {/* Education */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <GraduationCap className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">M.Tech Dual Degree (5Y)</h3>
              <p className="text-lg text-blue-600 font-semibold mb-2">Mechanical Engineering (Hons.) and Manufacturing Science and Engineering</p>
              <p className="text-gray-700 mb-2">Indian Institute of Technology Kharagpur</p>
              <p className="text-gray-600">Expected 2025</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-center bg-white rounded-lg p-4 shadow-md">
                <p className="text-2xl font-bold text-gray-900">6.73/10</p>
                <p className="text-gray-600 text-sm">CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Users className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Positions of Responsibility</h2>
        </div>
        
        <div className="space-y-6">
          {positionsOfResponsibility.map((position, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-1">{position.organization}</p>
                </div>
                <span className="text-gray-500 font-medium">{position.duration}</span>
              </div>
              
              <div className="space-y-3">
                {position.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <Target className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards and Achievements */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Award className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Awards and Achievements</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 text-center">
              <Award className="text-yellow-500 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-orange-600 font-semibold">{award.achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section>
        <div className="flex items-center mb-8">
          <BookOpen className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Core Competencies</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Product & Strategy</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Product Management & Strategy</li>
              <li>• User Research & Analysis</li>
              <li>• A/B Testing & Optimization</li>
              <li>• Agile & Scrum Methodologies</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Data & Analytics</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Statistical Analysis</li>
              <li>• Machine Learning</li>
              <li>• Data Visualization</li>
              <li>• Business Intelligence</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Engineering</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• CAD/CAM Design</li>
              <li>• Manufacturing Processes</li>
              <li>• Materials Engineering</li>
              <li>• Process Optimization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationSection;