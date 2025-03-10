window.addEventListener('DOMContentLoaded', async () => {
  // hit API using 
  const domInstance = new DOM({headings: TABLE_HEADINGS, userList: Users})
  domInstance.RenderTable()
})