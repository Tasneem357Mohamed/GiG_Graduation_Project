import React from "react";
import  Navbar  from "./Navbar";
import Footer  from "./Footer";
import img1 from "../../assets/images/img1-dev4.png";
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import img7 from "../../assets/images/img7.png"
import img10 from "../../assets/images/image (10).png"
import img11 from "../../assets/images/image (11).png"


const projectImages = [
  { label: "Living room with reading nook", src: img2 },
  { label: "Bedroom with wood bed frame", src: img3 },
  { label: "Modern kitchen with island", src: img4 },
  { label: "Living room with fireplace", src: img5 },
  { label: "Dining room with pendant light", src: img6 },
  { label: "Living room with fireplace, alt angle", src: img7 },
];

const testimonials = [
  {
    quote:
      "As a small business owner, finding a reliable cleaning service was a top priority. Ever since I started using this service, my office has never looked better! The team is punctual, thorough, and always goes the extra mile. They've truly taken the hassle out of maintaining a clean and professional workspace. I can't recommend them enough!",
    name: "James Rodriguez",
    role: "Owner - Rodriguez & Co. Consulting",
    src:img10
  },
  {
    quote:
      "I was struggling to keep up with the demands of managing multiple properties, but this service has been a lifesaver. The team is always reliable, professional, and responsive to last-minute requests. They've made my life so much easier, and I can focus on other priorities knowing my properties are in good hands.",
    name: "Emily Nguyen",
    role: "Property Manager - Nguyen Realty Group",
    src:img11
  },
];


// Reusable placeholder block — swap for a real <img> when you wire in assets
function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      data-image-slot={label}
      className={`flex items-center justify-center border border-dashed border-stone-300 bg-stone-100 p-2 text-center text-[11px] text-stone-400 ${className}`}
    >
      {label}
    </div>
  );
}

export default function StrategicPlanningServices() {
  return (
    <div className="bg-[#fbfaf8] font-sans text-[#4a4f66]">
   {/*  first navbar from tasneem */}
       
      <main>
          <Navbar />
        {/* ── Hero ── */}
        <section className="mx-auto max-w-6xl px-6 pt-10 text-center md:pt-14">
          <p className="mb-3 text-[11px] text-stone-400">Home /</p>
          <h1 className="text-3xl font-normal text-[#2f3550] md:text-4xl">
            Strategic Planning Services
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[#4a4f66]">
            Our Strategic Planning Services are designed to help you set
            clear goals and map out a path to achieve them. We work closely
            with you to develop actionable strategies that align with your
            vision and priorities, ensuring every step moves you closer to
            success.
          </p>

          <img src={img1}
            className="mt-10 aspect-[16/7] w-full"
          />

          <div className="mx-auto mt-12 mb-16 grid max-w-3xl gap-4 text-left md:mt-14">
            <h2 className="text-2xl font-normal text-[#2f3550] md:text-[28px]">
              Our process
            </h2>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className="leading-relaxed">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
          </div>
        </section>

       {/* ── Previous projects ── */}
<section className="bg-stone-100 px-6 py-16 md:py-20">
  <h2 className="mb-10 text-center text-2xl font-normal text-[#2f3550] md:mb-12 md:text-[28px]">
    Previous projects
  </h2>
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
    {projectImages.map((project, i) => (
      <div
        key={i}
        className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[3/4]"
      >
        <img
          src={project.src}
          alt={project.label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    ))}
  </div>
</section>

        {/* ── Success stories ── */}
        <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <h2 className="mb-10 text-center text-2xl font-normal text-[#2f3550] md:mb-12 md:text-[28px]">
            Success stories
          </h2>
          <ul className="grid gap-10">
            {testimonials.map((t) => (
              <li key={t.name} className="grid grid-cols-[44px_1fr] gap-5 md:grid-cols-[56px_1fr]">
                <img src={t.src}
                  label={`${t.name} avatar`}
                  className="h-11 w-11 rounded-full text-[9px] md:h-14 md:w-14"
                />
                <div>
                  <p className="mb-3 leading-relaxed">{t.quote}</p>
                  <p className="mt-1 text-sm text-[#2f3550]">{t.name}</p>
                  <p className="mt-0.5 text-[13px] text-stone-400">{t.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Get in touch ── */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 bg-stone-100 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-20">
          <div>
            <h2 className="relative mb-4 inline-block pb-4 text-2xl font-normal text-[#2f3550] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-[#c9a24a] md:text-[28px]">
              Get in touch
            </h2>
            <p className="max-w-xs">
              Have a question? Let us know! We're dedicated to providing the
              support you need.
            </p>
          </div>

          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <label className="grid gap-2 text-[13px] text-[#2f3550]">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Placeholder text"
                className="rounded-sm border border-stone-200 bg-white px-3.5 py-3 text-[#4a4f66] outline-none focus:ring-2 focus:ring-[#c9a24a]"
              />
            </label>

            <label className="grid gap-2 text-[13px] text-[#2f3550]">
              <span>Phone number</span>
              <input
                type="tel"
                name="phone"
                placeholder="Placeholder text"
                className="rounded-sm border border-stone-200 bg-white px-3.5 py-3 text-[#4a4f66] outline-none focus:ring-2 focus:ring-[#c9a24a]"
              />
            </label>

            <label className="grid gap-2 text-[13px] text-[#2f3550]">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="Placeholder text"
                className="rounded-sm border border-stone-200 bg-white px-3.5 py-3 text-[#4a4f66] outline-none focus:ring-2 focus:ring-[#c9a24a]"
              />
            </label>

            <label className="grid gap-2 text-[13px] text-[#2f3550]">
              <span>Your message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Placeholder text"
                className="resize-y rounded-sm border border-stone-200 bg-white px-3.5 py-3 text-[#4a4f66] outline-none focus:ring-2 focus:ring-[#c9a24a]"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#2f3550] px-5 py-3 text-sm text-[#2f3550] transition-colors hover:bg-[#2f3550] hover:text-white"
            >
              Send <SendIcon />
            </button>
          </form>
        </section>
         {/* <Footer /> */}
      </main>
     
    </div>
    //   <Footer />
  );
}

/* ── Inline icon components (swap for your own icon set if you have one) ── */

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 3 3 10.5l7.5 3M21 3l-7.5 18-3-7.5M21 3 10.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

