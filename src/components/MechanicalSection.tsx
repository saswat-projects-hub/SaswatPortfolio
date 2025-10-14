import React from 'react';
import { Settings, Calendar, TrendingUp, Cog, Wrench, Book } from 'lucide-react';

const MechanicalSection: React.FC = () => {
  const internships = [
    {
      title: "Product Development Intern",
      company: "Podhikal Scientific Pvt. Ltd.",
      duration: "May '23 - July '23",
      achievements: [
        "Modeled and optimized the XY motion controller assembly in SolidWorks to minimize vibrations",
        "Prototyped the motion control unit using lightweight alloys, reducing weight by 12%",
        "Designed a micro-fluid cap geometry to regulate droplet size and spray angle for uniform thin-film coating"
      ]
    }
  ];

  const projects = [
    {
      title: "Warm Forming of Magnesium Alloys, Process Development",
      subtitle: "MTP-1",
      duration: "Aug '25 - Present",
      achievements: [
        "Delivered 20% higher process stability by engineering insulation setup and temperature calibration",
        "Observed 55% rise in formability through failure study at warm vs room temperature",
        "Identified 25% finer grains at warm forming through microstructure characterization",
        "Achieved 0.4 mm wall thickness of magnesium sheet using Single Point Incremental Forming"
      ]
    }
  ];

  const coursework = [
    {
      category: "Core",
      items: ["Fluid Mechanics", "Mechanics of Solids", "Heat Transfer", "Design of Machine Elements", "Metal Forming Processes", "Additive Manufacturing", "Applied Thermodynamics"]
    },
    {
      category: "Advanced",
      items: ["Computer Integrated Manufacturing", "Robotics", "Introduction to Hydrogen Energy and Utilization"]
    }
  ];

  const skills = [
    {
      category: "Design & Modeling Tools",
      items: ["SolidWorks", "AutoCAD", "Fusion 360", "NX CAD", "MATLAB", "Simulink"]
    },
    {
      category: "CAM & Manufacturing Tools",
      items: ["Mastercam", "Fusion 360 CAM", "NX CAM", "CNC Machining & Programming", "3D Printing", "Rapid Prototyping"]
    },
    {
      category: "Manufacturing & Materials Expertise",
      items: ["Metal Forming", "Failure Analysis", "Heat Treatment", "Material Behavior Analysis", "Microstructure Characterization"]
    },
    {
      category: "Automation & Robotics",
      items: ["PLC Programming", "Industrial Robots", "Robotic Path Planning"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mechanical Core</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expertise in design, manufacturing, material science, and process optimization with hands-on engineering experience
        </p>
      </div>

      {/* Internships */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Cog className="text-orange-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Internships</h2>
        </div>
        
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h3>
                  <p className="text-lg text-orange-600 font-semibold mb-1">{internship.company}</p>
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

      {/* Major Technical Projects */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Wrench className="text-orange-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Major Technical Projects</h2>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.subtitle}</p>
                </div>
                <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                  <Calendar size={18} className="mr-2" />
                  <span className="font-medium">{project.duration}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {project.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <Settings className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coursework Highlights */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Book className="text-orange-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Coursework Highlights</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {coursework.map((courseGroup, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{courseGroup.category}</h3>
              <div className="space-y-2">
                {courseGroup.items.map((course, courseIndex) => (
                  <div key={courseIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills and Expertise */}
      <section>
        <div className="flex items-center mb-8">
          <Settings className="text-orange-600 mr-3" size={28} />
          <h2 className="text-3xl font-bold text-gray-900">Skills and Expertise</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
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

export default MechanicalSection;