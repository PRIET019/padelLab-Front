import type { APIError, APIResult } from "../types/errores"
import type { Mochila } from "../types/mochila"

const baseURL: string = 'http://localhost:8080'

export async function mostrarMochila(): Promise<APIResult<Mochila[]>> {
  const url = `${baseURL}/api/mochila`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const mochilas: Mochila[] = await response.json()
    return { ok: true, data: mochilas }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}

export async function obtenerMochilaPorId(
  id: string
): Promise<APIResult<Mochila>> {
  const response = await fetch(`${baseURL}/api/mochila/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const mochila: Mochila = await response.json()
    return { ok: true, data: mochila }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}