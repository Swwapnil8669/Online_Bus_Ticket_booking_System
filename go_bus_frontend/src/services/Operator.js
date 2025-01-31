import { createUrl } from "../utils"
import axios from 'axios'
export async function registerOperatorDetails(data) {
    try {
      const url = createUrl('operator/registration')
      const body = {
        data
      }
      const response = await axios.post(url, body)
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }
