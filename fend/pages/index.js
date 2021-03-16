import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const goToDiv = (id) => {
    if (typeof window !== "undefined") window.location.href = id;
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>John Maclaine - maclainelabs.com</title>
        <meta
          name="description"
          content="Software Engineer, full stack developer and Founder and CEO of Partn Software."
        />

        <meta property="jog:type" content="website" />
        <meta property="og:url" content="https://maclainelabs.com" />
        <meta property="og:title" content="John Maclaine - maclainelabs.com" />
        <meta
          property="og:description"
          content="Software Engineer, full stack developer and Founder and CEO of Partn Software."
        />
        <meta property="og:image" content="/pic.jpg" />

        <meta property="twitter:card" content="/pic.jpg" />
        <meta property="twitter:url" content="https://maclainelabs.com/" />
        <meta
          property="twitter:title"
          content="John Maclaine - maclainelabs.com"
        />
        <meta
          property="twitter:description"
          content="Software Engineer, full stack developer and Founder and CEO of Partn Software."
        />
        <meta property="twitter:image" content="/pic.jpg" />
        <link rel="icon" href="/pic.jpg" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main className="flex flex-col lg:px-96 lg:pt-32">
        <div className="flex flex-col text-white">
          <div className="flex flex-col lg:flex-row justify-end text-2xl">
            <p className="cursor-pointer hover:text-yellow-300">Me</p>
            <p
              onClick={() => goToDiv("#experience")}
              className="cursor-pointer hover:text-yellow-300 lg:ml-14"
            >
              Experience
            </p>
            <a
              href="mailto:johnmaclained@gmail.com"
              className="cursor-pointer hover:text-yellow-300 lg:ml-14"
            >
              Email me
            </a>
          </div>
          <div className="mt-10 lg:w-56">
            <h1 className={styles.typewriter}>MACLAINE LABS</h1>
            <p className="text-base animate__animated animate__fadeInRight animate__delay-1s">
              Fullstack Developer
            </p>
          </div>
          <div className="mt-10 flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col items-center lg:items-start lg:w-1/6 lg:mr-20">
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-2s">
                React.js
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-2s">
                Node.js
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-2s">
                Postgres
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-2s">
                AWS
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:w-1/6 lg:mr-20">
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-3s">
                Next.js
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-3s">
                Hasura
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-3s">
                MySQL
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-3s">
                Azure
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:w-1/6 lg:mr-20">
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-4s">
                React Native
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-4s">
                GraphQL
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-4s">
                Docker
              </p>
              <p className="text-2xl hover:text-yellow-300 lg:mt-10 animate__animated animate__fadeInUp animate__delay-4s">
                Digital Ocean
              </p>
            </div>

            <div className="flex flex-col lg:w-2/6 mb-10 lg:mb-0 justify-center items-center">
              <img
                src={"/pic.jpg"}
                className="shadow-lg rounded-full h-74 w-74 animate__animated animate__fadeInRight animate__delay-5s"
              />
              <p className="flex flex-col animate__animated animate__fadeInRight animate__delay-5s">
                John Maclaine Danao
              </p>
            </div>
          </div>
          <div className="mt-10 animate__animated animate__fadeInUp animate__delay-5s">
            <div className="flex flex-row ">
              <p className="self-end">
                Currently Learning: Golang and Kubernetes
              </p>
            </div>
          </div>
          <div
            onClick={() => goToDiv("#experience")}
            className="w-20 mt-20 hover:bg-yellow-400 cursor-pointer rounded h-10 bg-gray-900 self-center flex items-center justify-center"
          >
            <img src="/down.png" className="h-5 w-5" />
          </div>
        </div>

        <div id="experience" className="flex text-white flex-col">
          <div className="text-3xl text-yellow-400 flex flex-col items-end">
            <p>Experience</p>
            <p className="text-white text-base">
              Finished and ongoing projects
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <img src="/seeker2.png" className="h-74 w-74" />
            <img src="/seeker1.png" className="h-74 w-74" />
            <div className="flex ml-20 pb-10 justify-end flex-col">
              <p className="text-yellow-400 text-2xl">Pasajob Seeker</p>
              <p>
                Job referral platform with a referral system where users can
                earn real money by referring other candidates.
              </p>
              <div className="flex flex-col lg:flex-row mt-10">
                <a
                  target="_blank"
                  href="https://seeker.pasajob.com"
                  className="mr-10 text-xl text-blue-500"
                >
                  Web
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.seeker.pasajob&hl=en&gl=US"
                  className="mr-10 text-xl text-blue-500"
                >
                  Mobile
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-20">
            <img src="/employer2.png" className="h-74 w-74" />
            <img src="/employer1.png" className="h-74 w-74" />
            <div className="flex ml-20 pb-10 justify-end flex-col">
              <p className="text-yellow-400 text-2xl">Pasajob Employer</p>
              <p>
                Related to the seeker platform, the employer platform enables
                companies to post jobs with a referral fee for seeker referrers.
              </p>
              <div className="flex flex-row mt-10">
                <a
                  target="_blank"
                  href="https://employer.pasajob.com"
                  className="mr-10 text-xl text-blue-500"
                >
                  Web
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.employer.pasajob&hl=en&gl=US"
                  className="mr-10 text-xl text-blue-500"
                >
                  Mobile
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-20">
            <img src="/asialink2.png" className="h-74 w-74" />
            <img src="/asialink1.png" className="h-74 w-74" />
            <div className="flex ml-20 pb-10 justify-end flex-col">
              <p className="text-yellow-400 text-2xl">AsiaLink Cars</p>
              <p>
                A web and mobile platform for AsiaLink Cars (sub company of
                AsiaLink) that deals and sell pre-loved vehicles.
              </p>
              <div className="flex flex-row mt-10">
                <a
                  target="_blank"
                  href="https://asialinkcars.com"
                  className="mr-10 text-xl text-blue-500"
                >
                  Web
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.asialinkcars.app"
                  className="mr-10 text-xl text-blue-500"
                >
                  Mobile
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-20">
            <img src="/lfl2.png" />
            <img src="/lfl1.png" />
            <div className="flex ml-20 pb-10 justify-end flex-col">
              <p className="text-yellow-400 text-2xl">Living Full Lives</p>
              <p>
                Mobile application for patient and doctors to track medication,
                seizure, sleep. Also has an automated alarm to remind the
                patients about their schedule.
              </p>
              <div className="flex flex-row mt-10">
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.lfl.doctor&hl=en&gl=US"
                  className="mr-10 text-xl text-blue-500"
                >
                  Mobile
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-32 mb-10">
            <p className="text-xl text-yellow-500">
              Some of my noteable projects.{" "}
            </p>
            <a
              target="_blank"
              href="https://littleredrobot.com/work/art-of-fitness/"
            >
              : Samsung Galaxy Watch Active 2. with Little Red Robot.
            </a>

            <a
              target="_blank"
              href="https://littleredrobot.com/work/subsea-connect/"
            >
              : BHGE - Subsea Connect. with Little Red Robot.
            </a>
            <a target="_blank" href="https://roommateswithkids.com">
              : Roommates with kids
            </a>
          </div>
          <div className="flex justify-center items-end mt-32 mb-10">
            <p>
              Interested to see more? Get in touch with me by sending an email-
              <a
                href="mailto:johnmaclained@gmail.com"
                className="text-blue-500"
              >
                johnmaclained@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center text-white">
          <p>Made using NEXT.JS, TailwindCSS</p>
          <p>Copyright 2021</p>
        </div>
      </main>
    </div>
  );
}
