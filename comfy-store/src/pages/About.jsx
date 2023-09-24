const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Ecomfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        🌟 Welcome to Ecomfy_store - Where Coziness Meets Commerce! 🌟 At
        Ecomfy, we believe that shopping should be more than just a
        transaction; it should be an experience that wraps you in comfort and
        style. Step into our digital haven of warmth and discover a world where
        shopping is an art form. 
        </p>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        🏡 A Home for Comfort Seekers Our store is more
        than just a marketplace; it's;s a sanctuary for those who seek comfort
        in every purchase. Whether you're looking for snug blankets, fluffy
        pillows, or the coziest loungewear, we've curated a collection that
        turns your space into a haven of relaxation.
        </p>
    </>
  );
};
export default About;
