'use client'

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Briefcase, Calendar, Code, Linkedin, Mail, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import Link from "next/link";
import Github from '../../../public/imgs/github.svg';
import LanguageSwitcher from "../components/includes/language-switcher";
import { Projects } from "../components/includes/projects/projects";

export default function Component() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-green-500" />
            <span className="text-xl font-bold">JBQNeto</span>
          </div>
          <nav className="flex items-center">
            <ul className="flex space-x-4 mr-4">
              <li><Link href="#about" className="hover:text-green-500 transition-colors">{t('title.about')}</Link></li>
              <li><Link href="#skills" className="hover:text-green-500 transition-colors">{t('title.skills')}</Link></li>
              <li><Link href="#timeline" className="hover:text-green-500 transition-colors">{t('title.timeline')}</Link></li>
              <li><Link href="#projects" className="hover:text-green-500 transition-colors">{t('title.projects')}</Link></li>
              <li><Link href="#contact" className="hover:text-green-500 transition-colors">{t('title.contact')}</Link></li>
            </ul>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{t('title.greeting', { name: 'José Neto' })}</h1>
            <p className="text-xl mb-8">{t('title.role')}</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                {t('title.viewResume')}
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                {t('title.myBlog')}
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Java", "JavaScript", "Spring", "TypeScript", "Angular", "Docker", "React*", "GraphQL*", "Node.js*"].map((skill) => (
                <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  <Code className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Work Timeline</h2>
            <div className="space-y-8">
              {[
                {
                  company: "SPICE-P (Swiss Post Group)",
                  role: "Senior Java Developer (Spring + Angular + Camunda)",
                  period: "2024 - Present",
                  technologies: ["Java", "Spring", "Hibernate", "Angular", "Camunda"]
                },
                {
                  company: "Digital Solutions Ltd.",
                  role: "Full-stack Developer (Spring + Angular)",
                  period: "2023 - 2024",
                  technologies: ["Java", "Spring", "Hibernate", "Angular", "Docker"]
                },
                {
                  company: "Construo AG",
                  role: "Full-stack Developer (Front-end focused)",
                  period: "2022 - 2023",
                  technologies: ["Angular", "RXJS", "NodeJS"]
                }
              ].map((job, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="text-gray-400">{job.role}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{job.period}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Name" className="bg-gray-700 border-gray-600" />
                <Input type="email" placeholder="Email" className="bg-gray-700 border-gray-600" />
                <Textarea placeholder="Message" className="bg-gray-700 border-gray-600" />
                <Button className="w-full bg-green-500 hover:bg-green-600">Send Message</Button>
              </form>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="https://github.com/jbqneto" target="_blank" className="text-gray-400 hover:text-white">
                <Image alt="github" src={Github} className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/jbqneto" target="_blank" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} José Bezerra de Queiroz Neto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}