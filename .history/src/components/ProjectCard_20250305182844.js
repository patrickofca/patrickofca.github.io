import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#2a2a3a' : 'white'};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #f1c40f;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme === 'dark' ? '#ecf0f1' : '#2c3e50'};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme === 'dark' ? '#b3b3b3' : '#7f8c8d'};
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme === 'dark' ? '#3498db' : '#e3f2fd'};
  color: ${props => props.theme === 'dark' ? 'white' : '#1976d2'};
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme === 'dark' ? '#ecf0f1' : '#3498db'};
  margin-left: 1rem;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme === 'dark' ? '#f1c40f' : '#e74c3c'};
  }
`;

const ProjectCard = ({ project }) => {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  
  return (
    <Card theme={currentTheme}>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectContent>
        <ProjectTitle theme={currentTheme}>{project.title}</ProjectTitle>
        <ProjectDescription theme={currentTheme}>{project.description}</ProjectDescription>
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechTag key={index} theme={currentTheme}>{tech}</TechTag>
          ))}
        </TechStack>
        <ProjectLinks>
          <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer" theme={currentTheme}>
            <FaGithub />
          </ProjectLink>
          <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" theme={currentTheme}>
            <FaExternalLinkAlt />
          </ProjectLink>
        </ProjectLinks>
      </ProjectContent>
    n