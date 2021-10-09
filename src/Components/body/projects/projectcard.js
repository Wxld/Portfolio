import React from 'react'
import "./projectcard.css"

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && (
                        <a className="project-link" href={project.demo}>
                            <div className="link-button">
                                <i class="ri-links-fill"></i>Prod
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project-" href={project.github}>
                            <div className="link-button">
                                <i class="ri-github-fill"></i>Github
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag) => {
                        return <label className="tag">{tag}</label>
                    })}
                </div>
            </div>
            <img src={project.image} className="project-photo" alt="project ss"/>
        </div>
    )
}

export default ProjectCard
