'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Award,
  GraduationCap,
  FolderOpen,
  Zap,
  BarChart3,
  MessageCircle,
  Send,
  Mail,
  LayoutGrid,
  FileSpreadsheet,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-8 h-8 text-emerald-600" />
              <span className={`text-xl font-bold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Ade Ramdani</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-emerald-600 font-medium transition-colors`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-emerald-600 font-medium transition-colors`}
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-emerald-600 font-medium transition-colors`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-emerald-600 font-medium transition-colors`}
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isScrolled ? 'hover:bg-slate-100' : 'hover:bg-slate-700'} transition-colors`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-slate-700 hover:text-emerald-600 font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('certifications')}
                  className="text-left text-slate-700 hover:text-emerald-600 font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-left text-slate-700 hover:text-emerald-600 font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-slate-700 hover:text-emerald-600 font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  About
                </button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white mx-4"
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 pt-20 overflow-hidden">
        {/* Decorative Spreadsheet Icon */}
        <div className="absolute top-1/4 right-10 opacity-10 lg:right-20">
          <FileSpreadsheet className="w-96 h-96 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Excel Solutions
              <br />
              for Your Business
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Automate boring tasks, visualize data, and master Excel with Ade Ramdani. Transform your data
              into actionable insights today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-base px-6 py-3 h-auto"
              >
                Start Consultation
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                className="bg-transparent border-2 border-emerald-600 text-emerald-500 hover:bg-emerald-600 hover:text-white text-base px-6 py-3 h-auto"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-slate-700" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5+ Years</div>
              <div className="text-slate-600 font-medium">Experience</div>
            </div>

            {/* MOS Certified */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-emerald-700" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">MOS</div>
              <div className="text-slate-600 font-medium">Certified Expert</div>
            </div>

            {/* Projects */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <FolderOpen className="w-8 h-8 text-slate-700" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100+</div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Recognized excellence in Microsoft Office applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Excel Expert Certificate */}
            <a
              href="/certificates/excel-expert.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <Card className="h-full border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src="/certificates/excel-associate.png"
                        alt="MOS Excel Expert Badge"
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 mb-1">
                        Microsoft Office Specialist
                      </CardTitle>
                      <CardDescription className="text-base text-emerald-700 font-medium">
                        Excel Expert
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-sm text-slate-600">Microsoft 365 Apps</div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Badge className="bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    View Certificate
                  </Badge>
                </CardFooter>
              </Card>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="text-white text-center p-6">
                  <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-lg font-semibold">Click to View PDF Certificate</span>
                </div>
              </div>
            </a>

            {/* Word Expert Certificate */}
            <a
              href="/certificates/word-expert.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <Card className="h-full border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src="/certificates/word-expert.png"
                        alt="MOS Word Expert Badge"
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 mb-1">
                        Microsoft Office Specialist
                      </CardTitle>
                      <CardDescription className="text-base text-emerald-700 font-medium">
                        Word Expert
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-sm text-slate-600">Microsoft 365 Apps</div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Badge className="bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    View Certificate
                  </Badge>
                </CardFooter>
              </Card>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="text-white text-center p-6">
                  <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-lg font-semibold">Click to View PDF Certificate</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Excel Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From automation to training, I provide comprehensive Excel solutions tailored to your business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Automation & VBA */}
            <Card className="border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-emerald-700" />
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">Automation & VBA</CardTitle>
                <CardDescription className="text-slate-600">
                  Custom macros to save time and streamline your workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Custom VBA macros',
                    'Process automation',
                    'Excel add-ins development',
                    'Time-saving solutions',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Data Analysis */}
            <Card className="border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-emerald-700" />
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">Data Analysis</CardTitle>
                <CardDescription className="text-slate-600">
                  Power Query & Interactive Dashboards for better insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Power Query transformations',
                    'Interactive dashboards',
                    'Data visualization',
                    'Business intelligence',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Excel Training */}
            <Card className="border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-emerald-700" />
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">Excel Training</CardTitle>
                <CardDescription className="text-slate-600">
                  Corporate and private Excel courses for all skill levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Corporate training programs',
                    'Private tutoring',
                    'Custom curriculum',
                    'Ongoing support',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Projects</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore some of my recent Excel solutions and dashboard projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Sales Dashboard', description: 'Real-time sales analytics with KPI tracking' },
              { id: 2, title: 'Financial Reports', description: 'Automated financial statement generation' },
              { id: 3, title: 'Project Tracker', description: 'Gantt charts and milestone tracking' },
              { id: 4, title: 'Inventory System', description: 'Stock management and forecasting' },
              { id: 5, title: 'HR Analytics', description: 'Employee performance metrics' },
              { id: 6, title: 'Data Automation', description: 'VBA-powered data processing' },
            ].map((project) => (
              <Card
                key={project.id}
                className="border-2 border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <img
                    src={`/images/project-${project.id}.png`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="text-emerald-700">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Ade Ramdani</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                I'm a passionate Microsoft Excel expert with over 5 years of experience in helping businesses
                optimize their data processes and unlock full potential of spreadsheet automation.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                As a Microsoft Office Specialist (MOS) Certified Expert, I bring technical excellence and
                practical solutions to every project. Whether it's building complex VBA macros, creating
                interactive dashboards, or training teams, my goal is to save you time and improve efficiency.
              </p>
              <ul className="space-y-4">
                {[
                  'MOS Certified Excel Expert',
                  'VBA & Automation Specialist',
                  'Experienced Corporate Trainer',
                ].map((credential, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-700 text-sm font-semibold">✓</span>
                    </span>
                    <span className="text-lg">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo Column */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-slate-700 rounded-2xl rotate-3"></div>

                {/* Photo Frame */}
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="relative">
                    <img
                      src="/ade-ramdani.png?v=2"
                      alt="Ade Ramdani - Microsoft Excel Expert"
                      className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA/Footer Section */}
      <footer id="contact" className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* CTA Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Workflow?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Let's discuss how I can help transform your Excel processes and save you valuable time
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281318406678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact via WhatsApp</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/aderamdani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>Contact via Telegram</span>
            </a>

            {/* Email */}
            <a
              href="mailto:mr.aderamdani@gmail.com"
              className="inline-flex items-center justify-center gap-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-400 text-sm">
                © 2025 Ade Ramdani. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm">aderamdani.web.id</span>
                <FileSpreadsheet className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
