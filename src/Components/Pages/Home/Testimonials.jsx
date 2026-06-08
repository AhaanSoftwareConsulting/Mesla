import { StarIcon } from "@phosphor-icons/react";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.png";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: user1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est turpis, congue vitae ligula quis, rhoncus rutrum lectus. Maecenas ante erat, semper ut sodales quis, congue id arcu congue id arcu.",
  },
  {
    id: 2,
    name: "David Miller",
    image: user2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est turpis, congue vitae ligula quis, rhoncus rutrum lectus. Maecenas ante erat, semper ut sodales quis, congue id arcu congue id arcu.",
  },
  {
    id: 3,
    name: "Mike Tyson",
    image: user3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est turpis, congue vitae ligula quis, rhoncus rutrum lectus. Maecenas ante erat, semper ut sodales quis, congue id arcu congue id arcu.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F3F4F6]  py-10 xl:py-[70px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">
      {/* Heading */}
      <h2 className="mb-12 text-center text-2xl md:text-[32px] font-bold text-[#232323] font-heading">
        Client's Testimonials
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="relative rounded-[20px] border border-[#5E5E5E] px-[18px] pt-[30px] pb-[24px]"
          >
            {/* Stars on Border */}
            <div className="absolute -top-[12px] right-[18px] bg-[#F3F4F6] px-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    size={24}
                    weight="fill"
                    className="text-[#E2AD26]"
                  />
                ))}
              </div>
            </div>

            {/* Review */}
            <p className="text-base leading-[24px] text-[#4B4B4B]">
              {item.review}
            </p>

            {/* User */}
            <div className="mt-6 flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-[80px] w-[80px] rounded-full object-cover"
              />

              <h4 className="text-xl font-semibold text-[#232323]">
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;