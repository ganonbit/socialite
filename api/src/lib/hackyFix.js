// super hacky workaround function by @rob 🚀
// https://redwoodjs.com/docs/schema-relations#manual-workaround-to-scaffold-relational-models
export const foreignKeyReplacement = (input) => {
  let output = input;
  const foreignKeys = Object.keys(input).filter((k) => k.match(/Id$/));
  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, '');
    const value = input[key];
    delete output[key];
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    });
  });
  return output;
};
