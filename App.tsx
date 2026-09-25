import React from 'react';
import { 
  Linkedin, 
  FileText, 
  Globe, 
  Mail, 
  Users, 
  Briefcase, 
  Zap, 
  Layout, 
  HeartHandshake,
  Contact
} from 'lucide-react';
import { Badge } from './components/Badge';
import { SocialButton } from './components/SocialButton';
import { Card } from './components/Card';
import { Achievement } from './types';

const achievements: Achievement[] = [
  {
    organization: "Intersystems CVC",
    title: "Healthtech Pipeline & Brand",
    description: "Built a robust pipeline and brand among Healthtech founders, establishing a strong presence in the ecosystem."
  },
  {
    organization: "Launch Club Capital",
    title: "Community Growth",
    description: "Grew the community to 300+ members who actively support each other, fostering a culture of collaboration."
  },
  {
    organization: "Ultra.VC",
    title: "Accelerator Program",
    description: "Ran an Accelerator program connecting founders to industry experts, talent, clients, and investors."
  }
];

export default function App() {
  // Replace this URL with your actual profile picture URL
  const avatar = "https://www.dropbox.com/scl/fi/9c4y7kfj6fqbei4q8j86d/My-image.png?rlkey=vbx3ctc58mcu81nz7mtwgqodj&st=fcupxhot&raw=1";

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Kateryna Golushko
N:Golushko;Kateryna;;;
TITLE:Ecosystem & Portfolio | VC Platform
ORG:Intersystems CVC;Launch Club Capital;Ultra.VC
EMAIL:katerynagolushko@gmail.com
URL:https://www.linkedin.com/in/kateryna-golushko-733a36224/
NOTE:I help founders get connected to the right people.
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kateryna_Golushko.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-3xl w-full space-y-8">
        
        {/* Header Section */}
        <header className="text-center space-y-6 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white shadow-lg overflow-hidden bg-slate-200">
               <img 
                 src={avatar} 
                 alt="Kateryna Golushko" 
                 className="w-full h-full object-cover"
               />
            </div>
            
            <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[3px] border-white shadow-sm pointer-events-none" title="Open to collaborate"></div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Kateryna Golushko</h1>
            <p className="text-slate-600 font-medium text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Ecosystem & Portfolio • Community & Events • VC Platform • Partnerships
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
             <Badge>Venture Building</Badge>
             <Badge>Community Growth</Badge>
             <Badge>Deal Flow</Badge>
             <Badge>Founder Support</Badge>
          </div>
        </header>

        {/* Bio Section */}
        <section className="animate-fade-in-up delay-100">
          <Card>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                Hi! My Name is <span className="font-semibold text-slate-900">Kateryna</span> and I help founders get connected to the right people. 
                I run initiatives, grow communities, organize events, and make introductions.
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed">
                I understand venture building and what makes founders exceptional through my time in VC, and I want to dedicate my life working for the good of ambitious founders changing the world.
              </p>
            </div>
          </Card>
        </section>

        {/* Primary Actions Section (Moved from bottom) */}
        <section className="animate-fade-in-up delay-100">
          <div className="grid gap-4 sm:grid-cols-2">
            <SocialButton 
              href="https://www.linkedin.com/in/kateryna-golushko-733a36224/"
              label="Connect on LinkedIn"
              icon={<Linkedin className="w-5 h-5 text-[#0077b5]" />}
              primary={false}
            />
            <SocialButton 
              href="https://www.dropbox.com/scl/fi/uvalp4h72lzuxyh8su409/Kateryna-Golushko-CV-_.pdf?rlkey=qrl7v673iutptyzvg4elf4m64&st=ii9soxuq&dl=1"
              label="Download My CV"
              icon={<FileText className="w-5 h-5 text-red-500" />}
              primary={false}
            />
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="animate-fade-in-up delay-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 px-1">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            Success Stories
          </h2>
          <div className="grid gap-4 sm:grid-cols-1">
            {achievements.map((item, index) => (
              <Card key={index} className="hover:border-indigo-200 group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-100 transition-colors shrink-0">
                    {index === 0 && <HeartHandshake className="w-6 h-6" />}
                    {index === 1 && <Users className="w-6 h-6" />}
                    {index === 2 && <Zap className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900 text-lg">{item.title}</h3>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="text-sm font-medium text-indigo-600">{item.organization}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="animate-fade-in-up delay-300">
           <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 px-1">
            <Layout className="w-5 h-5 text-indigo-600" />
            Side Projects
          </h2>
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-lg overflow-hidden relative group">
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
             
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <h3 className="text-xl font-bold text-white">Network House</h3>
                       <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500 text-white uppercase tracking-wider">MVP</span>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md">
                      A place where founders can systematically collaborate with relevant people to solve problems for their startup.
                    </p>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <a 
                  href="https://networkhouse.base44.app/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors mt-2"
                >
                  Visit Project <ArrowRight className="w-4 h-4" />
                </a>
             </div>
          </Card>
        </section>

        {/* Links & CTA Section */}
        <section className="space-y-6 animate-fade-in-up delay-300 pb-12">
          <div className="text-center py-4">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Let's Collab!</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Always looking to organize cool events and create initiatives for founders!
            </p>
          </div>
          
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2">
            <a href="mailto:katerynagolushko@gmail.com" className="group flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm">
               <Mail className="w-4 h-4" />
               <span>Get in touch via Email</span>
            </a>
            <button onClick={handleSaveContact} className="group flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm">
               <Contact className="w-4 h-4" />
               <span>Save Contact Info</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}

// Simple arrow component for the project card link
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
