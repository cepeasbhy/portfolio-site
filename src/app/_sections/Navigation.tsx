interface Props {
  isActive: string;
  setIsActive: (activeState: string) => void;
}

export default function Navigation({ isActive, setIsActive }: Props) {
  return (
    <nav>
      <div
        className={"nav-item " + (isActive === "about" && "nav-active")}
        onClick={() => setIsActive("about")}
      >
        ABOUT
      </div>
      <div
        className={"nav-item " + (isActive === "tech" && "nav-active")}
        onClick={() => setIsActive("tech")}
      >
        TECH
      </div>
      <div
        className={"nav-item " + (isActive === "projects" && "nav-active")}
        onClick={() => setIsActive("projects")}
      >
        PROJECTS
      </div>
      <div
        className={"nav-item " + (isActive === "certs" && "nav-active")}
        onClick={() => setIsActive("certs")}
      >
        CERTIFICATIONS
      </div>
    </nav>
  );
}
