export default {
    name: 'listing',
    type: 'document',
    title: 'Listing',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug', 
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      },
      {
        name: 'imagesGallery',
        title: 'Images gallery',
        type: 'array',
        type: 'array',
        of: [
          {
            type: 'image'
          },
          {
            title: 'URL',
            name: 'urlObject',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'urlField',
                type: 'url'
              }
            ]
          }
        ]
       },
      {
        name: 'date',
        type: 'string',
        title: 'Date',
      },
      {
        name: 'dateshown',
        type: 'string',
        title: 'Date Shown',
      },
      {
        name: 'denomination',
        type: 'string',
        title: 'Denomination',
      },
      {
        name: 'featured',
        type: 'boolean',
        title: "Featured"
      },
      {
          name: 'sold',
          type: 'boolean',
          title: "Sold"
      },
      {
        name: 'cac',
        type: 'boolean',
        title: "CAC"
      },
      {
        name: 'grade',
        type: 'string',
        title: 'Grade',
      },
      {
        name: 'gradenumber',
        type: 'string',
        title: 'Grade Number',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'description',
        type: 'bodyPortableText',
        title: 'Description'
      }
    ],
    orderings: [
      {
        name: 'publishingDateAsc',
        title: 'Publishing date new–>old',
        by: [
          {
            field: 'publishedAt',
            direction: 'asc'
          },
          {
            field: 'title',
            direction: 'asc'
          }
        ]
      },
      {
        name: 'publishingDateDesc',
        title: 'Publishing date old->new',
        by: [
          {
            field: 'publishedAt',
            direction: 'desc'
          },
          {
            field: 'title',
            direction: 'asc'
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'title',
        publishedAt: 'publishedAt',
        slug: 'slug',
        media: 'mainImage'
      },
    },
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image',
        price: 'price',
      }
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
  