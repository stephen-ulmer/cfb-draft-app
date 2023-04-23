"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
export default function AuthShowcase () {
  const { data: sessionData } = useSession();

  return (
    <div className="flex items-center ap-4">
      <p className="text-center">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
