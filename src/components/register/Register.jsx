import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";
import { createNewUser, isUserAlreadyInDb } from "../firebase/realtimeDb";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [type, setType] = useState("");
    const [college, setCollege] = useState("");

    const { user } = UserAuth();

    const handleSubmit = async () => {
        // Check if user is already registered
        // let isUserRegistered = !!(await isUserAlreadyInDb(user.uid));

        // If not, register the user

        const newUser = {
            uid: user.uid,
            name,
            email,
            gender,
            mobile_no: phone,
            city,
            type,
            college_name: college,
        };

        const res = await createNewUser(newUser);
        navigate("/");
    };

    useEffect(() => {
        if (user) {
            isUserAlreadyInDb(user.uid).then((res) => {
                if (res) {
                    navigate("/");
                }
            });
            setName(user.displayName);
            setEmail(user.email);
        }
    }, [user]);

    //   useEffect(() => {
    //     (async () => {
    //       const res = await createNewUser({
    //         uid: '98897686',
    //         name: '123',
    //         email: '123',
    //       });
    //     })();
    //   }, []);

    return (
        <div className="bg-contain bg-center-top bg-no-repeat w-full mx-auto bg-[#0F1B33] text-white gap-[10rem] flex flex-col justify-center items-center">
            <div className="text-2xl">Register</div>
            <div className=" w-[95%] justify-center p-2  bg-[#D9D9D920] rounded-md">
                <div className="text-center">SIGN UP</div>
                <div className="mt-4">
                    <div className="mb-3">
                        <div>Name</div>
                        <div className="w-full">
                            <input
                                className="w-full rounded-md h-10 text-black px-2 "
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>Email</div>
                        <div className="w-full">
                            <input
                                className="w-full rounded-md h-10 text-black px-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>Gender</div>
                        <div className="w-full"></div>
                    </div>
                    <div className="mb-3">
                        <div>Phone Number</div>
                        <div className="w-full">
                            <input
                                className="w-full rounded-md h-10 text-black px-2"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>City</div>
                        <div className="w-full">
                            <input
                                className="w-full rounded-md h-10 text-black px-2"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div>Enter Type</div>
                        <div className="w-full"></div>
                    </div>
                    <div className="mb-3">
                        <div>College Name</div>
                        <div className="w-full">
                            <input
                                className="w-full rounded-md h-10 text-black px-2"
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full m-auto justify-center text-center">
                        <button
                            className="w-[50%] rounded-md h-10 bg-[#0F1B33] text-white cursor-pointer"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
