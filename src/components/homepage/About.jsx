const people = [
  {
    name: "Mrs. Micheal McBossLady",
    role: "CEO / Brains / Awesomeness-Spreader",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 sm:py-32 flex items-center justify-center text-center"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Micheal
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Some cool facts or story or reasoning why you decided to help people
            make their lives better
          </p>
        </div>
        <ul role="list" className="">
          {people.map((person) => (
            <li key={person.name}>
              <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
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
      </div>
    </section>
  );
}
