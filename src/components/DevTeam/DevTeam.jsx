import React, { useEffect } from "react";
let people = [
    {
        name: "Harsh Patel ",
        img: "/dev-team/harsh.jpeg",
        about: "Android App Head",
        position: "(President)",
        lin: "https://www.linkedin.com/in/harshpatel63",
        email: "patelharsh0603@gmail.com",
    },
    {
        name: "Bipin Jadav",
        img: "/dev-team/bipin.jpeg",
        about: "Website Head",
        position: "(Vice President)",
        lin: "https://www.linkedin.com/in/thisisbipin/",
        email: "bipinmjadav087@outlook.com",
    },
    {
        name: "Addala Sanjeevnaidu",
        img: "/dev-team/sanjeev.jpeg",
        about: "Android App Developer",
        lin: "https://www.linkedin.com/in/sanjeevnaidu-addala/",
        email: "addala.sanjeevnaidu@gmail.com",
    },
    {
        name: "Abhishek Verma",
        img: "/dev-team/abhishek.jpeg",
        about: "Android App Developer",
        lin: "https://www.linkedin.com/in/abhishekverma878787/",
        email: "abhishekverma878787@gmail.com",
    },
    {
        name: "Abhinav Upadhyay",
        img: "/dev-team/abhinav.jpeg",
        about: "UI/UX Designer",
        lin: "https://www.linkedin.com/in/abhinav-upadhyay-6793371aa/",
        email: "upadhyayabhinav1978@gmail.com",
    },
    {
        name: "Abhiraj Verma",
        img: "/dev-team/abhiraj.jpg",
        about: "Frontend UI",
        lin: "https://www.linkedin.com/in/abhiraaj-verma/",
        email: "abhiraajverma@gmail.com",
    },
    {
        name: "Raj Naik Dhulapkar",
        img: "/dev-team/raj.jpeg",
        about: "Frontend UI and Registrations Manager",
        lin: "https://www.linkedin.com/in/rajnykdhulapkar/",
        email: "rajdhulapkar3@gmail.com",
    },
    {
        name: "Ankit Singh",
        img: "/dev-team/ankit.jpeg",
        about: "Android App Developer",
        lin: "https://www.linkedin.com/in/ankit-singh-9658511b2/",
        email: "singhankit10455@gmail.com",
    },
    {
        name: "Rahul Jalan",
        img: "/dev-team/rahul.jpeg",
        about: "Firebase Auth Manager",
        lin: "https://www.linkedin.com/in/rahuljalan23/",
        email: "rahuljalan23.rj@gmail.com",
    },
];
const DevTeam = ({ settext }) => {
    useEffect(() => {
        settext(" Coding Club NIT Goa");
    }, []);
    return (
        <div className="mt-[max(80vh,600px)] z-10 flex justify-center items-center flex-col gap-8 w-[100%] text-white">
            <div className="w-full md:w-[75%] flex lg:flex-row  flex-col justify-center items-center text-center md:text-left text-md xl:w-[1280px] mx-auto">
                <div className="h-full flex justify-center items-center  lg:mx-[4rem] my-[3rem] lg:ml-[8rem] max-w-[200px]">
                    <img src="/codingclub-logo.png" alt="" className="rounded-full" />
                </div>
                <div className="w-3/4 md:text-justify text-left">
                    <strong>Coding Club NIT Goa</strong> is a space for all the coding enthusiasts
                    in the institute to teach and learn all there is to know about coding. This
                    club's primary goal is to improve coding skills and motivate students to learn
                    and practice their areas of interest. <br />
                    <br /> In just a short period after its inception, the club has hosted various
                    events such as the alumni talk series, placement preparation strategies, talks
                    related to competitive programming and development, and regularly hosts coding
                    contests and post-contest discussions to sharpen their problem-solving and
                    analytical skills. The club has squads which helps to maintain a competitive
                    spirit among the members.
                </div>
            </div>

            <div className="font-semibold justify-center items-center text-4xl font-lostfish ">
                Dev Team
            </div>
            <div className="flex flex-wrap justify-center">
                {people.map((each) => (
                    <div
                        style={{
                            background:
                                "linear-gradient(271.1deg, rgba(169, 204, 236, 0.2) 37.05%, rgba(90, 125, 154, 0.13) 66.11%)",
                            boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.25)",
                            backdropFilter: "blur(3.5px)",
                            borderRadius: "18px",
                        }}
                        className="m-2 transition-all hover:translate-y-[-10px] w-full max-w-[300px] bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div className="p-5 flex flex-col items-center pb-10 h-full justify-between">
                            <img
                                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                src={each.img}
                                alt="Bonnie image"
                            />
                            <h5 className="mb-1 text-xl font-medium text-white text-center">
                                {each.name}
                            </h5>
                            <span className="text-sm text-center text-gray-400">{each.about}</span>
                            <span className="text-sm text-gray-400">{each.position}</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a
                                    target="_blank"
                                    href={each.lin}
                                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={"mailto:" + each.email}
                                    className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DevTeam;
