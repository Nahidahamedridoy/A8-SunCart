"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserData() {

    const onSubmit = async (e) => {

        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        // console.log({ name, image,  } , "hello");

        await authClient.updateUser({
            name,
            image,
        });
        
    }

    return (
        <Modal>
            <Button variant="secondary"><BiEdit /> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser />
                            </Modal.Icon>
                            <Modal.Heading>Update User</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField className="w-full">
                                        <Label>Name</Label>
                                        <Input name="name" placeholder="Enter your name" />
                                    </TextField>

                                    {/* <TextField className="w-full">
                                        <Label>Email</Label>
                                        <Input name="email" placeholder="Enter your email" />
                                    </TextField> */}

                                    <TextField className="w-full">
                                        <Label>Photo URL</Label>
                                        <Input name="image" placeholder="Enter your photo url" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}