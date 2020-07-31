module.exports = () => {
    const data = { 
        templates : [
            {
                id: 1,
                name: 'Mẫu 1',
                description: 'Mẫu chuyên nghiệp - trả phí',
                thumbnail: '/templates/thumbnails/template1.png',
                file: '/templates/files/template1.html'
            },
            {
                id: 2,
                name: 'Mẫu 2',
                description: 'Mẫu cơ bản - miễn phí',
                thumbnail: '/templates/thumbnails/template2.png',
                file: '/templates/files/template2.html'
            }
          ]
    }
    return data
}