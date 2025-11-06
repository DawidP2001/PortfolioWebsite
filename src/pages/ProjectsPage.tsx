import { motion } from "framer-motion";
import { useEffect } from "react";
import Button from "../components/Button";
import ProjectThumbnail from "../components/Cards/ProjectThumbnail";
import SectionTitle from "../components/SectionTitle";
import Tag from "../components/Tag";
import { allProjects } from "../data/constants";

interface ProjectPageProps {
  className?: string;
  setSelectedProject: (project: string) => void;
  selectedProject: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({className, setSelectedProject, selectedProject}) => {
    const selectedProjectData = allProjects.find(project => project.name === selectedProject);
    
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <div className={"mt-10 project-page min-h-screen bg-[var(--dominant-colour)]" + className}>
            <SectionTitle title="Projects" className=""/>
            {selectedProjectData &&
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 shadow-lg m-2 rounded-lg bg-white"
            >
                <img 
                    src={selectedProjectData?.imgSrc}
                    alt="Project Image" 
                    className="mx-auto py-4 rounded-lg px-4"
                />
                <div className="mx-4 text-colour">
                    <div className="flex flex-wrap justify-left gap-1">
                        {selectedProjectData?.technologies.map((tech, index) => (
                            <Tag key={index} text={tech} className=""/>
                        ))}
                    </div>
                    <h2 className="font-semibold text-2xl text-left text-gray-800 pt-4 ">{selectedProjectData?.name}</h2>
                    <p className="text-left text-gray-600 pb-4">{selectedProjectData?.description}</p>
                    <div className="flex gap-1 pb-2">
                        {selectedProjectData?.links.github && (
                            <Button 
                                label="Github" 
                                size="small" 
                                className="my-2"
                                onClick={() => window.open(selectedProjectData.links.github, '_blank')}
                            />
                        )}
                        {selectedProjectData?.links.website && (
                            <Button 
                                label="Website" 
                                size="small" 
                                className="my-2"
                                onClick={() => window.open(selectedProjectData.links.website, '_blank')}
                            />
                        )}
                        {selectedProjectData?.links.youtube && (
                            <Button 
                                label="YouTube" 
                                size="small" 
                                className="my-2"
                                onClick={() => window.open(selectedProjectData.links.youtube, '_blank')}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
            }
            <motion.div 
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 mb-10"
            >
                <div>
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Caillougarage.png"
                    title="Knitting Page"
                    className=""
                    onclick={() => {
                        setSelectedProject("Knitting Page");
                    }}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/wator.png"
                    title="Wa-Tor Simulation"
                    className=""
                    onclick={() => setSelectedProject("Wa-Tor Simulation")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/MLPortfolio.png"
                    title="Machine Learning Portfolio"
                    className=""
                    onclick={() => setSelectedProject("Machine Learning Portfolio")}
                />
                <ProjectThumbnail
                    underDevelopment
                    imgSrc="/ProjectImages/flappy-dog.png"
                    title="Flappy dog"
                    className=""
                    onclick={() => setSelectedProject("Reddit Sentiment Analyser")}
                />
                </div>
                <div>
                <ProjectThumbnail
                    imgSrc="/ProjectImages/AssemblyGame.png"
                    title="Assembly Game"
                    className=""
                    onclick={() => setSelectedProject("Assembly Game")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/Bytecode.png"
                    title="Java Bytecode Interpreter"
                    className=""
                    onclick={() => setSelectedProject("Java Bytecode Interpreter")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/RedditSentiment.png"
                    title="Reddit Sentiment Analyser"
                    className=""
                    onclick={() => setSelectedProject("Reddit Sentiment Analyser")}
                />
                <ProjectThumbnail
                    imgSrc="/ProjectImages/PortfolioPage.png"
                    title="Portfolio Website"
                    className=""
                    onclick={() => setSelectedProject("Portfolio Website")}
                />
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectPage;