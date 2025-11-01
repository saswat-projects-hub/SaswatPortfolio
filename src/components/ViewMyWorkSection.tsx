import React, { useState } from 'react';
import ShootingStarsBackground from './ShootingStarsBackground';
import { Building, Calendar, TrendingUp, Award, Wrench, Users, ChevronLeft, Target } from 'lucide-react';

interface ViewMyWorkSectionProps {
  setActiveTab: (tab: string) => void;
}

const ViewMyWorkSection: React.FC<ViewMyWorkSectionProps> = ({ setActiveTab }) => {
  const [activeTab, setActiveTabState] = useState<'entrepreneurial' | 'internships' | 'projects' | 'leadership'>('entrepreneurial');

  // Entrepreneurial Experiences
  const entrepreneurialExperiences = [
    {
      title: "Co-Founder and Product Head",
      company: "Nexorea",
      link: "https://nexorea.com/",
      type: "AI Mental Wellness",
      duration: "May '25 - Present",
      category: "Product Management",
      achievements: [
        "Uncovered market need via 40+ interviews, reframing insights into an AI-first diary concept",
        "Drove 85% onboarding success with a mobile-first MVP and privacy-by-design UX",
        "Achieved 25% higher retention by engineering conversational AI with 5 emotional personas"
      ]
    }
  ];

  // All Internships (Product Management, Data Analytics, Mechanical)
  const internships = [
    {
      title: "Product Management Intern",
      company: "InstaPrepsAI",
      type: "B2B & B2C, EdTech",
      duration: "June '25 - Present",
      category: "Product Management",
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
      category: "Product Management",
      achievements: [
        "Drove 5% DAU growth by integrating gamification (streaks & badges)",
        "Reduced bounce rate by 12% by conducting 37 user interviews and translating insights into PRDs",
        "Orchestrated 10% engagement growth by launching community forums and personalized event reminders"
      ]
    },
    {
      title: "Product Management Intern",
      company: "Habuild",
      type: "B2C, Health-Tech",
      duration: "Aug '24 - Nov '24",
      category: "Product Management",
      achievements: [
        "Increased attendance by 19% within 3 months by launching 'Yoga Together' and 'Pause My Subscription' features"
      ]
    },
    {
      title: "Product Analyst Intern",
      company: "InstaPrepsAI",
      type: "EdTech",
      duration: "June '25 - Present",
      category: "Data Analytics",
      achievements: [
        "Built KPI dashboards and conducted SQL-based analysis on 5k+ records to drive the launch of the Student Admin Assessment platform",
        "Improved onboarding activation 18% by performing cohort and funnel analysis on 3k+ users"
      ]
    },
    {
      title: "Data Analyst and Strategic Intern",
      company: "Vecmocon Technologies",
      type: "EV Technology",
      duration: "May '24 - July '24",
      category: "Data Analytics",
      achievements: [
        "Engineered Random Forest model on 50k+ IoT and BMS datapoints, cutting 3W-EV leasing income uncertainty by 35%",
        "Boosted route classification accuracy 27% by analyzing vehicle travel data with OpenStreetMap"
      ]
    },
    {
      title: "Product Development Intern",
      company: "Podhikal Scientific Pvt. Ltd.",
      type: "Manufacturing",
      duration: "May '23 - July '23",
      category: "Mechanical Engineering",
      achievements: [
        "Modeled and optimized the XY motion controller assembly in SolidWorks to minimize vibrations",
        "Prototyped the motion control unit using lightweight alloys, reducing weight by 12%",
        "Designed a micro-fluid cap geometry to regulate droplet size and spray angle for uniform thin-film coating"
      ]
    }
  ];

  // All Projects
  const projects = [
    {
      title: "Artisanal Marketplace",
      subtitle: "BTP-1 - Product Management",
      category: "Product Management",
      achievements: [
        "Conducted market research with 167 artists and 253 consumers to identify key challenges",
        "Designed a scalable revenue model with four streams, projected to increase artist income by 20%",
        "Built an admin platform with six tools, enhancing artist efficiency by 25%"
      ]
    },
    {
      title: "AtliQ Hotels Revenue Optimization",
      subtitle: "Data Analytics Project",
      category: "Data Analytics",
      achievements: [
        "Constructed 6 predictive forecasting models achieving 85% accuracy",
        "Identified a critical 22.2 percentage point weekend-to-weekday performance gap",
        "Engineered dynamic pricing where a 15% discount lifted Standard occupancy by 7.3%"
      ]
    },
    {
      title: "Vendor Performance & Profitability Analysis",
      subtitle: "Data Analytics Project",
      category: "Data Analytics",
      achievements: [
        "Examined 10k+ sales and inventory records",
        "Achieved a 72% reduction in unit cost through regression-based bulk purchase analysis",
        "Identified $2.71M in slow-moving inventory and a 65.69% over-reliance on top vendors"
      ]
    },
    {
      title: "Credit Card Fraud Detection",
      subtitle: "Machine Learning Project",
      category: "Data Analytics",
      achievements: [
        "Achieved 81.05% accuracy with a Random Forest model",
        "Secured 86.08% F1 score by resolving data imbalance with Random Under Sampling, enhancing model accuracy by 26%"
      ]
    },
    {
      title: "Warm Forming of Magnesium Alloys, Process Development",
      subtitle: "MTP-1 - Mechanical Engineering",
      category: "Mechanical Engineering",
      duration: "Aug '25 - Present",
      achievements: [
        "Delivered 20% higher process stability by engineering insulation setup and temperature calibration",
        "Observed 55% rise in formability through failure study at warm vs room temperature",
        "Identified 25% finer grains at warm forming through microstructure characterization",
        "Achieved 0.4 mm wall thickness of magnesium sheet using Single Point Incremental Forming"
      ]
    }
  ];

  // Leadership & Positions of Responsibility
  const leadership = [
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

  const renderContent = () => {
    switch (activeTab) {
      case 'entrepreneurial':
        return (
          <div className="space-y-8">
            {entrepreneurialExperiences.map((exp, index) => (
              <div key={index} className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 p-8 hover:bg-white/20 dark:hover:bg-black/30 hover:border-purple-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1 underline hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{exp.company}</p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{exp.type}</p>
                    <span className="inline-block px-3 py-1 bg-purple-100/80 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                      {exp.category}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <TrendingUp className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'internships':
        return (
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 p-8 hover:bg-white/20 dark:hover:bg-black/30 hover:border-blue-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{internship.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{internship.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{internship.type}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                      {internship.category}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{internship.duration}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {internship.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <TrendingUp className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 p-8 hover:bg-white/20 dark:hover:bg-black/30 hover:border-teal-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{project.subtitle}</p>
                  <span className="inline-block px-3 py-1 bg-teal-100/80 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  {project.duration && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{project.duration}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <Target className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'leadership':
        return (
          <div className="space-y-6">
            {leadership.map((position, index) => (
              <div key={index} className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 p-8 hover:bg-white/20 dark:hover:bg-black/30 hover:border-purple-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{position.title}</h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-1">{position.organization}</p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    <span className="font-medium">{position.duration}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {position.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <Users className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-hidden">
      <ShootingStarsBackground starCount={50} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 glass-button px-4 py-2 rounded-lg"
        >
          <ChevronLeft size={20} />
          <span className="inter-font font-medium">Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 geist-font">
            My <span className="gradient-text">Professional Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto inter-font">
            A comprehensive view of my entrepreneurial ventures, internships, projects, and leadership experiences
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTabState('entrepreneurial')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'entrepreneurial'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'glass-button text-foreground hover:bg-white/20 dark:hover:bg-black/30'
            }`}
          >
            <Award size={20} />
            Entrepreneurial
          </button>
          <button
            onClick={() => setActiveTabState('internships')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'internships'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'glass-button text-foreground hover:bg-white/20 dark:hover:bg-black/30'
            }`}
          >
            <Building size={20} />
            Internships
          </button>
          <button
            onClick={() => setActiveTabState('projects')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'glass-button text-foreground hover:bg-white/20 dark:hover:bg-black/30'
            }`}
          >
            <Wrench size={20} />
            Projects
          </button>
          <button
            onClick={() => setActiveTabState('leadership')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'leadership'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'glass-button text-foreground hover:bg-white/20 dark:hover:bg-black/30'
            }`}
          >
            <Users size={20} />
            Leadership
          </button>
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ViewMyWorkSection;

