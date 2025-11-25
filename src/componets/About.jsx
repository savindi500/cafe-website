import FreshImg from "../assets/fresh.jpg";
import CommunityImg from "../assets/space.jpg";
import AwardImg from "../assets/award.jpg";
import LoveImg from "../assets/made.jpg";

export default function About() {
  const features = [
    {
      title: "Fresh Daily",
      img: FreshImg,
      description:
        "Handcrafted coffee and pastries made fresh every morning with premium ingredients.",
    },
    {
      title: "Community Space",
      img: CommunityImg,
      description:
        "A warm, inviting atmosphere perfect for work, meetings, or catching up with friends.",
    },
    {
      title: "Award Winning",
      img: AwardImg,
      description:
        "Recognized for excellence in coffee quality and customer service since 2018.",
    },
    {
      title: "Made with Love",
      img: LoveImg,
      description:
        "Every drink is crafted with care by our passionate team of expert baristas.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated to serving exceptional coffee in a welcoming environment
            where connections are made and memories are created.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]"
              style={{ perspective: "1000px" }}
            >
              {/* 3D Image */}
              <div className="relative w-full h-28 sm:h-36 mb-4 sm:mb-6 overflow-hidden rounded-xl">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                />
              </div>

              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-3 text-center">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-[12px] sm:text-base leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
