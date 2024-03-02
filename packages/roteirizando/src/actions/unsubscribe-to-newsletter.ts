"use server";

export async function unsubscribeToNewsletter(_: any, formData: FormData) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL +
      "/api/subscribers/unsubscribe/" +
      formData.get("subscriberId"),
    {
      method: "DELETE",
    }
  );

  if (!res.ok) {
    return {
      error:
        "Ocorreu um erro ao cancelar a inscrição. Tente novamente mais tarde.",
      success: "",
    };
  }

  return {
    success: "Inscrição cancelada com sucesso!",
    error: "",
  };
}
