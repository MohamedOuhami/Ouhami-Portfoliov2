import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						Les choses que j'ai créées dans le but de laisser ma marque dans l'univers.
						</div>

						<div className="subtitle projects-subtitle">
						Au fil des années, j'ai travaillé sur différents projets et je suis fier des progrès que j'ai réalisés. Certains de ces projets sont open-source et disponibles pour que d'autres puissent les explorer et y contribuer. Si vous êtes intéressé par l'un des projets sur lesquels j'ai travaillé, n'hésitez pas à consulter le code et à suggérer des améliorations ou des idées d'amélioration. La collaboration avec d'autres est un excellent moyen d'apprendre et de progresser, et je suis toujours ouvert aux nouvelles idées et aux retours d'expérience.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
