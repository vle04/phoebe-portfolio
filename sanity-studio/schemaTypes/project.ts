export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }, // url friendly string, helps with routing
        { name: 'description', type: 'text' },
        { name: 'date', type: 'date' },
        { name: 'role', type: 'string' },
        { name: 'skills', type: 'array', of: [{ type: 'string' }] },
        { name: 'overview', type: 'blockContent' },
        { name: 'problem', type: 'blockContent' },
        {
            name: 'images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
            // hotspot ensures most important part of image stays visible during cropping
        }
    ]
}