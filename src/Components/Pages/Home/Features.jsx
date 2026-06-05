import icon1  from "../../../assets/icon1.png";
import icon2  from "../../../assets/icon2.png";
import icon3  from "../../../assets/icon3.png";
import icon4  from "../../../assets/icon4.png";

const features = [
  {
    icon: icon1,
    title: "Secure",
    subtitle: "Payments",
  },
  {
    icon: icon2,
    title: "Professional",
    subtitle: "Baristas",
  },
  {
    icon: icon3,
    title: "Free Delivery In",
    subtitle: "UK",
  },
  {
    icon: icon4,
    title: "Trusted By The",
    subtitle: "Community",
  },
];

export default function Features() {
  return (
    <section className="bg-[#232F3F] py-8">
      <div className="max-w-[1440px] mx-auto relative px-4 md:px-8 lg:px-12 xl:px-[70px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div className="relative">
                {/* Outer Gradient Ring */}
                <div className="flex h-[120px] w-[120px] lg:h-[150px] lg:w-[150px] items-center justify-center  gradient-border ">
                    <div className="flex h-[115px] w-[115px] lg:h-[145px] lg:w-[145px] items-center justify-center bg-[#232F3F] rounded-full">
                  
                  <div className="flex h-[95px] w-[95px] lg:h-[120px] lg:w-[120px] items-center justify-center rounded-full bg-white">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-14 w-14 lg:h-18 lg:w-18 object-contain"
                    />
                  </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4">
                <p className="font-heading text-base md:text-xl italic text-white leading-tight font-heading">
                  {item.title}
                </p>

                <p className="font-heading text-base md:text-xl italic text-white leading-tight font-heading">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}