export default function About() {
  const businessInfo = {
    name: "Your Car Shop Store Name",
    description:
      "Welcome to our car shop! We specialize in providing high-quality car lights, auto parts, tuning accessories, air fresheners, and a range of hardware tools. Our mission is to keep your vehicle running smoothly and looking its best.",
    established: "2020",
    location: "123 Auto Street, Carville, Country",
    products: [
      "Car Lights",
      "Auto Parts",
      "Tuning Accessories",
      "Air Fresheners",
      "Hardware Tools",
    ],
  };
  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 text-white">
      <h1 className="py-4 text-3xl font-bold">About {businessInfo.name}</h1>
      <p className="pb-6">{businessInfo.description}</p>

      <section className="[&>ul>li]: [&>h2]:pt-6 [&>h2]:text-xl [&>h2]:font-bold [&>p]:px-4 [&>ul>li]:px-4 [&>ul>li]:py-1 [&>ul>li]:font-semibold">
        <h2>Who We Are:</h2>
        <p>
          Established in {businessInfo.established}, {businessInfo.name} has
          been serving the {businessInfo.location} community with a passion for
          vehicles and a dedication to quality. Our store is the go-to
          destination for car enthusiasts and everyday drivers alike.
        </p>

        <h2>Our Products:</h2>
        <ul>
          {businessInfo.products.map((product) => (
            <li className="after:absolute after:left-4 after:pl-1 after:font-bold after:text-[#64ffda] after:content-['▹']">
              {product}
            </li>
          ))}
        </ul>

        <h2>Visit Us:</h2>
        <p>
          Our shop is located at: <strong>{businessInfo.location}</strong>
        </p>
      </section>
    </main>
  );
}
