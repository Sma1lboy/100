export const info = [
    {
        name: 'Forest',
        date: '2023/12/15',
    },
    {
        name: 'Fuzzy',
        date: '2023/12/15',
    },
    {
        name: 'Firework',
        date: '2024/02/08',
    },


]
export const works = info.map((item, idx) => {
    return {
        ...item,
        no: `${idx + 1}`.padStart(3, '0')
    }
})  