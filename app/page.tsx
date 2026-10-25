import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen ">
    {/*TODO: OTP verification || passkey modal */}
      <section className="remove-scrollbar flex  flex-col lg:w-1/2">
        <div className="mx-auto flex min-h-screen  max-w-[496px] flex-col justify-center px-6 py-10">
          <Image
            src="/assets/icons/logo-full.jpg"
            height={1000}
            width={1000}
            alt="MedLink"
            priority
            className="mb-10 h-10 w-fit "
          />

          <PatientForm />

          <div className="mt-auto flex items-center justify-between gap-4 pt-10 text-14-regular">
            <p className="text-dark-600">© 2026 MedLink All rights reserved.</p>
            <Link href="/?admin=true" className="shrink-0 text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboardingpage.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
