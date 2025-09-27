const Story: React.FC = () => {


  return (
    <section className=" pt-16 ">
      <div className=" flex flex-col-reverse md:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="w-full md:w-[60%]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            The Origami Story Behind Our Brand
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            At <span className="font-semibold text-mindlab-red-dark">MindLab</span>, we chose origami as our symbol, a timeless art form that reflects the essence of transformation, precision, and purposeful creation.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Origami begins with a single sheet, plain, unmarked, full of potential. Through deliberate folds, it transforms into something remarkable: a crane, a blossom, a powerful shape born of patience, vision, and mastery.
              This mirrors the journey of businesses and individuals we work with—starting from potential, guided by strategic insight, and transformed into resilient, refined, and high-performing entities.
          </p>
         
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            In consulting and training, like origami, every fold counts. Every intervention, every session, and every decision shapes the outcome. Our role is to bring structure to complexity, turning flat challenges into structured opportunities—sculpting growth through thoughtful transformation.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Origami is not just art—it is strategy in motion, and that’s exactly what we deliver!
          </p>
        </div>

        {/* Image Content */}
        <div  className="flex justify-center w-full md:w-[40%]">
          <img
            src="/mindlab3.webp" // replace with your actual path
            alt="Origami Crane"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
