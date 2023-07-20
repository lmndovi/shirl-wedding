import Link from "next/link";

export default function ErrorPage() {
  return (
    <div>
      <h1>Error in Submission</h1>
      <p>There was an error submitting your RSVP.</p>
      <Link href="/">Go back to homepage</Link>
    </div>
  );
}
