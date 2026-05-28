import type { APIError, APIResult } from "../types/errores"
import type { Pala } from "../types/pala"

const baseURL: string = 'http://localhost:8080'

export async function mostrarPala(): Promise<APIResult<Pala[]>> {
  const url = `${baseURL}/api/pala`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const palas: Pala[] = await response.json()
    return { ok: true, data: palas }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}

export async function obtenerPalaPorId(
  id: string
): Promise<APIResult<Pala>> {
  const response = await fetch(`${baseURL}/api/pala/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const pala: Pala = await response.json()
    return { ok: true, data: pala }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}