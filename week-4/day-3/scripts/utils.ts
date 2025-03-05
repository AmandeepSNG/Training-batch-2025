class UtilityService {
  public GenerateRandomId (): number {
    return 1
  }

  public async CallAPI (endpoint: string, method: APIMethods, body: unknown, headers: unknown):Promise<APIResponse>  {
    try {
      const response = await(await fetch(endpoint, {
        method,
        ...(typeof body === 'object' && body !== null ? { body: JSON.stringify(body) } : {}),
        ...(typeof headers === 'object' && headers !== null ? { headers: new Headers(headers as HeadersInit) } : {}),
      })).json().catch((error) => {
        throw error
      })
      return {
        status: response.status /** response.status */,
        message: 'SUCCESS' /** response.message */,
        data: response.body
      }
      
    } catch (error) {
      return {
        status: 500 /** error.error.status */,
        message: 'error occurred while hiting API' /**error.error.message */,
        data: []
      }
    }
  }
}