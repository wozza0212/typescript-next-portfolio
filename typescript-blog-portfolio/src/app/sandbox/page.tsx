import BaseLayout from "@/components/Layouts/base-layout";
import Link from "next/link";

const Sandbox = () => {
  return (
    <BaseLayout>
      <div>
        <h1>Sandbox Page</h1>
        <Link href="/sandbox/form">
          <h2>Form</h2>
        </Link>
        <Link href="/sandbox/pokedex">
          <h2>Pokedex</h2>
        </Link>
        <Link href="/sandbox/hooks/useState">
          <h2>Basics</h2>
        </Link>
      </div>
    </BaseLayout>
  );
};

export default Sandbox;
