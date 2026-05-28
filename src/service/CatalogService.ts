import type { Product } from "../types/product"

const baseURL = "http://localhost:8080"

export async function obtenerCatalogo(): Promise<Product[]> {
  const response = await fetch(`${baseURL}/api/catalog`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Error al obtener el catálogo")
  }

  return response.json()
}