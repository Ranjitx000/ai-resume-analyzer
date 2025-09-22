import Navbar from "~/component/Navbar";

import { resumes } from "content";
import ResumeCard from "~/component/ResumeCard";
import { useEffect } from "react";
import {  useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}) {
  return [
    { title: "ai-resume" },
    {
      name: "description",
      content: "smart feedback from your job application",
    },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();

  const navigate = useNavigate();

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section ">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="  flex flex-wrap gap-10 justify-center ">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume}  />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
