// Import your image
import rachelPhoto from 'src/assets/rachel.jpg';
import Contact from 'src/components/Contact';

const Home = () => {
  return (
    <div className="xl:flex px-4 pb-14 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="xl:flex xl:min-h-screen xl:h-screen">
          <img className="object-cover drop-shadow-md" src={rachelPhoto} alt="Rachel" />
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center xl:p-24 p-7">
        <div className="font-light w-full xl:w-auto">
          <p className="text-3xl xl:text-4xl text-amber-900 font-light">
            I am a writer and storyteller. I'm interested in the why behind businesses.
          </p>
          <p className="text-xl xl:text-2xl xl:mt-10 mt-5">
            Narratives fascinate me - we are our stories, after all! I create compelling narratives to amplify a brand's influence. My background in
            PR has equipped me with a passion for nurturing relationships and the expertise to develop high-quality content that draws people in.
          </p>
          <p className="text-xl xl:text-2xl xl:mt-10 mt-5">
            I write for various industries - retail, tech, climate, leadership - and am skilled in SEO content development, web and ad copywriting,
            email marketing, and social media marketing.
          </p>
          <div className="flex xl:justify-start justify-center">
            <button className="text-xl xl:text-2xl xl:mt-10 mt-5 outline  outline-offset-4 outline-gray-400 p-2">
              <Contact text="Get in touch" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
