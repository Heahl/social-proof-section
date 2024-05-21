import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const ratings = [
    { id: 1, name: "Reviews" },
    { id: 2, name: "Report Guru" },
    { id: 3, name: "BestTech" },
  ];

  const reviews = [
    {
      id: 1,
      img: "/images/image-colton.jpg",
      name: "Colton Smith",
      text: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      id: 2,
      img: "/images/image-irene.jpg",
      name: "Irene Roberts",
      text: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    },
    {
      id: 3,
      img: "/images/image-anne.jpg",
      name: "Anne Wallace",
      text: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    },
  ];

  return (
    <>
      <Head>
        <title>Social Proof Section</title>
        <meta name="description" content="social-proof-section" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-16 font-league">
        {/* Mobile BG */}
        <Image
          className="absolute left-0 top-0 z-0 block w-full lg:hidden"
          src={"/images/bg-pattern-top-mobile.svg"}
          height={100}
          width={100}
          alt="Mobile-Background"
        />
        <Image
          className="absolute bottom-0 right-0 z-0 block w-full lg:hidden"
          src={"/images/bg-pattern-bottom-mobile.svg"}
          height={100}
          width={100}
          alt="Mobile-Background"
        />
        {/* Desktop BG */}
        <Image
          className="absolute left-0 top-0 z-0 hidden w-full -translate-x-1/2 lg:block"
          src={"/images/bg-pattern-top-desktop.svg"}
          height={100}
          width={100}
          alt="Desktop-Background"
        />
        <Image
          className="absolute bottom-0 right-0 z-0 hidden w-full lg:block"
          src={"/images/bg-pattern-bottom-desktop.svg"}
          height={100}
          width={100}
          alt="Desktop-Background"
        />
        <div className="mx-6 my-6 flex flex-col md:mx-24 lg:mx-32 lg:my-24 lg:flex-row lg:flex-wrap">
          <div className="flex flex-col gap-6 md:flex-row lg:gap-0">
            {/* Header + Text */}
            <div className="flex flex-col md:mr-16 md:w-56 md:pr-4 lg:w-4/5 lg:pr-24">
              <h1 className="mx-5 my-3 text-center text-4xl font-bold leading-8 text-very-dark-magenta md:mx-0 md:pr-0 lg:mx-0 lg:pr-12 lg:text-start lg:text-6xl">
                10,000+ of our users love our products.
              </h1>
              <p className="my-6 text-center text-xl tracking-tight text-dark-grayish-magenta lg:text-start">
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </div>
            {/* Ratings */}
            <div className="my-1 mb-4 flex -translate-x-10 flex-col items-center gap-3 md:w-4/5 md:items-end md:justify-evenly lg:justify-center">
              {ratings.map((rating, index) => (
                // Rating
                <div
                  key={rating.id}
                  className={`flex h-20 w-full max-w-[500px] translate-x-10 flex-col items-center justify-evenly rounded-lg bg-light-grayish-magenta md:min-w-[420px] md:flex-row md:items-center md:justify-center md:gap-6 md:px-4 rating-${index}`}
                >
                  <div className="flex flex-row gap-2 pt-1 md:pt-0">
                    {Array.from({ length: 5 }, (_, i) => i).map((_, i) => (
                      <Image
                        className="w-5"
                        key={i}
                        src={`/images/icon-star.svg`}
                        height={100}
                        width={100}
                        alt="Rating-Icon"
                      />
                    ))}
                  </div>
                  <h2 className="lg:w-58 text-lg font-semibold text-very-dark-magenta">
                    Rated 5 Stars in {rating.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* Reviews */}
          <div className="my-8 flex flex-col lg:flex-row lg:gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                style={{ transform: `translateY(${index * 40}px)` }}
                className="my-2 flex flex-col gap-6 rounded-xl bg-very-dark-magenta px-6 py-9"
              >
                <div className="flex flex-row content-around gap-6">
                  <Image
                    className="w-12 rounded-full"
                    src={review.img}
                    height={100}
                    width={100}
                    alt="User-Image"
                  />
                  <div>
                    <h3 className="font-bold tracking-wide text-white">
                      {review.name}
                    </h3>
                    <h4 className="font-medium text-soft-pink">
                      Verified Buyer
                    </h4>
                  </div>
                </div>
                <p className="text-light-grayish-magenta">
                  &quot; {review.text} &quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
