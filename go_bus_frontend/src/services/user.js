import axios from 'axios'
import { createUrl } from '../utils'

export async function log_in(email, password) {
  try {
    // create the url
    const url = createUrl('user/login')

    // create the request body
    const body = {
      email,
      password,
    }

    // call the API
    const response = await axios.post(url, body)

    // get the response body
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}
export async function register(name,  email, password, phone) {
    try {
      const url = createUrl('user/register')
      const body = {
        name,
        email,
        phone,
        password,
      }
      const response = await axios.post(url, body)
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }

  export async function updatePassword(password , otp) {
    try {
      const url = createUrl('user/update-password')
      const body = {
        password,
        otp,
      }
      const token = sessionStorage['token']
      const response = await axios.put(url, body, {
        headers: { token },
      })
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }