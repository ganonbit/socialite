import { db } from 'src/lib/db';
import { foreignKeyReplacement } from 'src/lib/hackyFix';

export const users = () => {
  return db.user.findMany();
};

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  });
};

export const createUser = ({ input }) => {
  return db.user.create({
    data: foreignKeyReplacement(input),
  });
};

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: foreignKeyReplacement(input),
    where: { id },
  });
};

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  });
};

export const User = {
  socialHandles: (_obj, { root }) => db.user.findOne({ where: { id: root.id } }).socialHandles(),
  posts: (_obj, { root }) => db.user.findOne({ where: { id: root.id } }).posts(),
  messages: (_obj, { root }) => db.user.findOne({ where: { id: root.id } }).messages(),
  channels: (_obj, { root }) => db.user.findOne({ where: { id: root.id } }).channels(),
  comments: (_obj, { root }) => db.user.findOne({ where: { id: root.id } }).comments(),
};
