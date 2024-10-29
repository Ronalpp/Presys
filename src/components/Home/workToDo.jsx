
export default function WorkToDo() {
  return (
    <section>
      <div
        className="w-full bg-cover bg-center bg-no-repeat py-28 flex flex-col justify-center items-center gap-y-6 lg:h-[60vh] lg:gap-y-12"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4mcePS5dsAireibkC7saTh8dYlb3-n0P5wuWZ_dZyq8tny5PkPfwb1ArwXsnjoGUrTc")`,
        }}
      >
        <p className="mt-6 text-white font-black text-center text-[8vw] leading-[8vw] lg:text-7xl lg:leading-[60px] tracking-tight ">
          Inscribete<br /> que esperas?
        </p>
        <a
          className="border py-2 px-8 text-white lg:text-2xl font-semibold uppercase lg:py-4 lg:px-16 hover:bg-white hover:text-black transition-all"
          href="/contact-us"
        >
         ¡Inscríbete!
        </a>
      </div>
    </section>
  );
}