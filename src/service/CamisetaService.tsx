import type { Camiseta } from "../types/camiseta"
import type { APIError, APIResult } from "../types/errores"

const baseURL: string = 'http://localhost:8080'

export async function mostrarCamisetas(): Promise<APIResult<Camiseta[]>> {
  const url = `${baseURL}/api/camiseta`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const camisetas: Camiseta[] = await response.json()
    return { ok: true, data: camisetas }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}

export async function obtenerCamisetaPorId(
  id: string
): Promise<APIResult<Camiseta>> {
  const response = await fetch(`${baseURL}/api/camiseta/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const camiseta: Camiseta = await response.json()
    return { ok: true, data: camiseta }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}