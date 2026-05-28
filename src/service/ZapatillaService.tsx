import type { APIError, APIResult } from "../types/errores"
import type { Zapatilla } from "../types/zapatilla"

const baseURL: string = 'http://localhost:8080'

export async function mostrarZapatilla(): Promise<APIResult<Zapatilla[]>> {
  const url = `${baseURL}/api/zapatilla`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const zapatillas: Zapatilla[] = await response.json()
    return { ok: true, data: zapatillas }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}

export async function obtenerZapatillaPorId(
  id: string
): Promise<APIResult<Zapatilla>> {
  const response = await fetch(`${baseURL}/api/zapatilla/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const zapatilla: Zapatilla = await response.json()
    return { ok: true, data: zapatilla }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}