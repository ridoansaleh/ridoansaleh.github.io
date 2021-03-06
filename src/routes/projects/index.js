import { useState, useEffect } from "react";
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
import PROJECT_LIST, { REACT_LIST, VUE_LIST, NODEJS_LIST } from "./data";

function Projects() {
  const [filter, setFilter] = useState("");
  const [projects, setProjects] = useState(PROJECT_LIST);
  const { setScroll } = useScrollup();

  useEffect(() => {
    setScroll(true);
  }, [setScroll]);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    if (value === "Quality") {
      setProjects(PROJECT_LIST);
    } else if (value === "React") {
      setProjects(REACT_LIST);
    } else if (value === "Vue") {
      setProjects(VUE_LIST);
    } else if (value === "Node.Js") {
      setProjects(NODEJS_LIST);
    }
  };

  return (
    <>
      <Filter>
        <Label>Filter By:</Label>
        <Select value={filter} onChange={handleFilterChange}>
          <option value="Quality">Quality</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Node.Js">Node.Js</option>
        </Select>
      </Filter>
      <List>
        <ListTitle>PROJECTS</ListTitle>
        {projects.map((project) => (
          <ListItem key={project.id}>
            <ProjectName>{project.id + ". " + project.name}</ProjectName>
            <LazyLoadImage
              alt={project.alt_image}
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
