import { Button } from "@/components/ui/button";
import { Clock4, MapPin, Phone } from "lucide-react";

const ContactPage = () => {

    return (
        <>
            <div className="flex flex-col items-center mt-5 gap-5 lg:gap-10">
                <div className="text-center max-w-[80%] lg:max-w-3xl space-y-2">
                    <h1 className="text-xl lg:text-3xl font-semibold">Unlock the Full Potential of Photorealistic Rendering</h1>
                    <p className="text-xs lg:text-lg text-[#9F9F9F]">
                        Our team specializes in bridging the gap between technical innovation and artistic vision.
                        Whether you need consulting, custom solutions, or integration support—we’ve got you covered.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-5 lg:p-10 gap-5">
                    <div role="contact" className="flex flex-wrap sm:flex-col gap-5 lg:gap-10">
                        <div className="flex gap-2">
                            <MapPin size={30} />
                            <div className="space-y-1">
                                <h1 className="text-md lg:text-xl">Address</h1>
                                <p className="text-xs lg:text-md">
                                    236 5th SE Avenue, <br />
                                    New York NY10000, <br />
                                    United States
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Phone size={30} />
                            <div className="space-y-1">
                                <h1 className="text-md lg:text-xl">Phone</h1>
                                <p className="text-xs lg:text-md">
                                    Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Clock4 size={30} />
                            <div className="space-y-1">
                                <h1 className="text-md lg:text-xl">Working Time</h1>
                                <p className="text-xs lg:text-md">
                                    Monday-Friday: 9:00 - 17:00 <br />
                                    Saturday-Sunday: 9:00 - 16:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <form action="#" role="contact-form" className="flex flex-col gap-5">
                        <label htmlFor="name">Your name</label>
                        <input type="text" className="px-4 py-2 focus-within:outline-none border rounded-md min-w-0 lg:min-w-sm" required placeholder="Abc" />
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="px-4 py-2 focus-within:outline-none border rounded-md min-w-0 lg:min-w-sm" required placeholder="Abc@def.com" />
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="px-4 py-2 focus-within:outline-none border rounded-md min-w-0 lg:min-w-sm" required placeholder="This is optional" />
                        <label htmlFor="message">Message</label>
                        <textarea className="px-4 py-2 focus-within:outline-none border rounded-md min-w-0 lg:min-w-sm" required placeholder="Hi I'd like to ask about" />
                        <div role="submit" className="mt-5">
                            <Button className="bg-amber-700 border border-amber-700 px-8 h-8 rounded-sm cursor-pointer hover:bg-transparent hover:text-amber-700">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;