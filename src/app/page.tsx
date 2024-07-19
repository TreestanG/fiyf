'use client';

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string()
    .min(2, {
      message: "First name must be at least 2 characters long",
    }),
  email: z.string()
    .email({
      message: "Invalid email address",
    }),
  message: z.string()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
})


export default function Home() {

  const [messaged, setMessaged] = useState(false)

  let images = [
    '/food.webp',
    '/happy-woman.webp',
    '/volunteer.webp',
    '/sticker.webp',
    '/people-chain.webp'
  ]

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setMessaged(false)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
      if (data.message === 'Success') {
        setMessaged(true)
      } else {
        setMessaged(false)
      }
    })
  }

  return (
    <main className="min-h-screen items-center w-screen flex justify-center flex-col">
      {/* Hero */}
      <div className="w-screen flex items-center justify-center min-h-screen lg:min-h-[75vh] p-6 bg-hero-pattern bg-cover bg-no-repeat mb-20">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/3 z-10 text-white">
          <h1 className="text-5xl font-bold text-center">Fremont Inspire Youth Foundation</h1>
          <span className=" text-center tracking-wide leading-loose pt-8">Our mission is to give all students the chance to learn and fulfil their educational ambitions. We want students to feel like they have a friend and a mentor who would guide them through their educational journey. We also want to support the teachers in their ability to help each individual student in their classrooms.</span>
          <div className="flex gap-4 pt-6">
          </div>
          <Button variant="outline" className="mt-4 text-black">Learn More</Button>

        </div>
      </div>

      {/* FAQ */}

      <div className="flex gap-8 md:gap-20 p-6 flex-col items-center lg:flex-row  my-20">
        <div className="">
          <Image src="/office-table.png" width={700} height={800} alt="mockup" className="rounded-xl" sizes="(max-width: 640px) 100vw, 50vw" />
        </div>
        <div className="lg:w-[30rem]">
          <h3 className="text-3xl font-bold ">About Fremont Inspire Youth Foundation</h3>
          <p className="text-lg text-neutral-600 mt-6">Our nonprofit organization serves the Alameda County community in California. We focus on teaching the younger generation different useful subjects.</p>
          <p className="text-lg text-neutral-600 mt-4">We strive to uplift and empower individuals every day.</p>

          <Button variant="default" className="mt-4 w-full lg:w-auto">Contact</Button>
        </div>
      </div>
      <div className="bg-background w-full px-16 md:px-20 my-20">
        <Carousel opts={{
          loop: true,
          align: "start"
        }} className=" bg-background flex w-full justify-center py-20">
          <CarouselContent className="">
            {
              images.map((image, index) => (
                <CarouselItem key={index} className="w-full flex justify-center md:basis-1/2">
                  <Image src={image} width={800} height={800} alt="mockup" className="rounded-xl object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </CarouselItem>
              ))
            }

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-full lg:w-1/2 text-neutral-800 py-20 p-6">
        <h2 className="text-4xl font-bold relative">FAQ&apos;s</h2>

        <h3 className="text-xl lg:text-2xl font-bold mt-8">What is the Fremont Inspire Youth Foundation?</h3>
        <span className="text-lg text-neutral-700 leading-relaxed tracking-wide">Fremont Inspire Youth Foundation is an educational organization which prioritizes the development of elementary school students&apos; educational quality. The FIYF is a teacher support program that focuses on giving kids the quality help that they need individually to achieve academic success. </span>
        <h3 className="text-xl lg:text-2xl font-bold mt-4 ">What does this foundation do?</h3>
        <span className="text-lg text-neutral-700 leading-relaxed tracking-wide">This foundation helps the fellow kindergarten students of James Leitch Elementary gain a better understanding of the lessons taught during school. Now that they have a full day of school, it can be difficult for just one teacher to teach twenty-four students alone. This system doesn’t allow students to fully comprehend the concepts being taught. To assist  their teachers, highschooler mentors will work one on one with a student once every week to provide a better understanding of the concept. Highschool mentors will support the students for the whole school year.</span>
        <h3 className="text-xl lg:text-2xl font-bold mt-4 ">What lessons will be covered?</h3>
        <span className="text-lg text-neutral-700 leading-relaxed tracking-wide">The lessons will be provided by the teacher based on what they have been working on during class. They will follow the basic kindergarten curriculum; common core math and ELA.</span>
        <h3 className="text-xl lg:text-2xl font-bold mt-4 ">How will the lessons be taught?</h3>
        <ul className="text-lg list-disc list-inside">
          <li>Online - using zoom or google meet</li>
          <li>Weekly</li>
          <li>Based on what teacher says</li>
          <li>The mentors will organize times and dates with the students family</li>
          <li>You will be provided a slideshow of material to cover in each zoom call</li>
        </ul>
      </div>
        
      
      <div className="w-full bg-blue-200 flex justify-center">
        <div className='flex justify-center gap-8 flex-col lg:flex-row lg:px-8 items-center mb-20 p-6 md:p-20'>
          <div className=' w-full lg:w-[35rem] '>
            <h2 className='text-body-text font-semibold text-md uppercase text-neutral-500'>Contact Us</h2>
            <h3 className='text-2xl text-neutral-800 font-semibold leading-tight pb-6'>Reach out to us using the contact form. We are here to help with any questions or support you may need.</h3>
          </div>
          <div className="lg:max-w-[35rem] w-full flex flex-col items-center">
            <h2 className="font-bold text-3xl mb-4">Send us a message!</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <div className="grow flex gap-4 w-full">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input  {...field} className="bg-gray-50 text-black border-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-1/2">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input  {...field} className="bg-gray-50 text-black border-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea  {...field} className="bg-gray-50 text-black border-none resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <button type="submit" className="bg-primary py-2 font-semibold rounded-lg hover:opacity-80 text-white">Send Message</button>
                {
                  messaged && <p className="text-green-500">Sent message! We'll reply through the email you provided!</p>
                }
              </form>
            </Form>
          </div>
        </div>
      </div>
      


      {/* Features */}

    </main>
  );
}
