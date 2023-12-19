export const info = [
    {
        name: 'Tesasdasdast',
        date: '2023/12/15',
    },
    {
        name: 'asdasdasd',
        date: '2023/12/15',
    },
    {
        name: 'Test',
        date: '2023/12/15',
    },
    {
        name: 'Test',
        date: '2023/12/15',
    }
    
]
export const works = info.map((item, idx) => {
    return {
        ...item,
        no: `${idx+1}`.padStart (3, '0')

    }
})  