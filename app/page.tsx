"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Heading,
  Paragraph,
  Subheading,
  Title,
} from "@/components/ui/typography";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-items-center min-h-screen p-8">
      <Title>HODL Helper</Title>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias,
        necessitatibus voluptatum voluptas deleniti blanditiis maxime culpa
        laborum temporibus porro at id itaque illum quasi recusandae? Nisi
        reiciendis dolorum saepe!
      </Paragraph>
      <Button onClick={() => toast.success("success")}>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <div className="flex gap-x-2 items-center">
        <Label htmlFor="in">Input</Label>
        <Input type="text" id="in" className="w-48" />
      </div>
      <Dialog>
        <DialogTrigger>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div className="w-96 h-96"></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
