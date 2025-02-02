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
          We&apos;re launching <span className="font-semibold">WRKFORCE — A platform for accessing internship opportunities in UAE</span> - Get early access. <br />
        </>
      }
      action={{
        label: "Sign Up",
        onClick: () => window.location.href = "https://wrkforceae.com/",
      }}
      learnMoreUrl="https://wrkforceae.com/"
    />
  )
}