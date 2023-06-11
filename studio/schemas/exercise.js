import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'exercise',
  title: 'Exercise',
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
    // defineField({
    //   name: 'question1',
    //   title: 'Question 1',
    //   type: 'string',
    // }),
    defineField({
      name: 'question1',
      title: 'Question 1',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion1_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion1_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion1_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion1_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion1_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion1_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion1_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion1_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    // defineField({
    //   name: 'question2',
    //   title: 'Question 2',
    //   type: 'string',
    // }),
    defineField({
      name: 'question2',
      title: 'Question 2',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion2_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion2_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion2_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion2_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion2_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion2_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion2_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion2_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question3',
      title: 'Question 3',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion3_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion3_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion3_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion3_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion3_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion3_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion3_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion3_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question4',
      title: 'Question 4',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion4_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion4_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion4_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion4_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion4_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion4_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion4_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion4_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question5',
      title: 'Question 5',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion5_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion5_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion5_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion5_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion5_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion5_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion5_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion5_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question6',
      title: 'Question 6',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion6_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion6_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion6_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion6_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion6_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion6_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion6_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion6_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question7',
      title: 'Question 7',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion7_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion7_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion7_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion7_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion7_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion7_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion7_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion7_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question8',
      title: 'Question 8',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion8_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion8_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion8_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion8_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion8_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion8_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion8_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion8_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question9',
      title: 'Question 9',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion9_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion9_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion9_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion9_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion9_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion9_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion9_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion9_4',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'question10',
      title: 'Question 10',
      type: 'blockContent',
    }),
    defineField({
      name: 'answerToQuestion10_1',
      title: 'Answer 1',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion10_1',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion10_2',
      title: 'Answer 2',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion10_2',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion10_3',
      title: 'Answer 3',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion10_3',
      title: 'Correct Answer?',
      type: 'boolean',
    }),
    defineField({
      name: 'answerToQuestion10_4',
      title: 'Answer 4',
      type: 'string',
    }),
    defineField({
      name: 'isCorrectToQuestion10_4',
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
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
