import { employees } from "../../json/employees.json";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 sm:py-32 flex items-center justify-center text-center wide:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Micheal
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As the visionary founder of Dream Flow Financial, Micheal combines
            her experience of financial expertise with a passion for empowering
            clients to achieve their financial dreams.
          </p>
        </div>
        <ul role="list" className="mb-6">
          {employees.map((person) => (
            <li key={person.name}>
              <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                <img
                  className="h-20 w-20 rounded-full aspect-auto"
                  src={person.imageUrl}
                  alt={person.alt}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="/about"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          See More
        </a>
      </div>
    </section>
  );
}
