import React from 'react';
import { Button } from "@/components/ui/button";
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
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const navigate = useNavigate()
  function onSubmit(values) {
    let user = JSON.parse(localStorage.getItem('user'));
    
    console.log(user.name);
    if (user.name === values.username) {
        navigate("/main/dash");
      } else {
        form.setError('username', {
            type: 'manual',
            message: 'Username mismatch',
        });
        // navigate("/404");
      }
  }
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 p-8">

        <div className="max-w-md">
          <h2 className="text-2xl font-semibold">Add Your Portfolio</h2>
        </div>

        <div className=" max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-wrap">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter User Name" {...field} className="w-64" />
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
        </div>
      </div>
    </>
  );
}

export default Login;
