import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Who We Are
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Us
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Rapti Feed Industries: Premier Livestock Feed Manufacturer.
                Ensuring Quality and Quantity for Over a Decade Dedicated to
                Farmer Satisfaction Nationwide Located in Lamahi, Dang, with
                Manufacturing Plant in Satbariya Your Trusted Partner in
                Poultry, Cattle, and Swine Nutrition.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://i.ibb.co/9YRBnp9/402973380-1396426807975249-6997164208042225056-n-1.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg text-justify">
              <p>
                Rapti Feed Industries has been a leading manufacturer of
                poultry, cattle, and swine feed for over a decade. Based in
                Lamahi, Dang, our commitment to providing quality products in
                abundance has set us apart in the industry. With our
                manufacturing plant situated in Satbariya, Dang, we ensure that
                every batch of feed meets the highest standards of excellence.
              </p>
              <br />
              <p>
                At Rapti Feed Industries, we take pride in our unwavering
                dedication to customer satisfaction. We understand the unique
                needs and requirements of farmers, and we tailor our products
                and services to support them in efficiently farming and rearing
                poultry, swine, and cattle.
              </p>

              <p className="mt-8">
                Our mission is not only to deliver the best products throughout
                the nation but also to foster long-term relationships with our
                customers built on trust, reliability, and mutual success. With
                a team of experienced professionals and a state-of-the-art
                manufacturing facility, we are poised to continue serving the
                agricultural community with integrity and excellence for many
                years to come.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Learn About Our Products??
              </h2>
              <p className="mt-6">
                At Rapti Feed Industries, we take pride in offering a
                comprehensive range of high-quality products tailored to meet
                the nutritional needs of poultry, cattle, and swine. Our
                extensive product line includes specially formulated feeds
                designed to support optimal growth, health, and performance in
                livestock. From starter feeds to specialized formulations for
                different stages of development, we ensure that each product is
                crafted with care and precision. Whether you're raising
                broilers, layers, dairy cattle, beef cattle, pigs, or other
                livestock, we have the right feed to meet your requirements.
                Explore our full range of products on the product page
                accessible from the navigation above, where you'll find detailed
                information on each feed variant, including ingredients,
                nutritional content, and usage guidelines. Trust Rapti Feed
                Industries to provide the essential nutrition your animals need
                to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
