import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'question',
    title: 'Question',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        // defineField({
        //     name: 'question',
        //     title: 'Question',
        //     type: 'blockContent',
        // }),
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
        }),
        defineField({
            name: 'answer1',
            title: 'Answer 1',
            type: 'string',
        }),
        defineField({
            name: 'isCorrect1',
            title: 'Correct Answer?',
            type: 'boolean',
        }),
        defineField({
            name: 'answer2',
            title: 'Answer 2',
            type: 'string',
        }),
        defineField({
            name: 'isCorrect2',
            title: 'Correct Answer?',
            type: 'boolean',
        }),
        defineField({
            name: 'answer3',
            title: 'Answer 3',
            type: 'string',
        }),
        defineField({
            name: 'isCorrect3',
            title: 'Correct Answer?',
            type: 'boolean',
        }),
        defineField({
            name: 'answer4',
            title: 'Answer 4',
            type: 'string',
        }),
        defineField({
            name: 'isCorrect4',
            title: 'Correct Answer?',
            type: 'boolean',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
    },
});