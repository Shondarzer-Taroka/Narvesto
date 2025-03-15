'use client'
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";

interface FormData {
    name: string;
    email: string;
    telephone?: string;
    subject?: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="flex justify-center items-center h-full ">
            <div className="bg-[#f0e8ff] w-full max-w-lg">
                <h2 className="text-2xl font-bold text-[#3b217c]">Get In Touch With Us</h2>
                <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, adipiscing elit.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block font-medium text-[#3b217c]">Name *</label>
                        <input
                            type="text"
                            placeholder="Your Name.."
                            {...register("name", { required: "This field is required." })}
                            className="w-full border border-[#7a42f4] rounded-lg px-4 py-2 mt-1 outline-none bg-transparent"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email & Telephone */}
                    <div className="flex space-x-4">
                        {/* Email */}
                        <div className="w-1/2 relative">
                            <label className="block font-medium text-[#3b217c]">Email *</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    {...register("email", { required: "This field is required." })}
                                    className="w-full border border-[#7a42f4] rounded-lg px-4 py-2 mt-1 outline-none bg-transparent pr-8"
                                />
                                <AiOutlineMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7a42f4]" />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Telephone */}
                        <div className="w-1/2">
                            <label className="block font-medium text-[#3b217c]">Telephone</label>
                            <input
                                type="tel"
                                placeholder="+7 xxx xxxx"
                                {...register("telephone")}
                                className="w-full border border-[#7a42f4] rounded-lg px-4 py-2 mt-1 outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block font-medium text-[#3b217c]">Subject</label>
                        <input
                            type="text"
                            placeholder="Subject.."
                            {...register("subject")}
                            className="w-full border border-[#7a42f4] rounded-lg px-4 py-2 mt-1 outline-none bg-transparent"
                        />
                    </div>

                    {/* Messages */}
                    <div>
                        <label className="block font-medium text-[#3b217c]">Messages *</label>
                        <textarea
                            placeholder="Write Your Messages Here.."
                            {...register("message", { required: "This field is required." })}
                            className="w-full border border-[#7a42f4] rounded-lg px-4 py-2 mt-1 outline-none bg-transparent h-24"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#7a42f4] text-white py-2 rounded-lg hover:bg-[#5e32c9] transition">
                        Send Messages
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
