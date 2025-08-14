
import { Button } from "@/components/ui/button";

const AdmissionsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to <span className="text-gradient">Take Flight?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your aviation career journey with Indo Air Aviation Academy. 
            Join thousands of successful graduates who have transformed their passion into profession.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Admission Process</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Application Submission</h4>
                  <p className="text-muted-foreground">Complete our online application form with your personal details, educational background, and program preference.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Document Verification</h4>
                  <p className="text-muted-foreground">Submit required documents including educational certificates, identity proof, and medical fitness certificate.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Entrance Assessment</h4>
                  <p className="text-muted-foreground">Attend our entrance assessment including aptitude test and personal interview to evaluate your suitability.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Enrollment Confirmation</h4>
                  <p className="text-muted-foreground">Upon successful assessment, complete your enrollment by paying the course fees and joining orientation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Start Your Application</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Program of Interest</label>
                <select className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Select a program</option>
                  <option>Aviation Management</option>
                  <option>Cabin Crew Training</option>
                  <option>Ground Services Training</option>
                  <option>Customer Service Training</option>
                  <option>Pilot Training</option>
                  <option>Aviation Security</option>
                </select>
              </div>
              
              <Button className="w-full btn-hero">
                Submit Application
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Need help? Contact our admissions team at{" "}
                <a href="tel:+91-9876543210" className="text-primary font-semibold hover:underline">
                  +91-9876543210
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Requirements Section */}
        <div className="mt-20 bg-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Admission Requirements</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Educational Qualification</h4>
              <p className="text-muted-foreground">Minimum 12th grade or equivalent from a recognized board</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Age Requirements</h4>
              <p className="text-muted-foreground">Between 18-28 years for most programs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Medical Fitness</h4>
              <p className="text-muted-foreground">Valid medical certificate from authorized medical examiner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
