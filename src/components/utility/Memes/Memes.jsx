import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const formSchema = z.object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
      }),
  });
const Memes = () => {
     const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          description: "",
        },
      });
    const [allMemes, setAllMemes] = useState([]);
    const [memes, setMeme] = useState({ url: 'https://i.imgflip.com/72epa9.png' });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((results) => {
                setAllMemes(results.data.memes);
            });
    }, []);

    const getMemesImg = (values) => {
        const randomImage = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomImage]?.url;
        setMeme({ url });

        setTitle(values.title);
        setDescription(values.description);
    };

      return (
        <>
            <h4>Memes</h4>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(getMemesImg)} className="space-y-8 flex flex-wrap">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter the Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter the Description" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="ml-4">
              <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>

            <div className='image-container mt-3'>
                <img src={memes.url} className="image-thumbnail" />
                
                <p className='image-title'>{title}</p>
                <p className='image-description'>{description}</p>
            </div>
        </>
      )
}

export default Memes