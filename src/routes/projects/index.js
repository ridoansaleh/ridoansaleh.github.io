import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Filter,
  Label,
  Select,
  List,
  ListTitle,
  ListItem,
  ProjectName,
  Text,
  Link,
} from "./_projectsStyle";
import useScrollup from "../../hooks/useScrollup";
import PROJECT_LIST, { REACT_LIST, VUE_LIST } from "./data";
import { META } from "../../constant";

function Projects() {
  const [filter, setFilter] = useState("");
  const [projects, setProjects] = useState(PROJECT_LIST);
  const { setScroll } = useScrollup();

  useEffect(() => {
    setScroll(true);
  }, []);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    if (value === "Quality") {
      setProjects(PROJECT_LIST);
    } else if (value === "React") {
      setProjects(REACT_LIST);
    } else if (value === "Vue") {
      setProjects(VUE_LIST);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content={META.description_projects} />
        <meta property="og:description" content={META.description_projects} />
        <meta name="twitter:description" content={META.description_projects} />
      </Helmet>
      <Filter>
        <Label>Filter By:</Label>
        <Select value={filter} onChange={handleFilterChange}>
          <option value="Quality">Quality</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </Select>
      </Filter>
      <List>
        <ListTitle>PROJECTS</ListTitle>
        {projects.map((project, index) => (
          <ListItem key={project.id}>
            <ProjectName>{index + 1 + ". " + project.name}</ProjectName>
            <LazyLoadImage
              alt={project.altImage}
              height={200}
              src={project.image}
              width="100%"
            />
            <table>
              <tr>
                <td>Repository</td>
                <td>
                  <Link href={project.repository}>
                    {project.repository.split("ridoansaleh/")[1]}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Deployment status</td>
                <td>
                  <Text>{project.deployment_status}</Text>
                </td>
              </tr>
              <tr>
                <td>Template</td>
                <td>
                  <Text>{project.template}</Text>
                </td>
              </tr>
              <tr>
                <td>Demo</td>
                <td>
                  <Link href={project.demo}>link</Link>
                </td>
              </tr>
            </table>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Projects;
