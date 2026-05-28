import type { APIError, APIResult } from "../types/errores"
import type { Pantalon } from "../types/pantalon"

const baseURL: string = 'http://localhost:8080'

export async function mostrarPantalon(): Promise<APIResult<Pantalon[]>> {
  const url = `${baseURL}/api/pantalon`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const pantalones: Pantalon[] = await response.json()
    return { ok: true, data: pantalones }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}

export async function obtenerPantalonPorId(
  id: string
): Promise<APIResult<Pantalon>> {
  const response = await fetch(`${baseURL}/api/pantalon/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const pantalon: Pantalon = await response.json()
    return { ok: true, data: pantalon }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}