import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";




const AdmissionForm = () => {
    const { user } = useContext(AuthContext);
    const handleAddItem = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const your_name = form.your_name.value;
        const subject = form.subject.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const dateOfBirth = form.dateOfBirth.value;
        const admit = { email, your_name, subject, phone, address, dateOfBirth }

        fetch('https://college-booking-server-sable.vercel.app/admit', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admit)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${your_name} Admission Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="mb-20">
            <div className="mt-10 border-2 border-[#f9bf00] w-2/3 mx-auto py-10 rounded-lg">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Admit Now</h2>
                <div className="flex items-center justify-center ">
                    <form onSubmit={handleAddItem} className="flex flex-col gap-5 md:gap-10 justify-center">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Your Email</span>
                                    </label>
                                    <label>
                                        <input type="email" name="email" placeholder="Your Email" defaultValue={user.email} className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Your Name</span>
                                    </label>
                                    <label>
                                        <input type="text" name="your_name" placeholder="Your Name" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Subject</span>
                                    </label>
                                    <label>
                                        <input type="text" name="subject" placeholder="Subject Name" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Phone</span>
                                    </label>
                                    <label>
                                        <input type="text" name="phone" placeholder="Your Phone Number" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Address</span>
                                    </label>
                                    <label>
                                        <input type="text" name="address" placeholder="Your Address" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="label">
                                        <span className="font-bold">Date of Birth</span>
                                    </label>
                                    <label>
                                        <input type="text" name="dateOfBirth" placeholder="Date Of Birth" className="h-[50px] rounded-lg px-4 md:w-[350px] w-[280px]  bg-gray-200" required />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <input type="submit" className='btn btn-warning' value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;