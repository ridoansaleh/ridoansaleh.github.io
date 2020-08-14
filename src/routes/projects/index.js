import React, { useState } from "react";
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
import PROJECT_LIST, { REACT_LIST, VUE_LIST } from "./data";

function Projects() {
  const [filter, setFilter] = useState("");
  const [projects, setProjects] = useState(PROJECT_LIST);

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
        <link
          rel="canonical"
          href="https://ridoansaleh.github.io/my-profile/"
        />
        <meta
          name="description"
          content="List of opensource projects that build using library / framework like React and Vue. These are side projects of Ridoan Saleh Nasution."
        />
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
            <Text>
              Repository :{" "}
              <Link href={project.repository}>
                {project.repository.split("ridoansaleh/")[1]}
              </Link>
            </Text>
            <Text>Deployment Status : {project.deployment_status}</Text>
            <Text>Template : {project.template}</Text>
            <Link href={project.demo}>Demo</Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Projects;
