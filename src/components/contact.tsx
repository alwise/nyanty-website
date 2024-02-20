/* eslint-disable react/no-unescaped-entities */

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { navs } from "@/lib/utils"

export function Contact() {
  return (
    <div id={navs.contactUs.id} className="w-full py-12 lg:py-16 flex justify-center bg-gray-100 dark:bg-gray-900">
      <div className="container grid items-start gap-12 px-4 md:gap-16 md:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Contact us</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Want to get in touch? We'd love to hear from you. Fill out the form below to send us a message.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter your company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter your location" />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button className="bg-black text-white rounded-xl hover:opacity-90">Send message</Button>
          </form>
        </div>
        <div className="flex items-center">
          <div className="w-full aspect-[1/1] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800/40">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7942.0643361333305!2d-0.23794125000000002!3d5.5622505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99e20547a5b3%3A0xb793e32e6526cfe!2sAbosseyokai%2C%20Accra!5e0!3m2!1sen!2sgh!4v1708429786258!5m2!1sen!2sgh" width="600" height="450" style={{
              border: 0,
              width: "100%",
              height: "100%"
            }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <div /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
