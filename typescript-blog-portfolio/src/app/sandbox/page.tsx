import BaseLayout from "@/components/Layouts/base-layout";
import Link from "next/link";

const Sandbox = () => {
  return (
    <BaseLayout>
      <div>
        <h1>Sandbox Page</h1>
        <Link href='/sandbox/form'>
        <h1>Form</h1>
        </Link>
      </div>
    </BaseLayout>
  );
};

export default Sandbox