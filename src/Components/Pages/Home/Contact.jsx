import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {ArrowUpRightIcon} from "@phosphor-icons/react";
import lite from "../../../assets/lite.png";
import { submitContactEntry } from "../../../Api/Api";


export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
    },
  });

  /* =========================
     SUBMIT
  ========================= */
  const onSubmitForm = async (data) => {  
    
    // API submit
    try {
      setSubmitting(true);

      const res = await submitContactEntry({
        name: data.name,
        email: data.email,
        phone: data.phone,
        i_agree_to_the_privacy_policy: data.i_agree_to_the_privacy_policy,
      });

      console.log("API Response:", res);

      if (res?.success) {
        alert("✅ Message sent successfully!");

        reset();
      } else {
        alert("❌ Submission failed");
      }

    } catch (err) {
      console.error(err);
      alert("❌ Error sending message");
    } finally {
      setSubmitting(false);
    }
  };
  const required = { required: "This field is required" };

  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        
        {/* Left Content */}
        <div className="bg-[#232F3F] px-6 md:px-8 :lg:px-12 xl:pl-[70px] xl:pr-[20px] py-10  items-center">
          <div className="relative">
            
            {/* Heading */}
            <h3 className="font-heading text-[#F9FCFE] text-xl lg:text-[32px] lg:leading-relaxed mb-8 font-bold">
              Subscribe to Mesla
              <br className="hidden lg:block" />
              <span className="text-[FFFFDA]">And Receive all our News & Offers</span>
            </h3>

            {/* Form */}
            <form className="space-y-5 max-w-[430px]" onSubmit={handleSubmit(onSubmitForm)}>
              
              {/* Name */}
              <input
                type="text"
                placeholder="Name*"
                {...register("name", {
              required: "Name is required",
              pattern: {
                value:
                  /^[A-Za-z\s]+$/,
                message: "Only letters are allowed",
              },
            })}
                className="w-full rounded-full bg-white px-5 py-2 lg:py-5 text-sm outline-none placeholder:text-[#8A8A8A]"
              />
{errors.name && (
            <p className="text-red-500 text-xs ml-5">{errors.name.message}</p>
          )}
              {/* Email */}
              <input
                type="email"
                placeholder="Email*"
                {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/,
                message: "Invalid email",
              },
            })}
                className="w-full rounded-full bg-white px-5 py-2 lg:py-5 text-sm outline-none placeholder:text-[#8A8A8A]"
              />
{errors.email && (
            <p className="text-red-500 text-xs ml-5">{errors.email.message}</p>
          )}
              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone*"
                {...register("phone", {
              required: "Phone number is required",
              validate: {
                validFormat: (value) => {
                  if (value === "") return true;

                  const plusCount = (value.match(/\+/g) || []).length;

                  if (plusCount > 1) {
                    return "Only one '+' is allowed";
                  }

                  if (value.includes("+") && !value.startsWith("+")) {
                    return "'+' must be at the beginning";
                  }

                  if (!/^[+]?[0-9]*$/.test(value)) {
                    return "Only digits and '+' at the beginning are allowed";
                  }

                  if (value.length > 16) {
                    return "Phone number too long";
                  }

                  return true;
                },
              }
            })}
         
            onPaste={(e) => {
              e.preventDefault();
              let paste = (e.clipboardData || window.clipboardData).getData("text");

              paste = paste.replace(/[^0-9+]/g, "");

              if (paste.startsWith("+")) {
                paste = "+" + paste.slice(1).replace(/\+/g, "");
              } else {
                paste = paste.replace(/\+/g, "");
              }

              setValue("phone", paste.slice(0, 15));
            }}
                className="w-full rounded-full bg-white px-5 py-2 lg:py-5 text-sm outline-none placeholder:text-[#8A8A8A]"
              />
              {errors.phone && (
            <p className="text-red-500 text-xs ml-5">{errors.phone.message}</p>
          )}

              {/* Checkbox */}
              <label className="flex items-center gap-2 text-xs text-white/90">
                <input
                  type="checkbox"
                  {...register("i_agree_to_the_privacy_policy")}
                  className="h-3.5 w-3.5 accent-[#115492]"
                />
                <span>
                  I agree to the{" "}
                  <a
                    href="/privacy-policy"
                    className="underline hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                disabled={
                  submitting
                }
                className={`group/btn bg-[#1566B0] cursor-pointer text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold
                  
                  ${submitting
                    ? "cursor-not-allowed "
                    : "hover:bg-white  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300"
                  }
                `}
              >
                <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#1566B0] transition-colors duration-300">
                  {submitting
                    ? "Subscribing..."
                    : "Subscribe"}
                </span>
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#1566B0] flex items-center justify-center shrink-0 group-hover/btn:bg-[#1566B0] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                                    <ArrowUpRightIcon size={14} weight="bold" />
                                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[300px] lg:min-h-[560px]">
          <img
            src={lite}
            alt="Newsletter"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

