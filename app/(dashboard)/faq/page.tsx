"use client";

import Image from "next/image";

// components
import FAQItem from "./FAQItem";

// images
import IMG_beach_floaty from "@/public/images/pages/faq/pink-flamingo-swim-ring.jpg";
import { useEffect, useRef, useState } from "react";
import Button from "@/app/components/Button/Button";

type Props = {};

function FAQ({}: Props) {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formHeight, setFormHeight] = useState<number>(5);

  const formRef = useRef(null);

  useEffect(() => {
    setFormHeight(formRef.current.clientHeight);
  }, []);

  const handleSubmit = (e: React.FormEvent, email: string, message: string) => {
    e.preventDefault();

    console.log(email, message);
  };

  return (
    <main>
      <div className="mx-4 md:w-5/6 md:mx-auto">
        <h1 className="font-bold text-4xl text-primary text-center mb-10">
          FAQ
        </h1>
        <FAQItem
          title="How do I book tickets for an event?"
          text="Booking tickets for an event on Explovents is as simple as finding your desired event, selecting your tickets, completing the checkout process, and receiving your confirmation via email. Enjoy your event hassle-free!"
        />
        <FAQItem
          title="What payment methods are accepted on Explovents?"
          text="Explovents accepts various payment methods, including credit/debit cards, PayPal, and other secure online payment options. Enjoy convenient and secure payment processing for your event bookings!"
        />
        <FAQItem
          title="Can I cancel or modify my booking?"
          text="Yes, you can easily cancel or modify your booking on Explovents. Simply log in to your account, navigate to your bookings, and follow the prompts to make changes or cancel your reservation as needed."
        />
        <FAQItem
          title="Is there an age restriction for attending events?"
          text="Age restrictions for events on Explovents vary depending on the specific event and its organizers. Please check the event details for any age requirements or restrictions before booking your tickets."
        />
        <FAQItem
          title="What happens if an event gets cancelled?"
          text="If an event is cancelled, Explovents will notify you via email and provide information on the cancellation process. You will typically receive a full refund for your booking, and our customer support team is available to assist you with any questions or concerns you may have."
        />
        <FAQItem
          title="Do I need to print my tickets, or can I show them on my phone?"
          text="You can easily show your tickets on your phone when attending events booked through Explovents. Simply present the electronic tickets on your mobile device at the event venue for entry. No need to print!"
        />
        <FAQItem
          title="Are there any hidden fees associated with booking tickets?"
          text="No, there are no hidden fees associated with booking tickets on Explovents. The price you see displayed for each ticket includes all applicable taxes and fees. Enjoy transparent pricing and hassle-free booking!"
        />
        <FAQItem
          title="Can I get a refund if I can't attend an event?"
          text="Refund policies vary depending on the specific event and its organizers. Some events may offer refunds for cancellations made within a certain timeframe before the event date, while others may have a no-refund policy. Please review the event's refund policy before booking your tickets. If you have any questions or need assistance with a refund request, our customer support team is here to help."
        />
        <FAQItem
          title="How do I find out about upcoming events in my area?"
          text="To discover upcoming events in your area, simply visit Explovents and browse our wide selection of listings. Use our intuitive search function to find events tailored to your preferences, whether it's a boat party in Ayia Napa or a beach bash in Zante. With Explovents, exploring local events has never been easier!"
        />
        <FAQItem
          title="Is there a rewards system for frequent users of the platform?"
          text="At the moment, Explovents does not have a rewards system for frequent users. However, we are continuously exploring ways to enhance the user experience and may consider implementing such a system in the future. Stay tuned for updates on any new features or rewards programs!"
        />
        <div className="mt-20 md:w-3/4 mx-auto my-8" id="contact">
          <h3 className="text-2xl font-bold mb-4">
            Require additional assistance? Don&apos;t hesitate to fill out this
            form.
          </h3>
          <div className="grid lg:grid-cols-2 gap-x-4">
            <form
              className="content-between"
              onSubmit={(e) => handleSubmit(e, email, message)}
              ref={formRef}
            >
              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  cols={30}
                  rows={10}
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </label>
              <Button text={"Send"} type="submit" />
            </form>
            <div className="relative hidden lg:block">
              <Image
                className="rounded-md object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={IMG_beach_floaty}
                alt="Pink Flamingo swim ring in water."
                quality={100}
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
