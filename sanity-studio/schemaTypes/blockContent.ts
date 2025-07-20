export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        {
            type: 'block',
        },
        {
            type: 'image',
            options: { hotspot: 'true' },
        },
        // can add more custom blocks if needed (code, video, etc)
    ]
}