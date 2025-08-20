export const defaultMeta = {
  title: 'Kyra Aara – Developer',
  description: 'Portfolio of Kyra Aara, showcasing projects and articles.'
};

export const getMeta = (meta: Partial<typeof defaultMeta>) => ({
  ...defaultMeta,
  ...meta,
});
