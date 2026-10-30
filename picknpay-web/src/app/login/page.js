"use client";

import { useState } from "react";
import Link from "next/link";
import { authApi } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  // Store the values entered by the user.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Control password visibility and form feedback.
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    // Stop the browser from reloading the page.
    event.preventDefault();

    // Clear feedback from any previous attempt.
    setError("");
    setMessage("");

    const cleanEmail = email.trim();

    // Basic frontend validation.
    if (!cleanEmail || !password) {
      setError("Enter both your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = await authApi.login({ email: cleanEmail, password });
      setMessage(data.message || "Login successful. Redirecting...");

      router.push("/dashboard");
    } catch (error) {
      if (error.status === 422 || error.status === 401) {
        setError(error.data.message || "Invalid email or password.");
      } else if (error.status === 429) {
        setError(
          "Too many login attempts. Please wait a moment and try again.",
        );
      } else {
        setError(
          "An unexpected error occurred. Please check your connection and try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-3 py-4 sm:py-6">
      <section className="glass-panel hide-scrollbar w-full max-w-sm max-h-[90vh] overflow-y-auto rounded-xl p-4 sm:p-5">
        {/* Brand and introduction */}
        <Link
          href="/"
          className="inline-block text-xl font-bold tracking-wide text-brand"
        >
          PicknPay
        </Link>

        <div className="mb-4 mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            Welcome back
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-ink">
            Sign in to your account
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted">
            Access your local shops, services, and marketplace activities.
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
                setMessage("");
              }}
              className="w-full rounded-lg border border-border bg-black/25 px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Password
            </label>

            <div className="flex items-center rounded-lg border border-border bg-black/25 focus-within:border-aqua focus-within:ring-2 focus-within:ring-aqua/20">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                  setMessage("");
                }}
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                className="shrink-0 px-3 py-2.5 text-xs font-semibold text-aqua hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className=" flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-aqua hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Accessible feedback for validation and submission */}
          {error && (
            <p
              role="alert"
              className="mb-4 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300"
            >
              {error}
            </p>
          )}

          {message && (
            <p
              role="status"
              className="mb-4 rounded-lg border border-aqua/20 bg-aqua/10 p-3 text-sm text-aqua"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="neon-button w-full rounded-lg bg-brand px-4 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-muted">
          New to PicknPay?{" "}
          <Link
            href="/signup"
            className="font-semibold text-aqua hover:underline"
          >
            Create an account
          </Link>
        </p>

        <p className="mt-3 text-center text-xs leading-5 text-muted">
          By continuing, you agree to PicknPay Terms and Conditions and Privacy
          Policy .
        </p>
      </section>
    </main>
  );
}
