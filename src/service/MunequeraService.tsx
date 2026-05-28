import type { APIError, APIResult } from "../types/errores"
import type { Munequera } from "../types/munequera"

const baseURL: string = 'http://localhost:8080'

export async function mostrarMunequera(): Promise<APIResult<Munequera[]>> {
  const url = `${baseURL}/api/munequera`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const munequeras: Munequera[] = await response.json()
    return { ok: true, data: munequeras }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}

export async function obtenerMunequeraPorId(
  id: string
): Promise<APIResult<Munequera>> {
  const response = await fetch(`${baseURL}/api/munequera/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (response.ok) {
    const munequera: Munequera = await response.json()
    return { ok: true, data: munequera }
  }

  const error: APIError = await response.json()
  return { ok: false, error }
}