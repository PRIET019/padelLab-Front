import type { Gorra } from "../types/gorra"
import type { APIError, APIResult } from "../types/errores"

const baseURL: string = 'http://localhost:8080'

export async function mostrarGorra(): Promise<APIResult<Gorra[]>> {
  const url = `${baseURL}/api/gorra`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const gorras: Gorra[] = await response.json()
    return { ok: true, data: gorras }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}

export async function obtenerGorraPorId(
  id: string
): Promise<APIResult<Gorra>> {
  const response = await fetch(`${baseURL}/api/gorra/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const gorra: Gorra = await response.json()
    return { ok: true, data: gorra }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}