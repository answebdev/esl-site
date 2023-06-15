import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'sentence',
    title: 'Sentence',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'worksheet',
            title: 'Downloadable Worksheet (PDF)',
            type: 'file',
        }),
        defineField({
            name: 'question1',
            title: 'Question 1',
            type: 'blockContent',
        }),
        defineField({
            name: 'answer1',
            title: 'Answer 1',
            type: 'string',
        }),
        defineField({
            name: 'question2',
            title: 'Question 2',
            type: 'blockContent',
        }),
        defineField({
            name: 'answer2',
            title: 'Answer 2',
            type: 'string',
        }),
        defineField({
            name: 'question3',
            title: 'Question 3',
            type: 'blockContent',
        }),
        defineField({
            name: 'answer3',
            title: 'Answer 3',
            type: 'string',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
