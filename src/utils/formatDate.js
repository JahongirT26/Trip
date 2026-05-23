export const formatDate = (date) => (
      new Date(date).toLocaleDateString('ru-RU', {
        day: 'numeric', 
        month: 'short'
      } )
)