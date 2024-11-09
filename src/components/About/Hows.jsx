export default function About() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:px-4 xl:px-[5%] 2xl:px-[10%]">
      <div className="w-full h-full grid md:grid-cols-2 gap-4 p-4">
        <article className="md:h-full bg-white p-2 rounded-2xl border">
          <div className="md:h-full flex flex-col md:justify-between p-4">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold text-orange-500">
                How It Started
              </h4>
              <p
                className="2xl:text-8xl font-black mb-8 md:mb-8"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 4rem )",
                  lineHeight: "clamp(1.5rem, 5vw, 4rem )",
                }}
              >
                Our Dream is Global Learning Transformation
              </p>
            </div>

            <p
              style={{
                fontSize: "clamp(1rem, 4vw, 1rem )",
              }}
              web
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus repellendus quibusdam doloremque dignissimos
              consequatur! Cum sunt, quaerat facere incidunt distinctio eos,
              porro sapiente odit sequi natus animi quis est! Debitis nemo
              delectus repudiandae assumenda voluptates saepe, in eum, vel quo
              fugit placeat voluptatibus hic provident, soluta tenetur
              perspiciatis quasi! Tempora labore quaerat rerum vel esse nulla
              architecto magnam accusamus voluptas. Ut earum laudantium
              reiciendis, ratione voluptatem tenetur ea at velit?
            </p>
          </div>
        </article>

        <article className="md:h-full flex flex-col gap-y-4">
          <div className=" h-3/5 rounded-2xl overflow-hidden">
            <img
              src="https://imgs.search.brave.com/K0hElZUwJJI9S5zvmP6ScfZeUHkJKZ2l96Rg_v34wlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NzY5OTQzMC9waG90/by9vdmVyaGVhZC12/aWV3LW9uLWJ1c2lu/ZXNzLXBlb3BsZS1h/cm91bmQtZGVzay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bXc3R0FYVEVPQVEz/NnRhR3h6bzhEUEUz/Q0xPcEc3WnU0NjZG/Q3hlUUpMMD0"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white h-2/5 grid grid-cols-2 gap-4 p-4 rounded-2xl border">
            <article className="bg-black/5 flex flex-col xl:gap-y-4 justify-center px-4 xl:px-8 rounded-2xl">
              <h4 className="font-bold text-3xl">+3.5</h4>
              <p className="text-base font-normal">Years Experience</p>
            </article>
            <article className="bg-black/5 flex flex-col xl:gap-y-4 justify-center px-4 xl:px-8 rounded-2xl">
              <h4 className="font-bold text-3xl">+23</h4>
              <p>Project Challenge</p>
            </article>
            <article className="bg-black/5 flex flex-col xl:gap-y-4 justify-center px-4 xl:px-8 rounded-2xl">
              <h4 className="font-bold text-3xl">+830</h4>
              <p>Positive Reviews</p>
            </article>
            <article className="bg-black/5 flex flex-col xl:gap-y-4 justify-center px-4 xl:px-8 rounded-2xl">
              <h4 className="font-bold text-3xl">+200</h4>
              <p>Trusted Students</p>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
