"use server";

export async function subscribeToNewsletter(_: any, formData: FormData) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL + "/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email: formData.get("email"),
          identifier: crypto.randomUUID(),
        },
      }),
    }
  );

  if (!res.ok) {
    return {
      error:
        "Ocorreu um erro ao realizar a inscrição. Tente novamente mais tarde.",
      success: "",
    };
  }

  return {
    error: "",
    success: "Inscrição realizada com sucesso!",
  };
}
