import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Furtory Subscriptions</title>
        <meta name="description" content="Furtory Subscription Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div class="h-screen flex-1 justify-center items-center">
          <div className="">
            <div class="bg-white">
              <div class="container px-6 py-8 mx-auto">
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                  Furtory Subscriptions
                </h1>

                <div class="flex justify-center">
                  <div class="mt-4">
                    <span class="inline-block w-40 h-1 bg-[#f05361] rounded-full"></span>
                    <span class="inline-block w-3 h-1 mx-1 bg-[#f05361] rounded-full"></span>
                    <span class="inline-block w-1 h-1 bg-[#f05361] rounded-full"></span>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-4">
                  <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg ">
                    <p class="font-medium text-gray-500 uppercase">
                      Unlimited Quick Grooming
                    </p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM19.90
                    </h2>

                    <p class="font-medium text-gray-500 ">Per Month</p>

                    <a
                      href="https://buy.stripe.com/test_7sI02Lgfr22d41O9AA"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Monthly
                    </a>

                    <p>OR</p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM199.90
                    </h2>

                    <p class="font-medium text-gray-500 ">Per Year</p>

                    <a
                      href="https://buy.stripe.com/test_9AQg1Jd3fcGR0PCaEF"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Yearly
                    </a>
                  </div>

                  <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg ">
                    <p class="font-medium text-gray-500 uppercase">
                      Unlimited Vet Video Call
                    </p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM49.90
                    </h2>

                    <p class="font-medium text-gray-500 ">Per Month</p>

                    <a
                      href="https://buy.stripe.com/test_4gw3eXd3f5ep9m8003"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Monthly
                    </a>

                    <p>OR</p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM499.90
                    </h2>

                    <p class="font-medium text-gray-500 ">Per Year</p>

                    <a
                      href="https://buy.stripe.com/test_aEU9Dlgfr5epeGs4gi"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Yearly
                    </a>
                  </div>

                  <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg ">
                    <p class="font-medium text-gray-500 uppercase">
                      Ultimate Pet Ownership Plan (UPOP)
                    </p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM100.00
                    </h2>

                    <p class="font-medium text-gray-500 ">
                      Per Month for Adopted Cat
                    </p>

                    <a
                      href="https://buy.stripe.com/test_4gw4j1fbn7mx0PC5ko"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Monthly
                    </a>

                    <p>OR</p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM400.00
                    </h2>

                    <p class="font-medium text-gray-500 ">
                      Per Month for Small Breed Dog
                    </p>

                    <a
                      href="https://buy.stripe.com/test_eVadTB3sF9uF69W8wB"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Monthly
                    </a>
                  </div>

                  <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg ">
                    <p class="font-medium text-gray-500 uppercase">
                      Furtory Pet Centre Membership
                    </p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM4.90
                    </h2>

                    <p class="font-medium text-gray-500 ">Per Month</p>

                    <a
                      href="https://buy.stripe.com/test_fZedTBaV7bCNdCo5kq"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Monthly
                    </a>

                    <p>OR</p>

                    <h2 class="text-4xl font-semibold text-gray-800 uppercase ">
                      RM49.00
                    </h2>

                    <p class="font-medium text-gray-500 ">Per Year</p>

                    <a
                      href="https://buy.stripe.com/test_5kA8zhfbn0Y91TG007"
                      class="w-full inline-block px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f05361] rounded-md hover:bg-[#f98361] focus:outline-none"
                    >
                      Subscribe Yearly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
