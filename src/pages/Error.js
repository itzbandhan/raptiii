export default function Error() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Oops, Looks like you found a way towards Great Nothing.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600 text-left">
            You May Try:
            <li>Re-checking your link</li>
            <li>Refreshing the site</li>
            <li>Contact to the support team</li>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Home
            </a>
            <a href="mailto:support@bandhanpokhrel.com.np?subject=Website Support&cc=support@bandhanpokhrel.com.np&body=Hello Sir / Ma'am. This is to notify you that your company website has a error and I couldn't visit the site quite smoothly. I have attached the screenshot of the error in this mail. Please check the mail and do try fixing this problem as soon as possile. PLEASE INSERT YOUR PICTURE HERE: ................... Regards, Your Name" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
