import { 
  Brain,
  Bot,
  FileCode,
  Sparkles,
  Code2,
  Database,
  Cloud,
  Terminal,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Award,
  ExternalLink,
  Shield
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">Malinidevi Selvaraj</h1>
            <p className="text-2xl font-semibold text-indigo-400 mb-4">GenAI & Python Engineer</p>
            <p className="text-xl text-slate-300 mb-8">
              Specialized in Generative AI, Large Language Models and Django Development
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <a href="mailto:malinidevi.selvaraj@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-indigo-400">
                <Mail size={20} />
                <span>malinidevi.selvaraj@gmail.com</span>
              </a>
              <a href="tel:+918778190493" className="flex items-center gap-2 text-slate-300 hover:text-indigo-400">
                <Phone size={20} />
                <span>+91 8778190493</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={20} />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/smalinidevi/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-400">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/smalinidevi/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-400">
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://img.freepik.com/premium-photo/vibrant-futuristic-design-centered-around-concept-artificial-intelligence-ai_1272475-12736.jpg" 
              alt="AI Code" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="bg-gradient-to-br from-indigo-950/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-indigo-900/30 p-6 rounded-lg backdrop-blur-sm">
              <Brain className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Generative AI</h3>
              <p className="text-slate-300">Expert in LLMs, RAG, and AI application development</p>
            </div>
            <div className="bg-indigo-900/30 p-6 rounded-lg backdrop-blur-sm">
              <Code2 className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Python Development</h3>
              <p className="text-slate-300">Advanced Python programming and optimization</p>
            </div>
            <div className="bg-indigo-900/30 p-6 rounded-lg backdrop-blur-sm">
              <FileCode className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Django & DRF</h3>
              <p className="text-slate-300">Full-stack web development with Django ecosystem</p>
            </div>
            <div className="bg-indigo-900/30 p-6 rounded-lg backdrop-blur-sm">
              <Sparkles className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">LLM Integration</h3>
              <p className="text-slate-300">Custom LLM solutions and API implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          
          <div className="grid gap-8">
            <div className="bg-indigo-900/30 rounded-lg p-6 hover:bg-indigo-900/40 transition backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Junior Software Engineer-FSE</h3>
              <p className="text-indigo-400 mb-4">Cognizant Technology Solutions | Nov 2023 - Present</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Developed advanced AI chatbots using RAG architecture and FAISS vector database</li>
                <li>Implemented custom LLM solutions for document analysis and information retrieval</li>
                <li>Built secure Django REST APIs with role-based access control</li>
                <li>Researched and integrated various AI code assistants for development optimization</li>
                <li>Led AI feature development in Agile sprints</li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 rounded-lg p-6 hover:bg-indigo-900/40 transition backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Software Engineer Trainee</h3>
              <p className="text-indigo-400 mb-4">Cognizant Technology Solutions | Nov 2022 - Oct 2023</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Built scalable Django applications with advanced ORM optimizations</li>
                <li>Implemented JWT authentication and 2FA security features</li>
                <li>Developed RESTful APIs using Django REST Framework</li>
                <li>Maintained high-performance Python applications</li>
              </ul>
            </div>

            <div className="bg-indigo-900/30 rounded-lg p-6 hover:bg-indigo-900/40 transition backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Internship-Programmer Analyst</h3>
              <p className="text-indigo-400 mb-4">Cognizant Technology Solutions | Jan 2022 - Jul 2022</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Explored NLP and deep learning frameworks for AI applications</li>
                <li>Created Python automation scripts for workflow optimization</li>
                <li>Gained hands-on experience with ML model development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gradient-to-br from-indigo-950/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured AI Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <Bot className="text-indigo-400" size={32} />
                <a 
                  href="https://github.com/smalinidevi/RAGifyChat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                >
                  <Github size={20} />
                  <ExternalLink size={16} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced RAG Chatbot</h3>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Implemented RAG architecture with FAISS for efficient retrieval</li>
                <li>Developed real-time document processing pipeline</li>
                <li>Integrated custom LLM prompts for enhanced responses</li>
                <li>Built with Python, Streamlit, and vector databases</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <Shield className="text-green-400" size={32} />
                <a 
                  href="https://github.com/smalinidevi/Secure-File-Sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                >
                  <Github size={20} />
                  <ExternalLink size={16} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure File Sharing Application</h3>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Built secure platform with React, Redux, and Django</li>
                <li>Implemented 2FA with Google Authenticator</li>
                <li>Added SSL/TLS security for HTTPS traffic</li>
                <li>Developed secure API endpoints for file management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <Cloud className="text-blue-400" size={32} />
                <a 
                  href="https://github.com/smalinidevi/LLM-Powered-Translator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                >
                  <Github size={20} />
                  <ExternalLink size={16} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">LLM-Powered Translator</h3>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Leveraged Google Cloud Vertex AI for translations</li>
                <li>Built custom prompt engineering pipeline</li>
                <li>Implemented intelligent text processing</li>
                <li>Created Django backend for API management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
              <div className="grid gap-4">
                <div className="flex items-center gap-4 bg-indigo-900/30 p-4 rounded backdrop-blur-sm">
                  <Brain size={24} className="text-indigo-400" />
                  <span>LLMs, RAG, Prompt Engineering, Vector DBs</span>
                </div>
                <div className="flex items-center gap-4 bg-indigo-900/30 p-4 rounded backdrop-blur-sm">
                  <Code2 size={24} className="text-purple-400" />
                  <span>Python, Django, FastAPI, Streamlit</span>
                </div>
                <div className="flex items-center gap-4 bg-indigo-900/30 p-4 rounded backdrop-blur-sm">
                  <Database size={24} className="text-yellow-400" />
                  <span>FAISS, Vector Databases</span>
                </div>
                <div className="flex items-center gap-4 bg-indigo-900/30 p-4 rounded backdrop-blur-sm">
                  <Cloud size={24} className="text-blue-400" />
                  <span>GCP Vertex AI, OpenAI, Hugging Face</span>
                </div>
                <div className="flex items-center gap-4 bg-indigo-900/30 p-4 rounded backdrop-blur-sm">
                  <Terminal size={24} className="text-red-400" />
                  <span>Git, Docker, Agile</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Awards & Certifications</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-indigo-900/30 p-4 rounded backdrop-blur-sm">
                  <Award size={24} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">GenAI Maestro Award</h3>
                    <p className="text-slate-300">Recognition for excellence in AI application development</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-indigo-900/30 p-4 rounded backdrop-blur-sm">
                  <FileText size={24} className="text-indigo-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Professional Certifications</h3>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Cognizant Certified: Advanced Prompt Engineer</li>
                      <li>• Google Cloud Certified: Cloud Digital Leader</li>
                      <li>• Microsoft Certified: Azure AI Fundamentals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 | Malinidevi Selvaraj | GenAI & Python Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;