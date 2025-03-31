import React from 'react';
import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.png";
import loginBg from "../../assets/loginbg.jpg"
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
  username: z.string().min(1, {
    message: "Username can not be empty.",
  }),
  password: z.string().min(1, {
    message: "Password can not be empty.",
  }),
});
const formData = {
  name: "nich",
  password: "1234",
  auth: true
}
function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const navigate = useNavigate()
  function onSubmit(values) {
    if (formData.name === values.username && formData.password === values.password ) {
      
        localStorage.setItem('user', JSON.stringify(formData));
        navigate("/main/dash");
      } else {
        form.setError('username', {
            type: 'manual',
            message: 'Please enter correct username',
        });
        form.setError('password', {
          type: 'manual',
          message: 'Please enter correct password',
      });
        // navigate("/404");
      }
  }
  return (
    <>
    
      <div className="flex flex-wrap justify-center items-center gap-8 p-8  min-h-svh login-landing-page">
      <div className="bg-white border border-gray-200 flex items-center justify-center rounded-lg shadow-sm">
     

        <div className="w-[400px] p-6">
          {/* <img src={logo} alt='Logo' className='w-[50px] h-[50px]' /> */}
           <div className="mb-6 flex justify-center items-center gap-3">
              <img className="w-[50px] h-[50px]" src={logo} alt='My App'  />
                <h2 className="text-2xl">My App</h2>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-center">Welcome to Portfolio</h2>
              <p className="text-balance text-muted-foreground mb-3 text-center">Login to your portfolio account</p>
            </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="User Name: nich" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                   
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="Password: 1234" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
              <Button className="w-full" type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="w-[400px] h-[500px] login-img">
          <img src={loginBg} alt="Image" className=" h-full w-full object-cover max-w-100" /></div>
      </div>
        
      </div>
    </>
  );
}

export default Login;
