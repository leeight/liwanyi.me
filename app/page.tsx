import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-10">
            <div className="flex-shrink-0">
              <Image
                alt="Li Wanyi"
                className="object-cover"
                height={178}
                width={128}
                src="/me.jpg"
                style={{
                  aspectRatio: "128/178",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex-1 space-y-4 md:space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Li Wanyi</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                  6th Grade, 11 years old
                </p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <h2 className="text-lg md:text-xl font-semibold">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hi, I&apos;m Li Wanyi! I&apos;m a 6th grade student who loves
                  reading adventure books, watching sci-fi movies, and playing
                  soccer with my friends.
                  <br />
                  In my free time, you can find me exploring the outdoors,
                  drawing in my sketchbook, or learning how to code. <br />
                  I&apos;m always curious to learn new things and try new
                  activities. <br />
                  You can reach out to me via email:&nbsp;
                  <a href="mailto:hello@liwanyi.me">hello@liwanyi.me</a>
                </p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <h2 className="text-lg md:text-xl font-semibold">Favorites</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
                      Books
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                      Harry Potter, Percy Jackson, The Hunger Games
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
                      Movies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                      Star Wars, Marvel, Studio Ghibli
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
                      Activities
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                      Soccer, Drawing, Coding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
