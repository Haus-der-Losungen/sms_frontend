import { Link } from "react-router-dom";



const Overview = () => {
    return (
      <section className="bg-white py-12 px-6 md:px-16 text-gray-700">
        <div className="max-w-5xl mx-auto space-y-12">
  
          {/* Who Are We */}
          <div>
            <h2 className="text-3xl text-black md:text-4xl font-extrabold mb-2">Who Are We?</h2>
            <p className="text-base md:text-lg mb-4">
              Established in 2011, our school has consistently provided quality education and values-based learning.
            </p>
            <p className="text-base md:text-lg">
              We have proudly graduated students who are excelling in academics, leadership, and various professional fields, reflecting the strength of our teaching and community support.
            </p>
          </div>
  
          {/* Know Our Numbers */}
          <div>
            <h2 className="text-3xl text-black  md:text-4xl font-extrabold mb-2">Know Our Numbers.</h2>
            <p className="text-base md:text-lg mb-4">
              With over 450 students currently enrolled across all levels from crèche to Junior High School our institution has made a lasting academic impact in the Teiman-Abokobi community for more than 10 years.
            </p>
            <p className="text-base md:text-lg mb-4">
              We are proud to be staffed entirely by experienced, GES-certified educators who are committed to delivering quality education and nurturing the holistic development of every child entrusted to our care.
            </p>
            <Link
            to="/about"
            className="inline-block bg-[#800020] text-white py-2 px-4 rounded-full mt-2 text-sm font-semibold hover:bg-[#5e0018]"
          >
            Find Out More &gt;
          </Link>
          </div>
  
          {/* Student Management Portal */}
          <div>
            <h2 className="text-3xl text-black  md:text-4xl font-extrabold mb-2">Student Management Portal</h2>
            <p className="text-base md:text-lg mb-4">
              Our all-in-one School Management System simplifies Fidif School Complex’s administration. From attendance tracking and academic records to transcripts and real-time access to student and staff data, everything is just a click away.
            </p>
            <p className="text-base md:text-lg mb-4">
              Built for efficiency, transparency, and growth so teachers can teach, students can thrive, and parents stay connected.
            </p>
            <Link
            to="/portal"
            className="inline-block bg-[#800020] text-white py-2 px-4 rounded-full mt-2 text-sm font-semibold hover:bg-[#5e0018]"
          >
            Find Out More &gt;
          </Link>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Overview;
  