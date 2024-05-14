import ContentSection from '../components/ContentSection';
const people = [
  {
    name: "Lila Ram Khanal",
    role: "Chairperson",
    imageUrl:
      "https://i.ibb.co/LpvzcxH/Whats-App-Image-2024-05-14-at-21-05-17-3aaa987e.jpg",
  },
  {
    name: "Jagat Prasad Pokhrel",
    role: "Founder",
    imageUrl:
      "https://i.ibb.co/cQvWj72/93376262-2787554198027563-8520655339291410432-n.jpg",
  },
  {
    name: "Dilli Raj Khanal",
    role: "Founder",
    imageUrl:
      "https://i.ibb.co/WkKDTSh/271837058-3132739147001610-8127119154172194616-n.jpg",
  },
  {
    name: "Krishna Shrestha",
    role: "Founder",
    imageUrl:
      "https://i.ibb.co/PwyTXPb/283626419-1068781113706890-2995132217046987245-n.jpg",
  },
  {
    name: "Ishwar Prakash Shrestha",
    role: "Founder",
    imageUrl:
      "https://i.ibb.co/QvGFxC1/17353460-1878964369042228-8397326611150926476-n.jpg",
  },
  {
    name: "Motilal Khadka",
    role: "Founder",
    imageUrl:
      "https://i.ibb.co/0tVPS32/Whats-App-Image-2024-05-14-at-21-05-42-7c8c9fe1.jpg",
  },

  {
    name: "Yogen Dahal",
    role: "Finance & Operations Manager",
    imageUrl: "https://i.ibb.co/DDj2dNr/1658532224004.jpg",
  },
  {
    name: "Anil Prasad Panday",
    role: "Sales Manager",
    imageUrl:
      "https://i.ibb.co/TTZcNBd/Whats-App-Image-2024-05-14-at-21-09-05-013bd46d.jpg",
  },
  {
    name: "Bandhan Pokhrel",
    role: "Web / Social / Graphics",
    imageUrl:
      "https://i.ibb.co/SQ6gVPQ/419705627-18015404738106366-4371420958235081662-n.jpg",
  },
  // More people...
];

export default function About() {
  return (
    <>
      <ContentSection />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Team Members
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The only key to a successfull group is a great team of members.
              These are our members from the company.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
