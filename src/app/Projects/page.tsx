import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <p className="mt-2 text-gray-600">Here are some of my works...</p>

      {/* Use your reusable component */}
      <Projects/>
    </div>
  );
}
