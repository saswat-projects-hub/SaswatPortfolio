import React from 'react';
import { Building, Calendar, TrendingUp, Award, Wrench, Target } from 'lucide-react';

const ProductManagementSection: React.FC = () => {
  const internships = [
    {
      title: "Product Management Intern",
      company: "InstaPrepsAI",
      type: "B2B & B2C, EdTech",
      duration: "June '25 - Present",
      achievements: [
        "Directed a 6-member team to launch a Student Admin Assessment platform in 9 days",
        "Drove 67% MAU growth (to 1,397) by developing a relaunch strategy to improve onboarding via behavioral analysis & A/B testing",
        "Accelerated product iteration by 67% using rapid prototyping with Lovable & Google AI Studio"
      ]
    },
    {
      title: "Product Management Intern",
      company: "Devlaunch",
      type: "B2B, SaaS",
      duration: "April '25 - July '25",
      achievements: [
        "Drove 5% DAU growth by integrating gamification (streaks & badges)",
        "Reduced bounce rate by 12% by conducting 37 user interviews and translating insights into PRDs",
        "Orchestrated 10% engagement growth by launching community forums and personalized event reminders"
      ]
    },
    {
      title: "Co-Founder and Product Head",
      company: "Nexorea",
      type: "AI Mental Wellness",
      duration: "May '25 - Present",
      achievements: [
        "Uncovered market need via 40+ interviews, reframing insights into an AI-first diary concept",
        "Drove 85% onboarding success with a mobile-first MVP and privacy-by-design UX",
        "Achieved 25% higher retention by engineering conversational AI with 5 emotional personas"
      ]
    },
    {
      title: "Product Management Intern",
      company: "Habuild",
      type: "B2C, Health-Tech",
      duration: "Aug '24 - Nov '24",
      achievements: [
        "Increased attendance by 19% within 3 months by launching 'Yoga Together' and 'Pause My Subscription' features"
      ]
    }
  ];

  const projects = [
    {
      title: "Artisanal Marketplace",
      subtitle: "BTP-1",
      achievements: [
        "Conducted market research with 167 artists and 253 consumers to identify key challenges",
        "Designed a scalable revenue model with four streams, projected to increase artist income by 20%",
        "Built an admin platform with six tools, enhancing artist efficiency by 25%"
      ]
    }
  ];

  const competitions = [
    {
      title: "Tata Elxsi TELIPORT",
      achievement: "Campus Winner",
      description: "Designed a navigation product concept, enhancing accuracy by 27%"
    },
    {
      title: "Top PM Fellow @NextLeap (Zomato)",
      description: "Projected a 24% increase in detailed reviews through impactful UI design enhancements"
    }
  ];

  const skills = [
    {
      category: "Product Management",
      items: ["Figma", "Balsamiq", "Notion", "Confluence", "JIRA", "User Research", "A/B Testing"]
    },
    {
      category: "Frameworks",
      items: ["RICE", "AARRR", "HEART", "MOSCOW", "CIRCLE", "Scrum", "Kanban", "OKRs", "Jobs to Be Done", "Kano Model", "Lean Startup"]
    },
    {
      category: "Analytics",
      items: ["SQL", "MS Excel", "Clevertap", "Amplitude", "Tableau", "Power BI"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Management</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Strategic product leadership with proven track record of driving user growth, improving engagement, and launching successful products
        </p>
      </div>

      {/* Internships & Entrepreneurial Experiences */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Building className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Internships & Entrepreneurial Experiences</h2>
        </div>
        
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-1">{internship.company}</p>
                  <p className="text-gray-600 mb-2">{internship.type}</p>
                </div>
                <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                  <Calendar size={18} className="mr-2" />
                  <span className="font-medium">{internship.duration}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {internship.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <TrendingUp className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Wrench className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.subtitle}</p>
              
              <div className="space-y-3">
                {project.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <Target className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competitions & Achievements */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Award className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Competitions & Achievements</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {competitions.map((competition, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{competition.title}</h3>
              {competition.achievement && (
                <p className="text-orange-600 font-semibold mb-2">{competition.achievement}</p>
              )}
              <p className="text-gray-700">{competition.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills and Expertise */}
      <section>
        <div className="flex items-center mb-8">
          <Target className="text-blue-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Skills and Expertise</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductManagementSection;