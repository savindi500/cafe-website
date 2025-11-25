import { Clock, Users, Award, Heart } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Clock,
      title: "Fresh Daily",
      description:
        "Handcrafted coffee and pastries made fresh every morning with premium ingredients.",
    },
    {
      icon: Users,
      title: "Community Space",
      description:
        "A warm, inviting atmosphere perfect for work, meetings, or catching up with friends.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized for excellence in coffee quality and customer service since 2018.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every drink is crafted with care by our passionate team of expert baristas.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated to serving exceptional coffee in a welcoming environment
            where connections are made and memories are created.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-amber-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
