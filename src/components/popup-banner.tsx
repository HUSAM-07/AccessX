"use client"

import { useState } from "react"
import { GraduationCap } from "lucide-react"
import { Banner } from "@/components/ui/banner"

export function BannerDemo() {
  const [show, setShow] = useState(true)

  return (
    <Banner
      show={show}
      onHide={() => setShow(false)}
      icon={<GraduationCap className="m-px h-4 w-4 text-blue-800" />}
      title={
        <>
          Get early access to <span className="font-semibold">UAE internship opportunities</span> - Sign up with your university email.
        </>
      }
      action={{
        label: "Sign Up",
        onClick: () => window.location.href = "https://internships.ihusam.tech/",
      }}
      learnMoreUrl="https://internships.ihusam.tech/"
    />
  )
}