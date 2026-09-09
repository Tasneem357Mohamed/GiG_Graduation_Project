import aboutImage from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center m-3 md:m-5">
      <header className="text-center my-12 md:my-20">
        <h1 className="text-5xl mb-2">Our company</h1>
        <p className="text-text/70">Guided by principles, driven by results</p>
      </header>

      <img
        src={aboutImage}
        alt="office"
        className="w-full h-auto my-6 max-w-7xl rounded-lg"
      />

      <div className="flex flex-col gap-10 max-w-7xl ">
        <section>
          <h2 className="text-2xl font-normal mb-3 lg:text-4xl">Our Story</h2>
          <div className="space-y-4">
            <p className="text-text/60">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className="text-text/60">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <p className="text-text/60">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-normal mb-3 lg:text-4xl">What we do</h2>
          <div className="space-y-4">
            <p className="text-text/60">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className="text-text/60">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <p className="text-text/60">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;