import { ENV } from "../config/env";

async function apiRequest(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${ENV.BACKEND_URL}/api/v1${endpoint}`, options);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

export async function checkToken(token) {
  return await apiRequest("/auth/check-token", "POST", { token });
}

export async function fetchCurrentUser() {
  try {
    return await apiRequest("/auth/me", "GET");
  } catch (error) {
    return null;
  }
}
