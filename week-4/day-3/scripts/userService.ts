class APIService {
  private apiEndpoint: string = ''
  private domInstance: DOM = {} as DOM
  constructor(props: {endpoint: string, domInstance: DOM}) {
    const { endpoint, domInstance } = props
    this.apiEndpoint = endpoint
    this.domInstance = domInstance
  }
  public async getUserList () {
    this.domInstance.RenderTable()
    // api hit through utility
  }
}