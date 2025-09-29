import SectionTitle from "../../components/ui/SectionTitle";

const TEAM = [
  {
    id: 1,
    name: "Yeasin Mahbub",
    designation: "Founder & CEO",
    photo: "/images/team/mahbub.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    designation: "Project Manager",
    photo: "/images/team/mahbub.jpg",
  },
  {
    id: 3,
    name: "Abdur Rahman",
    designation: "Lead Developer",
    photo: "/images/team/rahat.jpg",
  },
  {
    id: 4,
    name: "Emma Davis",
    designation: "UI/UX Designer",
    photo: "/images/team/rahat.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-neutral-950 text-white">
      <div className="container-class">
        {/* Section heading */}
        <SectionTitle
          title="Our Expert Team"
          description="A dedicated team of professionals committed to delivering excellence and innovation."
        />

        {/* Team grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50 py-8"
            >
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary/80 shadow-md">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg lg:text-xl font-semibold text-white [word-spacing:4px]">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-400 [word-spacing:4px]">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
