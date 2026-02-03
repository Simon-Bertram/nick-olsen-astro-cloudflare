import { Mail } from "lucide-react";

export const Signup = () => {
  return (
    <div className="join">
      <div>
        <label className="validator input join-item">
          <Mail className="h-[1.2em] text-neutral-content" />
          <input type="email" placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <button className="btn join-item btn-accent">Join</button>
    </div>
  );
};
