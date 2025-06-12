import { getCookie } from "@/services";
import { getLocale } from "next-intl/server";

export const getHeaders = async (
  token: boolean
): Promise<{ "Accept-Language": string; Authorization?: string } | null> => {
  const locale = await getLocale();
  const headers: {
    "Accept-Language": string;
    Authorization?: string;
  } = {
    "Accept-Language": locale,
  };

  if (token) {
    const token = await getCookie("token");
    if (!token) return null;
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

// React Query Fetch Method
export const getDataReactQuery = async (args: {
  url: string;
  token?: boolean;
}) => {
  const headers = await getHeaders(args.token || false);
  if (args.token && !headers) {
    throw new Error("Unauthorized: No token provided");
  }
  try {
    const response = await fetch(args.url, headers ? { headers } : {});
    return await response.json();
  } catch (err: any) {
    const message = err?.message || "Unexpected error occurred";
    throw new Error(message);
  }
};

// جلب البيانات العادي
export const getData = async (args: { url: string; token?: boolean }) => {
  const headers = await getHeaders(args.token || false);
  if (args.token && !headers) {
    return { code: 401 ,success:false};
  }
  try {
    const response = await fetch(args.url, headers ? { headers } : {});
    const data = await response.json();
    return { code: 200, success: true, data };
  } catch (err: any) {
    const message = err?.message || "Unexpected error occurred";
    return { code: 400,  success: true,data: message };
  }
};

// إرسال البيانات (POST)
export const postData = async (args: {
  url: string;
  token?: boolean;
  data?: any;
}) => {
  const headers = await getHeaders(args.token || false);
  const formData = getFormData(args.data || {});

  try {
    const response = await fetch(args.url, {
      method: "POST",
      headers: headers || {},
      body: formData,
    });

    const data = await response.json();
    return { ...data, code: response.status };
  } catch (err: any) {
    let message;
    if (
      err?.response?.data?.errors &&
      typeof err.response.data.errors === "object"
    ) {
      const errorMessages = Object.values(err.response.data.errors).flat();
      message = errorMessages.join(" ");
    } else if (err?.response?.data?.message) {
      message = err.response.data.message;
    } else {
      message = "Unexpected error occurred";
    }

    return {
      isError: true,
      message,
      code: err?.response?.status || 500,
    };
  }
};

function getFormData(data: any): FormData {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value as any);
  });
  return formData;
}
