import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
// import Modal from "react-bootstrap/Modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter the title.",
  }),
  description: z.string().min(1, {
    message: "Please enter the desciption.",
  }),
});

const UserPopup = (props) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { onHide, dialogData, onUpdate } = props;
  const [modalData, setModalData] = useState(dialogData);
// console.log('dialogDat userPopupa', dialogData)
  useEffect(() => {
    setModalData(dialogData);
  }, [dialogData]);

  const handlePopupUpdate = (values) => {
    setModalData([...modalData, {title: values.title, description: values.description}])
    // console.log('modalDat', modalData)
    onUpdate(modalData);
    onHide();
  };

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Dialog>
          <DialogTrigger
            className=" cursor-pointer bg-[gray] font-medium rounded-md 
                    text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 has-[>svg]:px-3 text-sm"
          >
            {/* <Button
              type="submit"
              className="btn bg-[gray]"
              onClick={HandlePopupEdit}
            > */}
            Edit in Popup
            {/* </Button> */}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update</DialogTitle>
              {/* <DialogDescription> */}
                {/* <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="User Title"
                        autoFocus
                        value={modalData?.title || ""}
                        onChange={(e) => setModalData({...modalData, title: e.target.value})}
                    />
                    </Form.Group>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={modalData?.description || ""}
                    onChange={(e) => setModalData({...modalData, description: e.target.value}  )} />
                    </Form.Group>
                </Form> */}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handlePopupUpdate)}
                    className="space-y-8 mt-3"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Enter the Title" value={dialogData?.title || ""} {...field} />
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
                            <Input
                              placeholder="Enter the Description"
                              {...field}
                              value={dialogData?.Description || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="ml-4">
                      <Button variant="secondary" className='cursor-pointer' onClick={onHide}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        className="btn bg-[green] text-white mx-2 cursor-pointer"
                        // onClick={handlePopupUpdate}
                      >
                        Update
                      </Button>
                    </div>
                  </form>
                </Form>
              {/* </DialogDescription> */}
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {/* <Modal show={show} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Title"
                autoFocus
                value={modalData?.title || ""}
                onChange={(e) => setModalData({...modalData, title: e.target.value})}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={modalData?.description || ""}
              onChange={(e) => setModalData({...modalData, description: e.target.value}  )} />
            </Form.Group>
          </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Cancel</Button>
            <Button variant="primary" onClick={handlePopupUpdate}>Update</Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </>
  );
};

export default UserPopup;
