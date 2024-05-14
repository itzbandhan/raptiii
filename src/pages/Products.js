import React from 'react'

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Broiler B-0",
      href: "/products/broiler_b0",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/GpcBt9k/b0.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Broiler B-1",
      href: "/products/broiler_b1",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/NmCZDVY/b1.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Broiler B-2",
      href: "/products/broiler_b2",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/p0Zz4k0/b2.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Broiler L-1",
      href: "/products/broiler_l1",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/gMWkvX3/l1.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Broiler L-2",
      href: "/products/broiler_l2",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/gMWkvX3/l1.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 6,
      name: "Broiler L-3",
      href: "/products/broiler_l3",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/s2Tgn33/l3.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 7,
      name: "Goat Feed",
      href: "/products/goatfeed",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/dt7gxhf/goatfeed.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },

    {
      id: 8,
      name: "Buff Special",
      href: "/products/buffspecial",
      weight: "50 KG",
      imageSrc: "https://iili.io/J6FMINR.md.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 9,
      name: "High Yield Special",
      href: "/products/highyieldspecial",
      weight: "50 KG",
      imageSrc: "https://iili.io/J6FMLJa.md.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 10,
      name: "Doodh Dhara",
      href: "/products/doodhdhara",
      weight: "50 KG",
      imageSrc: "https://iili.io/J6FMTtp.md.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 11,
      name: "Pig Starters",
      href: "/products/pigstarter",
      weight: "50 KG",
      imageSrc: "https://i.ibb.co/QkPNHXX/pigstarter.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.weight}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products