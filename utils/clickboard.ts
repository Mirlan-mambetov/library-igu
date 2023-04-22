export const boardCopy = (link: string) => {
  if (link) {
    navigator.clipboard.writeText(link)
    alert('Ссылка скопирована в буфер обмена ' + link)
  }
}