import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="p-6">
      <p className="mt-2 text-gray-600">Feel free to reach out!</p>

      <Contact />  {/* ✅ Reuse your component */}
    </div>
  );
}
