// src/Pages/AboutUs.jsx
import React from 'react';
import Footer from '../Components/Footer'; 



import img1 from '../assets/faculty/img1.jpg';
import img2 from '../assets/faculty/img2.jpg';
import img3 from '../assets/faculty/img3.png';
import img4 from '../assets/faculty/img4.jpg';
import img5 from '../assets/faculty/img5.jpg';
import img6 from '../assets/faculty/img6.jpg';

import infoBg from '../assets/Info.png';

import communityImage1 from '../assets/community/image1.png';
import communityImage2 from '../assets/community/image2.png';
import communityImage3 from '../assets/community/image3.png';
import communityImage4 from '../assets/community/image4.png';
import communityImage5 from '../assets/community/image5.png';

import communityPE  from '../assets/community/PE.png';  


function AboutUs() {
  const facultyMembers = [
    { name: "Mr. Dan Ansah", title: "Headmaster", image: img1 },
    { name: "Mr. Ofori Ansah", title: "Ass. Headmaster", image: img2 },
    { name: "Mr. Ofori Ansah", title: "Head Teacher", image: img3 },
    { name: "Mr. Dan Ansah", title: "Headmaster", image: img4 },
    { name: "Mr. Ofori Ansah", title: "Ass. Headmaster", image: img5 },
    { name: "Mr. Ofori Ansah", title: "Head Teacher", image: img6 },
  ];

  const communityImages = [
    communityImage1,
    communityImage2,
    communityImage3,
    communityImage4,
    communityImage5,
  ];

  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section with Background Image and Overlay */}
      <div
        className="bg-cover bg-center text-white py-24 sm:py-32 md:py-48 relative overflow-hidden mt-16"
        style={{ backgroundImage: `url(${infoBg})`}}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="absolute bottom-0 left-0 z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 pb-8">
               <div className="max-w-3xl text-left">
                 <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Learn More
                 </h1>
                 <h2 className="text-3xl sm:text-4xl md:text-8xl font-extrabold font-abril uppercase bg-[#800020] inline-block px-4 py-2 rounded-md">
                      ABOUT US
                 </h2>
               </div>
            </div>
         </div>
      </div>

      <main className="flex-grow">
         {/* Who Are We? Section */}
         <section id="who-are-we" className="py-12 px-4 bg-gray-50">
              <div className="max-w-7xl mx-auto">
             
                <div className="flex flex-col md:flex-row items-stretch gap-2">
                      
                   <div className="md:w-1/7 text-left md:border-r-4 md:border-[#800020] pr-1">
                     <h2 className="text-5xl sm:text-6xl md:text-7xl font-abril font-bold text-[#800020] leading-none">
                      <span className="block">Who</span>
                      <span className="block">Are</span>
                      <span className="block">We?</span>
                     </h2>
                   </div>

                  
                   <div className="md:w-2/3 pl-4">
                     <p className="text-2xl text-gray-700 leading-relaxed">
                        Founded in 2011, Fidif School Complex is a respected educational institution
                        located in Teiman Abokobi, providing quality Pre School, Primary, and Junior
                        High School (JHS) education. We are committed to nurturing well-rounded
                        students through the Ghana Education Service (GES) curriculum, combining
                        academic excellence with strong values. Our supportive learning environment
                        is designed to build a solid foundation for future success.
                     </p>
                     <p className="text-2xl text-gray-700 leading-relaxed">
                        With small class sizes and a team of experienced, GES certified teachers,
                        Fidif emphasizes both hands-on learning and deep theoretical understanding.
                        We focus on developing confident, curious, and capable learners who go on to
                        thrive in academics, leadership, and various professional fields. At Fidif,
                        we are not just educating students, we are shaping futures.
                     </p>
                </div>
              </div>
               
                <img
                  src={communityPE}
                  alt="Students learning together"
                  className="w-full h-auto rounded-lg shadow-lg mt-12 mx-auto max-h-130 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x450/cccccc/000000?text=Who+Are+We+Image"; }}
                />
            </div>
          </section>

          {/* Vision, Mission, Core Values Section */}
          <section className="py-16 px-4 bg-white">
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                 <div className="p-6 rounded-lg shadow-md bg-white border border-gray-200">
                     <h3 className="text-4xl font-semibold text-[#800020] mb-3 underline font-abril">Our Vision</h3>
                     <p className="text-2xl text-gray-700">To provide excellent second-cycle education</p>
                  </div>
                  <div className="p-6 rounded-lg shadow-md bg-white border border-gray-200">
                      <h3 className="text-4xl font-semibold text-[#800020] mb-3 underline font-abril">Our Mission</h3>
                      <p className="text-2xl text-gray-700">To form holistic and responsible citizens for the society through excellent teaching and learning, using state-of-the-art facilities, highly qualified and motivated staff.</p>
                  </div>
                  <div className="p-6 rounded-lg shadow-md bg-white border border-gray-200">
                       <h3 className="text-4xl font-semibold text-[#800020] mb-3 underline font-abril">Our Core Values</h3>
                       <p className="text-2xl text-gray-700 ">Commitment, Dedication, Team Work, Integrity, Excellence</p>
                  </div>
              </div>
          </section>

           {/* Our Faculty Section */}
          <section className="py-16 px-4 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                 <h2 className="text-4xl sm:text-6xl font-bold text-[#800020] text-center mb-10 font-abril">Our Faculty</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                     {facultyMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border border-gray-200">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-56 h-56 rounded-full mb-4 object-cover border-2 border-[#800020]"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/cccccc/000000?text=No+Img"; }}
                              />
                              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                              <p className="text-[#800020] text-lg">{member.title}</p>
                            </div>
                      ))}
                  </div>
                </div>
          </section>

          {/* Our Community Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#800020] mb-6 font-abril">Our Community</h2>
              
              <div className="text-left mb-12">
                <p className="text-2xl text-gray-700 leading-relaxed mb-4">
                  At Fidif School Complex, we foster a respectful and supportive environment
                  where teachers, students, and parents work together as one community. Our
                  teachers serve as mentors and role models, guiding students with care and
                  integrity, while students are encouraged to respect one another and contribute
                  positively to school life.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Parents play an active role through open communication and participation in
                  school activities. This strong partnership between home and school builds
                  trust, harmony, and shared responsibility. Together, we create a nurturing
                  space where learners grow with confidence, character, and a sense of belonging.
                </p>
              </div>

             
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {communityImages.slice(0, 3).map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Community Image ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/cccccc/000000?text=Image"; }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {communityImages.slice(3).map((imgSrc, index) => (
                  <img
                    key={index + 3} 
                    src={imgSrc}
                    alt={`Community Image ${index + 4}`}
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x150/cccccc/000000?text=Image"; }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Inspiring Excellence  */}
          <section className="py-12 px-4 bg-white text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl sm:text-5xl font-acme font-extrabold tracking-wide text-[#800020] ">
                Inspiring Excellence!!
              </h3>
            </div>
          </section>
      </main>

    </div>
  );
}

export default AboutUs;