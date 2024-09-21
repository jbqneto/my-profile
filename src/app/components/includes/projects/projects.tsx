import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Github from '../../../../../public/imgs/github.svg';

export type Project = {
    id: number;
    name: string;
    description: string;
    link: string;
};

export function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

    return (
        <>
            {projects.length > 0 && (
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                <img src={`/imgs/placeholder.svg?height=200&width=400`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <Link href={project.link} className="text-green-500 hover:underline">View Project</Link>
                                        <Image alt="github" src={Github} className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}