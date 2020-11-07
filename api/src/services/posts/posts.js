import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/hackyFix';

export const posts = () => {
  return db.post.findMany();
};

export const post = ({ id }) => {
  return db.post.findOne({
    where: { id },
  });
};

export const createPost = ({ input }) => {
  return db.post.create({
    data: foreignKeyReplacement(input),
  });
};

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  });
};

export const Post = {
  author: (_obj, { root }) => db.post.findOne({ where: { id: root.id } }).author(),
  comments: (_obj, { root }) => db.post.findOne({ where: { id: root.id } }).comments(),
};
