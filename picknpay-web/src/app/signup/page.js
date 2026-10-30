"use client";

import { useState } from "react";
import Link from "next/link";
import { authApi } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  // Field-specific and form-wide feedback.
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Blocks duplicate submissions while a request is in progress.
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sanctum bearer token held in memory only: never persisted, never logged.
  const [token, setToken] = useState(null);
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PASSWORD_MIN_LENGTH = 8;

  function clearFieldError(field) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setGeneralError("");
  }

  function validate() {
    const nextErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      nextErrors.password = `Your password must contain at least ${PASSWORD_MIN_LENGTH} characters.`;
    }

    if (!confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      nextErrors.confirmPassword = "Your passwords do not match.";
    }

    return nextErrors;
  }

  function hasErrors(errorMap) {
    return Object.values(errorMap).some((value) => value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setGeneralError("");
    setSuccessMessage("");

    const nextErrors = validate();
    if (hasErrors(nextErrors)) {
      setErrors(nextErrors);
      setGeneralError("Please fix the errors marked above.");
      return;
    }

    setErrors({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsSubmitting(true);

    try {
      const data = await authApi.register({
        name: name.trim(),
        email: email.trim(),
        password,
        password_confirmation: confirmPassword,
      });

      setToken(data.token ?? null);
      setSuccessMessage(
        data.message || "Account created successfully. You can now sign in.",
      );
      // Redirect to the login page after successful registration
      router.push("/login");
    } catch (error) {
      if (error.status === 422) {
        const backendErrors = error.data?.errors ?? {};
        setErrors({
          name: Array.isArray(backendErrors.name)
            ? backendErrors.name[0]
            : backendErrors.name || "",
          email: Array.isArray(backendErrors.email)
            ? backendErrors.email[0]
            : backendErrors.email || "",
          password: Array.isArray(backendErrors.password)
            ? backendErrors.password[0]
            : backendErrors.password || "",
          confirmPassword: Array.isArray(backendErrors.password_confirmation)
            ? backendErrors.password_confirmation[0]
            : backendErrors.password_confirmation || "",
        });
        setGeneralError(
          error.data?.message || "Please correct the errors marked above.",
        );
        return;
      }

      if (error.status === 429) {
        setGeneralError(
          "Too many registration attempts.Try again after 5 minutes.",
        );
        return;
      }

      setGeneralError(
        "Unable to create your account. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-3 py-4 sm:py-6">
      <section className="glass-panel hide-scrollbar w-full max-w-sm max-h-[90vh] overflow-y-auto rounded-xl p-4 sm:p-5">
        <Link
          href="/"
          className="inline-block text-xl font-bold tracking-wide text-brand"
        >
          PicknPay
        </Link>

        <div className="mb-4 mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
            Join PicknPay
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-ink">
            Create your account
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted">
            Discover local shops, services, and convenient delivery.
          </p>
        </div>

        <form
          className="space-y-3"
          onSubmit={handleSubmit}
          noValidate
          aria-busy={isSubmitting}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                clearFieldError("name");
              }}
              className="w-full rounded-lg border border-border bg-black/25 px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              required
            />
            {errors.name && (
              <p
                role="alert"
                className="mb-1 rounded-lg border border-red-400/30 bg-red-500/10 p-2 text-xs text-red-300"
              >
                {errors.name}
              </p>
            )}
          </div>

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
                clearFieldError("email");
              }}
              className="w-full rounded-lg border border-border bg-black/25 px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              required
            />
            {errors.email && (
              <p
                role="alert"
                className="mb-1 rounded-lg border border-red-400/30 bg-red-500/10 p-2 text-xs text-red-300"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                clearFieldError("password");
              }}
              className="w-full rounded-lg border border-border bg-black/25 px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              required
              minLength={8}
            />
            {errors.password && (
              <p
                role="alert"
                className="mb-1 rounded-lg border border-red-400/30 bg-red-500/10 p-2 text-xs text-red-300"
              >
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
                clearFieldError("confirmPassword");
              }}
              className="w-full rounded-lg border border-border bg-black/25 px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              required
              minLength={8}
            />
            {errors.confirmPassword && (
              <p
                role="alert"
                className="mb-1 rounded-lg border border-red-400/30 bg-red-500/10 p-2 text-xs text-red-300"
              >
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {generalError && (
            <p
              role="alert"
              className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300"
            >
              {generalError}
            </p>
          )}

          {successMessage && (
            <p
              role="status"
              className="rounded-lg border border-aqua/20 bg-aqua/10 p-3 text-sm text-aqua"
            >
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="neon-button w-full rounded-lg bg-brand px-4 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-aqua hover:underline"
          >
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
}
