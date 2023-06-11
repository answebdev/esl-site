import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'questionSet',
    title: 'Question Set',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        // defineField({
        //     name: 'questions',
        //     title: 'Questions',
        //     type: 'reference',
        //     to: { type: 'question' },
        // }),
        defineField({
            name: 'questions',
            title: 'Questions',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'question' } }],
        }),
        // defineField({
        //   name: 'publishedAt',
        //   title: 'Published at',
        //   type: 'datetime',
        // }),
        // defineField({
        //   name: 'body',
        //   title: 'Body',
        //   type: 'blockContent',
        // }),
    ],

    // preview: {
    //     select: {
    //         title: 'title',
    //         author: 'author.name',
    //         media: 'mainImage',
    //     },
    //     prepare(selection) {
    //         const { author } = selection;
    //         return { ...selection, subtitle: author && `by ${author}` };
    //     },
    // },
});
