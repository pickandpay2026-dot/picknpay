// PicknPay API configuration.
// Centralizes the backend base URL so endpoints are not hardcoded across components.
// The base URL is read from NEXT_PUBLIC_API_URL (safe to expose: it is the public
// backend origin). No secrets are stored here.
const BASE_URL =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://127.0.0.1:8000";

async function request(path, { method = "POST", body, headers = {} } = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const contentType = response.headers.get("content-type") || "";
  let data = {};
  if (contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = { message: await response.text() };
  }

  if (!response.ok) {
    const error = new Error(
      data.message || `Request failed with status ${response.status}`,
    );
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export const authApi = {
  // POST /api/register — expects { name, email, password, password_confirmation }
  // and returns 201 with { message, user, token } (Sanctum personal access token).
  register(userData) {
    return request("/api/register", { method: "POST", body: userData });
  },
  // POST /api/login — expects { email, password } and returns 200 with
  // { message, user, token } (Sanctum personal access token).
  login(credentials) {
    return request("/api/login", { method: "POST", body: credentials });
  },
};
