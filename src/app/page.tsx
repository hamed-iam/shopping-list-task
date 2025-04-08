import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TapsiFoodLogo } from "@/components/icons";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-4 py-6 sm:px-10 sm:py-12 lg:px-20 lg:py-20 font-sans bg-gray-50">
      <figure className="max-w-3xs pointer-events-none absolute right-0 top-0 w-full xl:max-w-md">
        <Image
          src="/images/fpo/grid.svg"
          alt="grid"
          priority
          width={450}
          height={254}
          fetchPriority="high"
          className="h-full w-full object-contain"
        />
      </figure>
      <figure className="max-w-3xs pointer-events-none absolute top-0 left-0 w-full xl:max-w-md transform scale-x-[-1]">
        <Image
          src="/images/fpo/grid.svg"
          alt="grid"
          priority
          width={450}
          height={254}
          fetchPriority="high"
          className="h-full w-full object-contain"
        />
      </figure>
      <main className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-10 max-w-3xl mx-auto z-1">
        <Card>
          <CardContent>
            <div className="flex justify-center mb-8">
              <figure>{TapsiFoodLogo}</figure>
            </div>
            <h1 className="text-center text-lg lg:text-xl sm:text-2xl font-bold">
              Frontend Engineer Assignment
            </h1>

            <p className="text-justify mt-8">
              Dear Applicant,
              <br />
              <br />
              First of all, congratulations on advancing to the next stage of
              the interview process! 🎉
              <br />
              <br />
              Below, you&apos;ll find the details of your task, which must be
              completed within <b>three days</b> from the time you receive it.
              While there are multiple ways to structure and build this
              application, what truly matters is your <b>approach</b> to develop
              it. <b>Design (CSS)</b> is not important; focus on the structure
              and functionality instead.
              <br />
              <br />
              The task description is <b>clear and well-defined</b>, accompanied
              by a <b>wireframe</b> to help you better understand the
              requirements. However, if you have any questions along the way,
              feel free to{" "}
              <a
                target="_blank"
                className="underline text-[#FD5C0A]"
                href="https://www.linkedin.com/in/fatemeh-talebi-6306791a3/"
              >
                reach out
              </a>
              .
              <br />
              <br />
              Most importantly, <b>have fun coding! 🚀</b>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="font-bold text-xl mb-10">🛠️ Task Description</h2>
            <p className="text-sm sm:text-base text-justify">
              For this assignment, you will develop a small shopping application
              consisting of two pages. The first page, the <b>main page</b>,
              will display a shopping list where users can add or remove items.
              This page should include <b>lazy-loaded images with fallbacks </b>
              and a <b>search bar</b> to filter products efficiently. The second
              page, called the <b>basket (or cart) page</b>, should allow users
              to view the items they’ve added, adjust the quantity of each
              product, and remove items once their count reaches zero.
              Additionally, users should be able to search within their cart,
              view the <b>total price</b> and <b>total number of products</b>,
              and see the <b>subtotal for each item</b> based on quantity and be
              able to clear the entire cart with <b>empty cart button</b>. The
              <b> basket data must persist</b> across page refreshes to ensure a
              seamless user experience in <b>both pages</b>. You will need to
              <b> design your own API structure</b>, and while creating a
              separate API service is a bonus, storing data within the project
              is also acceptable. A <b>fully responsive design</b> is required
              to ensure the app works smoothly on desktop, tablet, and mobile
              devices.
              <b> TypeScript is mandatory</b>, and you are free to use any
              frontend framework of your choice (Nuxt, Next, React, Vue, etc.)
              or even vanilla along with your preferred UI library. Your project
              should be
              <b> well-structured and well-documented</b>, include a clear
              <b> README</b>, and be hosted on a <b>public GitHub repository</b>
              . Additionally, the application must be <b>Dockerized</b>, with
              setup instructions provided. Below is a rough wireframe of the
              expected layout and functionality, but you are encouraged to come
              up with your own design approach while maintaining the required
              functionality and usability.
            </p>

            <div className="flex gap-4 flex-wrap mt-6 sm:mt-8">
              <Image
                className="border border-black"
                src="/images/page1.png"
                width={200}
                height={200}
                alt="image"
              />
              <Image
                className="border border-black"
                src="/images/page2.png"
                width={200}
                height={200}
                alt="image"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="font-bold text-xl mb-8">🌟 Bonus</h2>
            <p className="mb-4">
              While these features are not mandatory, they will be considered as
              valuable bonuses. 😊
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
              <li>Paginated data and server-side debounced search</li>
              <li>Infinite scroll functionality (huge bonus)</li>
              <li>
                Use separate commits and branches for each feature or
                functionality (highly appreciated)
              </li>
              <li>Custom API for shopping list with pagination and search</li>
              <li>Deployment to a cloud provider</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="font-bold text-xl mb-8">🚀 Submission Guidelines</h2>
            <p className="text-gray-700 mt-2 text-sm sm:text-base text-justify ">
              You have three days from the time you receive it to complete the
              task. Once finished, please host the project in a public GitHub
              repository and include a README.md with clear setup instructions.
              Submit the task by emailing the link to your repository to your TA
              contact.
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="mt-8 sm:mt-10 text-center text-gray-500 text-sm sm:text-base">
        <p>Made for Frontend Engineer applicants with 🧡 </p>
      </footer>
    </div>
  );
}
