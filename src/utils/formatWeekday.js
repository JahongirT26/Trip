export const formatWeekday = (date) => (
    new Date(date).toLocaleDateString('ru-RU', {
        weekday: 'short'
    })
)

