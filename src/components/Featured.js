import {
  ArrowPathIcon,
  ArrowUpRightIcon,
  BeakerIcon,
  FaceSmileIcon,

  
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Healthy Growth Guarantee",
    description:
      "We ensure healthy growth with top-quality feed for poultry, cattle, and swine, surpassing others in speed and satisfaction.",
      icon: ArrowPathIcon,
    },
    {
      name: "Fast Growth",
      description:
      "Our feed promotes faster growth compared to competitors, backed by our commitment to using premium materials.",
      icon: ArrowUpRightIcon,
  },
  {
    name: "Top-Quality Materials",
    description:
      "We source and utilize only the finest materials in our production process, ensuring unparalleled quality in every pellet.",
    icon: BeakerIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Customer satisfaction is paramount to us. We strive to exceed expectations and deliver excellence in every interaction.",
    icon: FaceSmileIcon,
  },
];


export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Elevate Livestock Perfomance
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Livestock's Potential
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Rapti Feed Industries, we are dedicated to optimizing livestock
            performance through our premium feed products. Our formulations are
            meticulously crafted to unlock the full potential of your animals,
            ensuring superior health, growth, and productivity.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
