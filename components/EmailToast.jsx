"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function EmailToast() {
  const { toast } = useToast()

  return (
    <Button
      type="submit"
      onClick={() => {
        toast({
          title: "Contact Form Submitted Successfully",
          description: "Your message has been successfully sent. Thank you for reaching out to me!",
        })
      }}
    >
      Send
    </Button>
  )
}
