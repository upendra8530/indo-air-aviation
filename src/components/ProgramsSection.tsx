import cabinCrewImage from "@/assets/cabin-crew-training.jpg";
import groundServicesImage from "@/assets/ground-services.jpg";
import aviationManagementImage from "@/assets/aviation-management.jpg";
import customerServiceImage from "@/assets/customer-service-training.jpg";
import pilotTrainingImage from "@/assets/pilot-training.jpg";
import aviationSecurityImage from "@/assets/aviation-security.jpg";

const programs = [
  {
    title: "Aviation Management",
    description: "Comprehensive program covering airport operations, airline management, and aviation business strategies.",
    duration: "12 Months",
    image: aviationManagementImage,
    features: ["Airport Operations", "Airline Economics", "Aviation Safety", "Leadership Skills"]
  },
  {
    title: "Cabin Crew Training",
    description: "Professional training for flight attendants covering safety procedures, customer service, and emergency protocols.",
    duration: "6 Months",
    image: cabinCrewImage,
    features: ["Safety Procedures", "First Aid Training", "Customer Service", "Emergency Response"]
  },
  {
    title: "Ground Services Training",
    description: "Specialized training for airport ground operations including baggage handling, aircraft marshalling, and cargo operations.",
    duration: "4 Months",
    image: groundServicesImage,
    features: ["Aircraft Handling", "Cargo Operations", "Safety Protocols", "Equipment Training"]
  },
  {
    title: "Customer Service Training",
    description: "Essential skills for aviation customer service including communication, problem-solving, and cultural awareness.",
    duration: "3 Months",
    image: customerServiceImage,
    features: ["Communication Skills", "Problem Solving", "Cultural Awareness", "Service Excellence"]
  },
  {
    title: "Pilot Training",
    description: "Professional pilot training from private pilot license to airline transport pilot license with flight simulators.",
    duration: "18 Months",
    image: pilotTrainingImage,
    features: ["Flight Theory", "Simulator Training", "Navigation", "Aviation Weather"]
  },
  {
    title: "Aviation Security",
    description: "Comprehensive security training covering aviation security protocols, threat assessment, and emergency procedures.",
    duration: "5 Months",
    image: aviationSecurityImage,
    features: ["Security Protocols", "Threat Assessment", "Emergency Response", "Legal Compliance"]
  }
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-background ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-gradient">Training Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive aviation training programs designed to prepare you for success 
            in the dynamic aviation industry with hands-on experience and industry-relevant curriculum.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="program-card group stagger-animation">
              {program.image && (
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={program.image}
                    alt={`${program.title} training session`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="mb-4 program-card-content transition-transform duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[12px] whitespace-nowrap font-semibold">
                    {program.duration}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <button className="w-full bg-primary/5 hover:bg-primary hover:text-primary-foreground text-primary font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-md">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;