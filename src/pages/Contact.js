import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5706.661274701576!2d82.42443791954486!3d27.889216669353814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979b38a850898f%3A0x5f63367d3c748e79!2sRapti%20Feed%20Industries%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1715703201164!5m2!1sen!2snp"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.6)" }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">Social Links</p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email :{" "}
                <a
                  href="mailto:raptifeedind@gmail.com"
                  className="text-blue-600"
                >
                  raptifeedind@gmail.com
                </a>
              </label>
              <br />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Facebook :{" "}
                <a
                  href="https://fb.me/100028238290328/"
                  target='_blank'
                  className="text-blue-600"
                >
                  Rapti Feed Industries
                </a>
              </label>
              <br />
              <label className="leading-7 text-sm text-gray-600">
                Instagram :{" "}
                <a
                  href="https://instagram.com/raptifeed/"
                  target='_blank'
                  className="text-blue-600"
                >
                  @raptifeed
                </a>
              </label>
              <br />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/company/raptifeedindustries/"
                  target='_blank'
                  className="text-blue-600"
                >
                  Apply Now
                </a>
              </label>
              <br />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Telephone :{" "}
                <a href="tel:082-417014"
                  target='_blank'
                  className="text-blue-600">
                  082-417014
                </a>
              </label>
              <br />
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Phone :{" "}
                <a href="tel:+9779801339112" className="text-blue-600">
                  +977 9801339112
                </a>
              </label>
              <br />
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <a href="https://maps.app.goo.gl/1hjaZY1raAkkMR638"
              target='_blank'
              >View On Maps</a>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              "Think Feed, Think Gain" - Rapti Feed Industries
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact